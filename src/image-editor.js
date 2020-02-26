import "./style.css"


/**
 * EditorJs Plugin for Image Embedding
 * For block only
 * ©2020 affandes@gmail.com
 *
 * @typedef {object} ImageData
 * @description Data structure for input and output.
 * @property {string} url - Url of image
 * @property {string} caption - Caption for image
 * @property {boolean} hasCaption - Is show caption?
 * @property {boolean} hasBorder - Is image has border?
 * @property {string} align - Image alignment {left, center, right}
 *
 */
class ImageEditor {
    /**
     * Create new plugin and initiate data
     *
     * @param {ImageData}   data    - saved data in JSON
     * @param {object}      api     - EditorJs API
     * @param {object}      config  - user config in
     */
    constructor({data, api, config}) {
        this.api = api;
        this.data = {
            url: '',
            caption: '',
            hasCaption: true,
            hasBorder: false,
            align: 'left'
        };
        this.config = {
            placeholder: 'Paste image URL here...',
            urlPatterns: null
        };
        this.settingsButton = [
            {
                name: 'leftAlign',
                icon: '<i class="fas fa-fw fa-align-left"></i>'
            },
            {
                name: 'centerAlign',
                icon: '<i class="fas fa-fw fa-align-center"></i>'
            },
            {
                name: 'rightAlign',
                icon: '<i class="fas fa-fw fa-align-right"></i>'
            },
            {
                name: 'hasBorder',
                icon: '<i class="fas fa-fw fa-border-style"></i>'
            },
            {
                name: 'hasCaption',
                icon: '<i class="fas fa-fw fa-closed-captioning"></i>'
            },
        ];
        Object.assign(this.data, data);
        Object.assign(this.config, config);

        this.content = null;
        this.input = null;
        this.image = null;
        this.caption = null;
        this.settings = null;
    }

    render() {
        this._setup();
        return this.content;
    }

    renderSettings() {
        return this._setupSettings();
    }

    validate(data) {
        return this._isValidImageURL(data.url);
    }

    _setup() {
        this.content = this._createContent();
    }

    _createContent() {
        let content = document.createElement('div');
        content.classList.add('cdx-block');
        content.classList.add(ImageEditor.CLASS.content);

        let inputBlock = this._createInputBlock();
        let imageBlock = this._createImageBlock();

        content.appendChild(inputBlock);
        content.appendChild(imageBlock);

        return content;
    }

    _createInputBlock() {
        let hasValidImageUrl = this._isValidImageURL(this.data.url);

        this.input = document.createElement('div');
        this.input.classList.add('cdx-input');
        this.input.contentEditable = true;
        this.input.placeholder = 'Paste image URL here...';
        this.input.textContent = this.data.url;

        this.api.listeners.on(this.input, 'blur', (event => {
            let imageUrl = event.target.textContent;
            if( !this._isValidImageURL(imageUrl) ) {
                console.log('============');
            } else {
                this._showImage(imageUrl);
            }
        }));

        let wrapper = document.createElement('div');
        wrapper.classList.add(ImageEditor.CLASS.input);
        wrapper.hidden = hasValidImageUrl;

        wrapper.appendChild(this.input);

        return wrapper;
    }

    _createImageBlock() {
        let hasValidImageUrl = this._isValidImageURL(this.data.url);

        let fig = document.createElement('figure');
        fig.classList.add(ImageEditor.CLASS.image);
        if( this.data.align === 'left' ) {
            fig.classList.add(ImageEditor.CLASS.align[0]);
        } else if( this.data.align === 'center' ) {
            fig.classList.add(ImageEditor.CLASS.align[1]);
        } else if( this.data.align === 'right' ) {
            fig.classList.add(ImageEditor.CLASS.align[2]);
        }
        fig.hidden = !hasValidImageUrl;

        this.image = document.createElement('img');
        this.image.src = this.data.url;

        this.caption = document.createElement('figcaption');
        this.caption.contentEditable = true;
        this.caption.textContent = this.data.caption;
        this.caption.hidden = !this.data.hasCaption;

        this.api.listeners.on(this.caption, 'focus', (event => {
            let elm = event.target;
            elm.classList.add('cdx-input');
        }));

        this.api.listeners.on(this.caption, 'blur', (event => {
            let elm = event.target;
            elm.classList.remove('cdx-input');
        }));

        fig.appendChild(this.image);
        fig.appendChild(this.caption);

        return fig;
    }

