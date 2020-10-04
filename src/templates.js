import { row, column, css } from './utils'

function title(block) {
    const { tag = 'h1', styles } =  block.options
    return row(column(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block) {
    return row(column(`<p>${block.value}</p>`))
}

function columns(block) {
    const html = block.value.map(column).join('')
    return row(html)
    
}

function image(block){
    return row(`<img src=${block.value} />`)
}

export const templates = {
    title,
    text,
    image,
    columns
}