import {FileItem} from '../types'

export const explorer: FileItem = {
  type: "folder",
  id: 1,
  name: "parent",
  items: [
    {
      type: "folder",
      id: 2,
      name: "root",
      items: [
        {
          type: "folder",
          id: 3,
          name: "src",
          items: [
            {
              type: "file",
              id: 4,
              meta: "js",
              name: "index.js",
            },
          ],
        },
        {
          type: "folder",
          id: 5,
          name: "public",
          items: [
            {
              type: "file",
              id: 6,
              meta: "ts",
              name: "index.ts",
            },
          ],
        },
        {
          type: "file",
          id: 7,
          meta: "html",
          name: "index.html",
        },
        {
          type: "folder",
          id: 8,
          name: "data",
          items: [
            {
              type: "folder",
              id: 9,
              name: "images",
              items: [
                {
                  type: "file",
                  id: 10,
                  meta: "img",
                  name: "image.png",
                },
                {
                  type: "file",
                  id: 11,
                  meta: "img",
                  name: "image2.webp",
                },
              ],
            },
            {
              type: "file",
              id: 12,
              meta: "svg",
              name: "logo.svg",
            },
          ],
        },
        {
          type: "file",
          id: 13,
          meta: "css",
          name: "style.css",
        },
      ],
    },
  ],
};
