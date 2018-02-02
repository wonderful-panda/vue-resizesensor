"use strict";

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    root: {
        visibility: "hidden"
    },
    parent: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        visibility: "hidden",
        zIndex: -1
    },
    expandChild: {
        position: "absolute",
        left: 0,
        top: 0,
        transition: "0s",
        width: "100000px",
        height: "100000px"
    },
    shrinkChild: {
        position: "absolute",
        left: 0,
        top: 0,
        transition: "0s",
        width: "200%",
        height: "200%"
    }
};

module.exports = {
    name: "resizesensor",
    props: {
        debounce: { type: Number, default: 50, validator: function validator(v) {
                return v >= 0;
            } }
    },
    render: function render(createElement) {
        function div(options, children) {
            return createElement("div", options, children);
        }
        return div({ class: "resize-sensor", style: styles.root }, [div({
            ref: "expand",
            style: styles.parent,
            on: { scroll: this.onScroll }
        }, [div({ style: styles.expandChild })]), div({
            ref: "shrink",
            style: styles.parent,
            on: { scroll: this.onScroll }
        }, [div({ style: styles.shrinkChild })])]);
    },

    computed: {
        emitResized: function emitResized() {
            var _this = this;

            return _lodash2.default.debounce(function () {
                return _this.$emit("resized");
            }, this.debounce);
        }
    },
    methods: {
        reset: function reset() {
            this.$refs.expand.scrollLeft = 100000;
            this.$refs.expand.scrollTop = 100000;
            this.$refs.shrink.scrollLeft = 100000;
            this.$refs.shrink.scrollTop = 100000;
        },
        onScroll: function onScroll() {
            this.emitResized();
            this.reset();
        }
    },
    mounted: function mounted() {
        this.reset();
    },
    activated: function activated() {
        this.reset();
    }
};
