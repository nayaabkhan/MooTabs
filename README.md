MooTabs
===========

Allows creation of Tabbed-Panes and provides transition effects when
switching between the panes.

![Screenshot](http://code.google.com)

How to use
----------

The following HTML snippet lists the tabs and their contents.

    <ul class="tabs">
        <li>Tab1</li>
        <li>Tab2</li>
        <li>Tab3</li>
        <li>Tab4</li>
    </ul>
    <ul class="contents">
        <li>This is first pane</li>
        <li>This is second pane</li>
        <li>This is third pane</li>
        <li>This is fourth pane</li>
    </ul>

Styling the elements is necessary to provide scrolling effect:

    body {
        font: 1em "Lucida Sans Unicode", "Lucida Grande", Helvetica, Arial;
    }

    ul.tabs, ul.contents {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    ul.tabs { float: left }
    ul.contents {
        clear: left;
        width: 20000em;
        position: absolute;
        left: 0;
        top: 0;
    }

    ul.tabs li {
        display: inline;
        float: left;
        padding: 15px 30px;
        border: 1px solid #999;
        background: #ddd;
    }

    ul.tabs li.active { background: #999; }

    ul.contents li { float: left; display: block; width: 404px; padding: 20px; }

    .contentsWindow {
        width: 444px;
        height: 300px;
        clear: left;
        overflow: hidden;
        position: relative;
        border: 1px solid #999;
    }


You can make them appear as tab panes using following code:

    var tabs, contents;

    tabs = $$('.tabs');
    contents = $$('.contents');

    var tabView = new Mootabs(tabs, contents);

Known Bugs
----------
* Currently allows only one tab pane per page