    _showImage(url) {
        this.image.src = url;
        this.caption.textContent = 'Your label here...';

        let imageBlock = this.image.parentNode;
        imageBlock.hidden = false;

        let inputBlock = this.input.parentNode;
        inputBlock.hidden = true;

    }

    _setupSettings() {
        this.settings = document.createElement('div');
        this.settings.classList.add(ImageEditor.CLASS.setting);
        this.settings.hidden = !this.input.parentNode.hidden;

        for (let i = 0; i < this.settingsButton.length; i++) {
            let button = document.createElement('div');
            button.classList.add('cdx-settings-button');
            button.innerHTML = this.settingsButton[i].icon;

            if(
                (i === 0 && this.data.align === 'left')
                || (i === 1 && this.data.align === 'center')
                || (i === 2 && this.data.align === 'right')
                || (i === 3 && this.data.hasBorder)
                || (i === 4 && this.data.hasCaption)
            ) {
                button.classList.add('cdx-settings-button--active');
            }

            button.addEventListener('click', (ev => {
                this._toggleSetting(ev, i);
            }));

            this.settings.appendChild(button);
        }

        return this.settings;
    }

    _toggleSetting(event, id) {
        switch (id) {
            case 0:
            case 1:
            case 2:
                this._setImageAlign(event, id);
                break;
            case 3:
                this._setBorder(event);
                break;
            case 4:
                this._showCaption(event);
                break;
        }
    }

    _setImageAlign(event, id) {
        let settings = this.settings.childNodes;
        let imageParent = this.image.parentNode;

        for (let i = 0; i < 3; i++) {
            settings[i].classList.remove('cdx-settings-button--active');
            imageParent.classList.remove(ImageEditor.CLASS.align[i]);
        }

        settings[id].classList.add('cdx-settings-button--active');
        imageParent.classList.add(ImageEditor.CLASS.align[id]);
    }

    _setBorder(event) {
        let target = event.target.tagName === 'I' ? event.target.parentNode : event.target;
        target.classList.toggle('cdx-settings-button--active');

        this.image.classList.toggle('has-border');
    }

    _showCaption(event) {
        let target = event.target.tagName === 'I' ? event.target.parentNode : event.target;
        target.classList.toggle('cdx-settings-button--active');

        this.caption.hidden = !this.caption.hidden;
    }

    _isValidImageURL(url) {
        if( undefined === url || null === url ) {
            console.log('URL is undefined or null!');
            return false;
        } else if( '' === url ) {
            console.log('URL is empty!');
            return false;
        } else {
            console.log('Validating URL Pattern');
            if( this.config.urlPatterns === null ) {
                console.log('Default pattern...');
                if( url.match(ImageEditor.PATTERN.urlImage) === null ) {
                    return false;
                }
            } else if( typeof this.config.urlPatterns.test === 'function' ) {
                console.log('Custom pattern...');
                if( url.match(this.config.urlPatterns) === null ) {
                    return false;
                }
            } else if( typeof this.config.urlPatterns.push === 'function' ) {
                console.log('Custom patterns...');
                let isValid = false;
                for (let i = 0; i < this.config.urlPatterns.length; i++) {
                    if( url.match(this.config.urlPatterns[i]) !== null ) {
                        isValid = true;
                        break;
                    }
                }
                return isValid;
            }

            console.log('Else pattern...');
            return true;
        }
    }

    save(content) {
        let imageParent = this.image.parentNode;
        let align = (imageParent.classList.contains('left-aligned') ? 'left' : (imageParent.classList.contains('center-aligned') ? 'center' : (imageParent.classList.contains('right-aligned') ? 'right' : '')));

        return {
            url: this.input.textContent,
            caption: this.caption.textContent,
            hasCaption: !this.caption.hidden,
            hasBorder: this.image.classList.contains('has-border'),
            align: align
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
            content: 'aff-image-content',
            input: 'aff-image-input',
            image: 'aff-image-figure',
            label: 'aff-image-caption',
            setting: 'aff-image-setting',
            align: [
                'left-aligned',
                'center-aligned',
                'right-aligned',
            ]
        };
    }

    static get PATTERN() {
        return {
            urlImage: /(http[s]?:\/\/.*?.(jpg|png|gif|svg))/g
        }
    }

}

export default ImageEditor;