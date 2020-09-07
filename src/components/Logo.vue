<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    baseProfile="tiny"
    version="1.2"
    viewBox="0 0 422.1 329.5"
    width="50"
    height="50"
    @load="makeDraggable"
    ref="sheets"
    class="draggable"
  >
    <path
      :class="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      d="M108.2 262.6L220 39c-44.1 0-84.5 24.9-104.2 64.4L4 327c44.2 0 84.5-24.9 104.2-64.4zM306.2 226.1L418 2.5c-44.1 0-84.5 24.9-104.2 64.4L202 290.5c44.2 0 84.5-24.9 104.2-64.4z"
    />
  </svg>
</template>

<script>
export default {
  name: "Logo",
  props: {
    color: {
      type: String,
      default: "white", // green, green--outline, white
      required: false,
    },
    strokeWidth: {
      type: Number,
      default: 5,
      required: false,
    },
  },
  mounted() {
    this.makeDraggable();
  },
  methods: {
    makeDraggable() {
      // var svg = evt.target;
      var svg = this.$refs.sheets;
      svg.addEventListener("mousedown", startDrag);
      svg.addEventListener("mousemove", drag);
      svg.addEventListener("mouseup", endDrag);
      svg.addEventListener("mouseleave", endDrag);

      var selectedElement, offset, transform;

      function startDrag(evt) {
        if (evt.target.classList.contains("draggable")) {
          selectedElement = evt.target;
          offset = getMousePosition(evt);
          // Get all the transforms currently on this element
          var transforms = selectedElement.transform.baseVal;
          // Ensure the first transform is a translate transform
          if (
            transforms.length === 0 ||
            transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE
          ) {
            // Create a transform that translates by (0, 0)
            var translate = svg.createSVGTransform();
            translate.setTranslate(0, 0);
            // Add the translation to the front of the transforms list
            selectedElement.transform.baseVal.insertItemBefore(translate, 0);
          }
          transform = transforms.getItem(0);
          offset.x -= transform.matrix.e;
          offset.y -= transform.matrix.f;
        }
      }

      function drag(evt) {
        if (selectedElement) {
          evt.preventDefault();
          var coord = getMousePosition(evt);
          transform.setTranslate(coord.x - offset.x, coord.y - offset.y);
        }
      }

      function endDrag() {
        selectedElement = false;
      }

      function getMousePosition(evt) {
        var ctm = svg.getScreenCTM();
        return {
          x: (evt.clientX - ctm.e) / ctm.a,
          y: (evt.clientY - ctm.f) / ctm.d,
        };
      }
    },
  },
};
</script>

<style lang="css" scoped>
.green {
  fill: #61ffab;
  stroke: none;
}

.green--outline {
  fill: #354258;
  stroke: #61ffab;
}

.white {
  fill: mintcream;
  stroke: none;
}
</style>
