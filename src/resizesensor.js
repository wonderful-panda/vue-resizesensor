import _ from "lodash";

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
    child: {
        position: "absolute",
        left: 0,
        top: 0,
        transition: "0s"
    }
};

module.exports = {
   name: "resizesensor",
   props: {
        debounce: { type: Number, default: 50, validator: v => v >= 0 }
    },
    data() {
        return {
            emitResized: _.debounce(() => this.$emit("resized"), this.debounce)
        };
    },
    render(createElement) {
        function div(options, ...children) {
            return createElement("div", options, children);
        }
        return (
            div({ "class": "resize-sensor", style: styles.root },
                div({ ref: "expand", style: styles.parent, on: {scroll: this.onScroll } },
                    div({ style: _.assign({ width: "100000px", height: "100000px" }, styles.child) })
                ),
                div({ ref: "shrink", style: styles.parent, on: {scroll: this.onScroll } },
                    div({ style: _.assign({ width: "200%", height: "200%" }, styles.child) })
                )
            )
        );
    },
    methods: {
        reset() {
            this.$refs.expand.scrollLeft = 100000;
            this.$refs.expand.scrollTop = 100000;
            this.$refs.shrink.scrollLeft = 100000;
            this.$refs.shrink.scrollTop = 100000;
        },
        onScroll() {
            this.emitResized();
            this.reset();
        }
    },
    mounted() {
        this.reset();
    }
};