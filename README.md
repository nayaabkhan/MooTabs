MooTabs
===========

Allows creation of Tabbed-Panes and provides transition effects when
switching between the panes.

![Screenshot](http://nayaab.github.com/MooTabs/screenshot.png)

How to use
----------

The following HTML snippet lists the tabs and their contents:

    <ul class="tabs">
        <li>Simple to use</li>
        <li>Easy to extend</li>
        <li>Very much customizable</li>
    </ul>
    <ul class="contents">
        <li>
            <h1>MooTabs is very convinient and easy to use.</h1>
            <p>
                Default setup allows you to create Tabpane which auto plays.
                The plugin provides several options for customization.
            </p>
        </li>
        <li>
            <h1>You could easily extend the MooTabs class, thanks to MooTools</h1>
            <p>
                The MooTools architecture allows easy extensions and improvements
                without hacking into the library code.
            </p>
        </li>
        <li>
            <h1>Customize almost everything</h1>
            <p>
                You could customize the transitions of effect, duration,
                autoPlay and it's duration as well.
            </p>
        </li>
    </ul>

The following CSS styling necessary for proper functioning:

    body {
        font: 1em "Myriad Pro", Helvetica, Arial;
        background: #121212;
        margin: 20px;
        color: #fff;
    }

    #wrapper {
        width: 500px;
        margin: 0 auto;
    }

    ul.tabs, ul.contents {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    ul.tabs { float: left}
    ul.contents {
        clear: left;
        width: 20000em;
        position: absolute;
        left: 0;
        top: 0;
    }

    ul.tabs li {
        margin: 10px 4px;
        display: inline;
        float: left;
        padding: 4px 10px;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        text-shadow: 1px 1px 1px #eee;
        background: #999;
        color: #000;
        font-weight: bold;
        cursor: default;
    }

    ul.tabs li.active { background: #ddd; }
    ul.tabs li:active { background: #666; }

    ul.contents li { float: left; display: block; width: 404px; padding: 20px; }

    .contentsWindow {
        width: 454px;
        height: 300px;
        clear: left;
        overflow: hidden;
        position: relative;
        border: 1px solid #999;
        margin: 10px 0;
        background: #0C0C0C;
    }


You can make them appear as tab panes using following code:

    var tabs, contents;
    tabs = $$('.tabs');
    contents = $$('.contents');

    var tabView = new MooTabs(tabs, contents);

Known Bugs
----------
* Currently allows only one tab pane per page
