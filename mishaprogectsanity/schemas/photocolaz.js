export default {
  name: 'photocolaz',
  title: 'Фотоколаж',
  type: 'document',
  fields: [
    {
      name: 'idtovary',
      title: 'Номер Товару',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Назва',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Автор',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Головна Картинка',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Ціна',
      type: 'string',
    },
    {
      name: 'materialpost',
      title: 'Матеріал',
      type: 'string',
    },
    {
      name: 'virobnyk',
      title: 'Виробник',
      type: 'string',
    },
    {
      name: 'dopovnennya',
      title: 'Доповнення',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Тіло',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'idtovary',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}