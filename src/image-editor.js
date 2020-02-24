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
        this.settings = [
            {
                name: 'leftAlign',
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
            },
            {
                name: 'centerAlign',
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
            },
            {
                name: 'rightAlign',
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
            },
            {
                name: 'hasBorder',
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0.000000,25.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M45 200 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/><path d="M138 203 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/><path d="M185 200 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z"/><path d="M201 154 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/><path d="M41 104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/><path d="M201 104 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/><path d="M40 61 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3 -10 2 -10 -4z"/><path d="M189 53 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/><path d="M88 43 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/><path d="M138 43 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/></g></svg>'
            },
            {
                name: 'captionPosition',
                icon: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'
            },
        ];
        Object.assign(this.data, data);
        Object.assign(this.config, config);

        // Set element
        this.wrapper = null;
    }

    render() {
        console.log('Run: render()');
        this._setup();
        return this.wrapper;
    }

    /*renderSettings() {
        return this._createSetting();
    }*/

    validate(data) {
        if( !data && !data.url.trim() ) {
            return false;
        }
        return true;
    }

    _setup() {

        console.log('Run: setup()');
        // Setup wrapper
        this._createWrapper();

        if( !!this.data.url ) {
            this._createImage();
        } else {
            this._createUrlInput();
        }
    }

    _createWrapper() {
        console.log('Run: Wrapper()');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('cdx-block');
        this.wrapper.classList.add(ImageEditor.CLASS.wrapper);
    }

    _clearWrapper() {
        if( this.wrapper ) {
            this.wrapper.innerHTML = '';
        }
    }

    _createUrlInput() {
        console.log('Run: UrlInput()');
        let input = document.createElement('div');
        input.contentEditable = true;
        input.classList.add('cdx-input');
        input.placeholder = 'Coba dulu'; //this.config.placeholder;

        this._clearWrapper();
        this.wrapper.appendChild(input);

        this.api.listeners.on(this.wrapper.childNodes[0], 'blur', (event => {
            if( !event.target.textContent ) {
                console.warn('No file loaded!');
            } else if( event.target.textContent.match(ImageEditor.PATTERN.urlImage) === null ) {
                console.warn('Invalid URL!');
            } else {
                this._createImage();
            }
        }));
    }

    _createImage() {
        console.log('Run: createImage()', this.data);
        let fig = document.createElement('figure');
        let img = document.createElement('img');
        let cap = document.createElement('figcaption');

        cap.textContent = !!this.data.caption ? this.data.caption : 'Your label here...';
        cap.contentEditable = true;

        cap.addEventListener('focus', (ev => {
            ev.target.classList.add('cdx-input');
        }));

        cap.addEventListener('blur', (ev => {
            if( ev.target.textContent === '' ) {
                ev.target.hidden = true;
            }
            ev.target.classList.remove('cdx-input');
        }));

        img.src = !!this.data.url ? this.data.url : this.wrapper.childNodes[0].textContent;
        fig.classList.add(ImageEditor.CLASS.figure);

        this._clearWrapper();

        if( this.data.captionPosition === 'top' && cap.textContent !== '' ) {
            fig.appendChild(cap);
        }
        fig.appendChild(img);
        if( this.data.captionPosition === 'bottom' && cap.textContent !== '' ) {
            fig.appendChild(cap);
        }

        this.wrapper.appendChild(fig);
    }

    _createSetting() {
        let wrapper = document.createElement('div');

        for (let i = 0; i < this.settings.length; i++) {
            let button = document.createElement('div');
            button.classList.add('cdx-settings-button');
            button.innerHTML = this.settings[i].icon;

            button.addEventListener('click', () => {
                this._toggleSetting(this.settings[i].name);
                button.classList.toggle('cdx-settings-button--active');
            });

            wrapper.appendChild(button);
        }

        return wrapper;
    }

    _toggleSetting(name) {
        if( name === this.settings[3].name ) {
            this.wrapper.childNodes[0].childNodes[0].classList.toggle('has-border')
        }
        if( name === this.settings[4].name ) {
            this.api.blocks.stretchBlock(this.api.blocks.getCurrentBlockIndex(), !!this.data.imageSize)
        }
    }

    save(content) {
        if( this.data.url.trim() !== '' ) {
            return {
                url: this.data.captionPosition === 'top' ? this.wrapper.childNodes[0].childNodes[1].src : this.wrapper.childNodes[0].childNodes[0].src,
                caption: this.data.captionPosition === 'top' ? this.wrapper.childNodes[0].childNodes[0].textContent : this.wrapper.childNodes[0].childNodes[1].textContent,
            }
        } else {
            return {

            }
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
            figure: 'aff-image-figure',
        };
    }

    static get PATTERN() {
        return {
            urlImage: /(http[s]?:\/\/.*?.(jpg|png|gif|svg))/g
        }
    }
}

export default ImageEditor;