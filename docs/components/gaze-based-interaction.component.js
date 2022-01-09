AFRAME.registerComponent('change-ambient', {
    schema: {
        normal: {type: 'string', default: '#666'},
        hover: {type: 'string', default: '#ccc'}
    },
    init: function() {
        const el = this.el;
        const normalColor = this.data.normal;
        const hoverColor = this.data.hover;
        const ambient = document.querySelector('#ambientLight');

        el.addEventListener('mouseenter', () => {
            el.setAttribute('material', 'color', hoverColor);
            el.setAttribute('light', 'color', hoverColor);
            ambient.setAttribute('light', 'color', hoverColor);
        });

        el.addEventListener('mouseleave', () => {
            el.setAttribute('material', 'color', normalColor);
            el.removeAttribute('light');
            ambient.setAttribute('light', 'color', normalColor);
        });
    }
});