# vue-resizesensor

## What's this ?
Vue component which provides element resize event.
Based on ResizeSensor of [css-element-queries](https://marcj.github.io/css-element-queries/)

## Requirement
Vue >= 2.0.1

## USAGE

```javascript
Vue.component("resize-sensor", require("vue-resizesensor"));

const MyComponent = Vue.extend({
    template: `
        <div style="display: relative;">
            <resize-sensor @resized="onResize" :debounce="50"></resize-sensor>
            <div>
                {{ width }} x {{ height }}
            </div>
        </div>
    `,
    data: function() {
        return { width: 0, height: 0 };
    },
    methods: {
        onResize: function() {
            this.width = this.$el.clientWidth;
            this.height = this.$el.clientHeight;
        }
    },
    attached: function() {
        this.width = this.$el.clientWidth;
        this.height = this.$el.clientHeight;
    }
});
```

NOTE: `display` of target element must be `absolute` or `relative`.

## LICENSE

MIT
