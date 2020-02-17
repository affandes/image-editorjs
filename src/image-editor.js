import "./style.css"


/**
 * EditorJs Plugin for Image Embedding
 * For block only
 *
 * @typedef {object} ImageData
 * @description Data structure for input and output.
 * @property {string} url - Url of image
 * @property {string} caption - Caption for image
 * @property {string} captionPosition - Position for caption (top, bottom)
 * @property {boolean} hasBorder - Is image has border?
 * @property {string} imageSize - Image size {small, medium, large, full}
 *
 */
class ImageEditor {
    /**
     * Create new plugin and initiate data
     *
     * @param {ImageData}   data    - saved data in JSON
     * @param {object}      config  - user config in
     * @param {object}      api     - EditorJs API
     */
    constructor({data, config, api}) {
        // Setup default
        this.api = api;
        this.data = {
            url: '',
            caption: '',
            captionPosition: 'bottom',
            hasBorder: false,
            imageSize: 'medium'
        };
        this.config = {
            placeholder: 'Paste image URL here...'
        };
        Object.assign(this.data, data);
        Object.assign(this.config, config);

        // Set element
        this.wrapper = null;
        this.editor = null;
        this.viewer = null;
    }

    render() {
        this._setup();

        return this.wrapper;
    }

    _setup() {

        // Setup wrapper
        this._createWrapper();
        this._createEditor();
        this._createViewer();

        this.wrapper.appendChild(this.editor);
        this.wrapper.appendChild(this.viewer);

    }

    _createWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add(ImageEditor.CLASS.wrapper);
    }

    _createEditor() {
        let urlField = document.createElement('input');
        urlField.contentEditable = true;
        urlField.placeholder = this.config.placeholder;
        urlField.classList.add(ImageEditor.CLASS.editorUrl);

        this.editor = document.createElement('div');
        this.editor.classList.add(ImageEditor.CLASS.editor);
        this.editor.appendChild(urlField);

        if (!!this.data.url) {
            this.editor.hidden = true;
        }

        this.api.listeners.on(this.editor, 'input', () => {
            this._update();
        }, false);

        this.api.listeners.on(this.editor.childNodes[0], 'blur', (e) => {
            console.log('Blurring....');
            this.editor.hidden = true;
            this.viewer.childNodes[1].focus();
        }, false);

    }

    _createViewer() {
        this.viewer = document.createElement('figure');
        this.viewer.classList.add(ImageEditor.CLASS.viewer);
        this._update();
    }

    _update() {
        this.viewer.innerHTML = '';
        if( !!this.editor.childNodes[0].value || !!this.data.url ) {
            // Create image
            let img = document.createElement('img');
            img.src = !!this.editor.childNodes[0].value ? this.editor.childNodes[0].value : this.data.url;
            this.viewer.appendChild(img);
            // Caption
            let cap = document.createElement('figcaption');
            cap.contentEditable = true;
            cap.textContent = !!this.data.caption ? this.data.caption : '';
            this.viewer.appendChild(cap);
            // Add eventlistener
            this.api.listeners.on(this.viewer.childNodes[0], 'click', () => {
                this.editor.hidden = false;
                this.editor.childNodes[0].focus();
                this._update();
                console.log('Update: ', this.data)
            }, false);
        }
    }

    save(content) {
        return {
            url: this.editor.childNodes[0].value,
            caption: this.viewer.childNodes[1].value
        }
    }

    static get toolbox() {
        return {
            title: 'Embed Image',
            icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n' +
                '</svg>'
        };
    }

    static get CLASS() {
        return {
            wrapper: 'aff-image-wrapper',
            editor: 'aff-image-editor',
            editorUrl: 'aff-image-editor-url',
            editorCaption: 'aff-image-editor-caption',
            viewer: 'aff-image-viewer',
        };
    }
}

export default ImageEditor;