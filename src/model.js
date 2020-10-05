import image from './assets/1.png'
import { TextBlock, TitleBlock, ImageBlock, ColumnsBlock } from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),

    new TextBlock('Lorem, ipsum dolor sit amet consectetur adipisicing elit.', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),

    new ColumnsBlock([
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt beatae, quaerat culpa natus accusamus vero soluta a quis perspiciatis, voluptatum, eum illum in optio rem repellendus placeat dolorum? Quas?',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt beatae, quaerat culpa natus accusamus vero soluta a quis perspiciatis, voluptatum, eum illum in optio rem repellendus placeat dolorum? Quas?',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt beatae, quaerat culpa natus accusamus vero soluta a quis perspiciatis, voluptatum, eum illum in optio rem repellendus placeat dolorum? Quas?',
    ],
        {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
        }),

    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'image'
    })
]
