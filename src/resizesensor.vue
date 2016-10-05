<!--
Based on  https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
Copyright of original code is::
  Copyright (c) 2013 Marc J. Schmidt
-->
<template>
    <div class="resize-sensor" :style="$options.style.root">
        <div ref="expand" :style="$options.style.parent" @scroll="onScroll">
            <div :style="[$options.style.child, { width: '100000px', height: '100000px' }]"></div>
        </div>
        <div ref="shrink" :style="$options.style.parent" @scroll="onScroll">
            <div :style="[$options.style.child, { width: '200%', height: '200%' }]"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import _ from "lodash";
    export default {
        style: {
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
        },
        props: {
            debounce: { type: Number, default: 200, validator: v => v >= 0 }
        },
        data() {
            return {
                emitResized: _.debounce(() => this.$emit("resized"), this.debounce)
            };
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
</script>
