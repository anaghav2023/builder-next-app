"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const CUSTOM_COMPONENTS = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "name",
        type: "string",
        defaultValue: "hello",
      },
      {
        name: "count",
        type: "number",
        defaultValue: 0,
      },
      {
        name: "menuItems",
        friendlyName: "Menu Items",
        type: "list",
        localized: true,
        subFields: [
          {
            name: "hello",
            type: "string",
          },
        ],
        defaultValue: [
          {
            hello: "worl",
          },
        ],
        onChange: `
              let menuItems = options.get('menuItems').toJSON();
              for (const locale in menuItems) {
                  if (locale !== '@type' && menuItems[locale].length > 3) {
                      console.log('herkeh')
                      alert('Maximum items is 3.');
                      const newItems = menuItems[locale].slice(0, 3);
                      options.set('menuItems', newItems);
                  }
                  
              }
          `,
      },
    ],
  },
];

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "name",
      type: "string",
      defaultValue: "hello",
    },
    {
      name: "count",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "menuItems",
      friendlyName: "Menu Items",
      type: "list",
      localized: true,
      subFields: [
        {
          name: "hello",
          type: "string",
        },
      ],
      defaultValue: [
        {
          hello: "world",
        },
      ],
      onChange: `
        let menuItems = options.get('menuItems');
        for (const locale of menuItems.keys()) {
            if (locale !== '@type' && menuItems.get(locale).length > 3) {
                alert('Maximum items is 3.');
                const newItems = menuItems.get(locale).slice(0, 3);
                menuItems.set(locale,newItems);
                options.set('menuItems', menuItems);
            } 
        }
    `,
    },
  ],
});
