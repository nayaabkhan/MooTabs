/*
---
description: A plugin for creating tab panes that provide great effect using Mootools

license: MIT-style

authors:
- Nayaab Akhtar

requires:
  core/1.2.1: '*'

provides: [MooTabs]

...
*/

var MooTabs = new Class({

    Implements: [Options, Events],

    options: {
        startIndex: 0,
        activeClass: 'active',
        windowClass: 'contentsWindow',
        fps: 120,
        duration: 400,
        transition: 'expo:in:out',
        autoPlay: true,
        autoPlayWait: 10000
    },

    initialize: function(tabs, contents, options) {
        this.setOptions(options);

        this.tabsElement = tabs[0];
        this.contentsElement = contents[0];

        this.tabsList = this.tabsElement.getChildren('li');
        this.contentsList = this.contentsElement.getChildren('li');

        this.slideFx = new Fx.Morph(this.contentsElement, {
            fps : this.options.fps,
            duration: this.options.duration,
            transition: this.options.transition
        });

        this.windowWidth = this.contentsList[0].getSize().x;
        this.currentPosition = -(this.options.startIndex * this.windowWidth);

        this.contentsElement.setStyle('left', this.currentPosition + 'px');
        this.currentIndex = this.options.startIndex;
        this.tabsCount = this.tabsList.length;

        this.activeTab = this.tabsList[this.currentIndex].addClass(this.options.activeClass);
        this.activeContents = this.contentsList[this.currentIndex];

        var contentsWindow = new Element('div', {
            'class': this.options.windowClass
        });

        contentsWindow.inject(this.tabsElement, 'after');
        contentsWindow.grab(this.contentsElement);

        this.tabsList.each(function(tab, i) {
            this.setupTabs(tab, this.contentsList[i], i);
        }, this);

        if (this.options.autoPlay) {
            this.play();
        }
    },

    setupTabs: function(tab, contents, i) {
        tab.addEvent('mousedown', function(e) {
            if (tab != this.activeTab) {
                this.stop().play();
                this.activeTab.removeClass(this.options.activeClass);
                this.activeTab = tab;
                this.activeTab.addClass(this.options.activeClass);

                var d = (i - this.currentIndex) * this.windowWidth;
                this.currentPosition -= d;
                this.slideFx.start({
                        left: this.currentPosition + 'px'
                });

                this.currentIndex = i;
                this.fireEvent('change', [tab, contents]);
            }
        }.bind(this));
    },

    play: function() {
        this.player = this.nextSlide.periodical(this.options.autoPlayWait, this);
        return this;
    },

    stop: function() {
        $clear(this.player);
        return this;
    },

    nextSlide: function() {
        if (this.currentIndex == this.tabsCount-1) {
            this.tabsList[0].fireEvent('mousedown');
        } else {
            this.tabsList[this.currentIndex+1].fireEvent('mousedown');
        }
        return this;
    },

    previousSlide: function() {
        if (this.currentIndex == 0) this.tabsList[this.tabsCount-1].fireEvent('mousedown');
        else this.tabsList[this.currentIndex-1].fireEvent('mousedown');
        return this;
    }

});
