<!--
Based on  https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
Copyright of original code is::
  Copyright (c) 2013 Marc J. Schmidt
-->
<template>
    <div v-el:expand class="resize-sensor" :style="style" @scroll="onScroll">
        <div :style="[childStyle, { width: '100000px', height: '100000px' }]"></div>
    </div>
    <div v-el:shrink class="resize-sensor" :style="style" @scroll="onScroll">
        <div :style="[childStyle, { width: '200%', height: '200%' }]"></div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data: function() {
            return {
                style: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                    visibility: "hidden",
                    zIndex: -1

                },
                childStyle: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    transition: "0s"
                }
            };
        },
        methods: {
            reset: function() {
                this.$els.expand.scrollLeft = 100000;
                this.$els.expand.scrollTop = 100000;
                this.$els.shrink.scrollLeft = 100000;
                this.$els.shrink.scrollTop = 100000;
            },
            onScroll: function() {
                this.$emit("resized");
                this.reset();
            }
        },
        attached: function() {
            this.reset();
        }
    };
</script>
