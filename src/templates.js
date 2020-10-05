import { row, column, css } from './utils'

function title(block) {
    const { tag = 'h1', styles } =  block.options
    return row(column(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
    return row(column(`<p>${block.value}</p>`), css(block.options.styles))
}

function columns(block) {
    const { styles } = block.options
    const html = block.value.map(column).join('')
    return row(html, css(block.options.styles))
    
}

function image(block){
    const { styles, alt, imageStyles: is } = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
}

export const templates = {
    title,
    text,
    image,
    columns
}