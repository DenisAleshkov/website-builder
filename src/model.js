import image from './assets/1.png'

export const model = [
    {
        type: 'title',
        value: 'Конструктор сайтов на чистом JS',
        options: {
            tag: 'h1',
            styles:{
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
           
        }
    },
    {
        type: 'text',
        value: 'some text'
    },
    {
        type: 'columns',
        value: [
            '1111111',
            '2222222',
            '3333333'
        ]
    },
    {
        type: 'image',
        value: image
    }
]
