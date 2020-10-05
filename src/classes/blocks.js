import { row, column, css } from './../utils'

export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHtml() {
        throw new Error('Метод toHtml должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const { tag = 'h1', styles } = this.options
        return row(column(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const { styles, alt, imageStyles: is } = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        return row(column(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHtml() {
        const html = this.value.map(column).join('')
        return row(html, css(this.options.styles))
    }
}