export const entryCollectionMock = [
  {
    sys: {
      id: '1',
      type: 'Entry' as const,
      createdAt: '2023-01-01T00:00:00Z' as const,
      updatedAt: '2023-01-01T00:00:00Z' as const,
      environment: {
        sys: {
          id: 'env-id',
          type: 'Link' as const,
          linkType: 'Environment' as const,
        },
      },
      space: {
        sys: {
          id: 'space-id',
          type: 'Link' as const,
          linkType: 'Space' as const,
        },
      },
      contentType: {
        sys: {
          id: 'section',
          type: 'Link' as const,
          linkType: 'ContentType' as const,
        },
      },
      revision: 1,
      locale: 'en-US',
    },
    metadata: {
      tags: [],
    },
    fields: {
      title: 'Section 1',
      description: 'Description for section 1',
      type: 'vertical' as const,
      htmlRole: 'span' as const,
      fields: [],
      sys: {
        id: '1',
        type: 'Entry' as const,
        createdAt: '2023-01-01T00:00:00Z' as const,
        updatedAt: '2023-01-01T00:00:00Z' as const,
        environment: {
          sys: {
            id: 'env-id',
            type: 'Link' as const,
            linkType: 'Environment' as const,
          },
        },
        space: {
          sys: {
            id: 'space-id',
            type: 'Link' as const,
            linkType: 'Space' as const,
          },
        },
        contentType: {
          sys: {
            id: 'content-type-id',
            type: 'Link' as const,
            linkType: 'ContentType' as const,
          },
        },
        revision: 1,
        locale: 'en-US',
      },
      metadata: {
        tags: [],
      },
    },
  },
  {
    sys: {
      id: '2',
      type: 'Entry' as const,
      createdAt: '2023-01-01T00:00:00Z' as const,
      updatedAt: '2023-01-01T00:00:00Z' as const,
      environment: {
        sys: {
          id: 'env-id',
          type: 'Link' as const,
          linkType: 'Environment' as const,
        },
      },
      space: {
        sys: {
          id: 'space-id',
          type: 'Link' as const,
          linkType: 'Space' as const,
        },
      },
      contentType: {
        sys: {
          id: 'content-type-id',
          type: 'Link' as const,
          linkType: 'ContentType' as const,
        },
      },
      revision: 2,
      locale: 'en-US',
    },
    metadata: {
      tags: [],
    },
    fields: {
      title: 'Section 2',
      description: 'Description for section 1',
      type: 'vertical' as const,
      htmlRole: 'span' as const,
      fields: [],
      sys: {
        id: '2',
        type: 'Entry' as const,
        createdAt: '2023-01-01T00:00:00Z' as const,
        updatedAt: '2023-01-01T00:00:00Z' as const,
        environment: {
          sys: {
            id: 'env-id',
            type: 'Link' as const,
            linkType: 'Environment' as const,
          },
        },
        space: {
          sys: {
            id: 'space-id',
            type: 'Link' as const,
            linkType: 'Space' as const,
          },
        },
        contentType: {
          sys: {
            id: 'content-type-id',
            type: 'Link' as const,
            linkType: 'ContentType' as const,
          },
        },
        revision: 2,
        locale: 'en-US',
      },
      metadata: {
        tags: [],
      },
    },
  },
];

export const assetMock = {
  sys: {
    id: '1',
    type: 'Asset' as const,
    createdAt: '2021-01-01T00:00:00Z' as `${number}-${number}-${number}T${number}:${number}:${number}Z`,
    updatedAt: '2021-01-01T00:00:00Z' as `${number}-${number}-${number}T${number}:${number}:${number}Z`,
    space: {
      sys: {
        id: 'spaceId',
        type: 'Link' as const,
        linkType: 'Space' as const,
      },
    },
    environment: {
      sys: {
        id: 'env',
        type: 'Link' as const,
        linkType: 'Environment' as const,
      },
    },
    revision: 1,
    locale: 'en-US',
  },
  fields: {
    file: {
      url: '//example.com/image.jpg',
      details: {
        size: 12345,
        image: {
          width: 800,
          height: 600,
        },
      },
      fileName: 'image.jpg',
      contentType: 'image/jpeg',
    },
    title: 'Example Image',
  },
  metadata: {
    tags: [],
  },
};
