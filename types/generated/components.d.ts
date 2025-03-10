import type { Schema, Struct } from '@strapi/strapi';

export interface AsideAsideMain extends Struct.ComponentSchema {
  collectionName: 'components_aside_aside_mains';
  info: {
    description: '';
    displayName: 'aside_main';
    icon: 'book';
  };
  attributes: {
    aside_image: Schema.Attribute.Media<'images'>;
    aside_text: Schema.Attribute.Text;
    aside_title: Schema.Attribute.String;
  };
}

export interface ContentContentMain extends Struct.ComponentSchema {
  collectionName: 'components_content_content_mains';
  info: {
    description: '';
    displayName: 'content_main';
    icon: 'apps';
  };
  attributes: {
    content_image: Schema.Attribute.Media<'images'>;
    content_text: Schema.Attribute.Text;
    content_title: Schema.Attribute.String;
  };
}

export interface HeaderHeaderMain extends Struct.ComponentSchema {
  collectionName: 'components_header_header_mains';
  info: {
    description: '';
    displayName: 'header_main';
    icon: 'archive';
  };
  attributes: {
    header_image: Schema.Attribute.Media<'images'>;
    header_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aside.aside-main': AsideAsideMain;
      'content.content-main': ContentContentMain;
      'header.header-main': HeaderHeaderMain;
    }
  }
}
