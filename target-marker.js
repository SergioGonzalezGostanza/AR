AFRAME.registerComponent('target-marker', {
    init: function() {
        alert('target-marker')
        let el = this.el

        this.addMarker = function (e) {
            let p = e. detail.intersection.point
            let scene = document.querySelector('a-scene')

            let newMark = document.createElement('a-entity')
            newMark.setAttribute('geometry', {
                primitive: 'sphere'
            })

            newMark.setAttribute('material', 'color: blue')
            newMark.setAttribute('scale', '.02 .02 .02')
            newMark.setAttribute('position', p)
            scene.appendChild(newMark)
        }

        this.el.addEventListener(( 'ontouchstart' in window ), this.addMarker)
    },
    remove: function () {
        this.el.removeEventListener(( 'ontouchstart' in window ), this.addMarker)
    }
})