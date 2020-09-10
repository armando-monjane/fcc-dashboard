/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateProductInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  thumbnail?: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags?: Array<string | null> | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  thumbnail?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  quantity?: ModelIntInput | null;
  categoryID?: ModelIDInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  thumbnail?: string | null;
  price?: number | null;
  quantity?: number | null;
  categoryID?: string | null;
  tags?: Array<string | null> | null;
};

export type DeleteProductInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  thumbnail?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  thumbnail?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  thumbnail?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateOrderInput = {
  id?: string | null;
  costumerID: string;
};

export type ModelOrderConditionInput = {
  costumerID?: ModelIDInput | null;
  and?: Array<ModelOrderConditionInput | null> | null;
  or?: Array<ModelOrderConditionInput | null> | null;
  not?: ModelOrderConditionInput | null;
};

export type UpdateOrderInput = {
  id: string;
  costumerID?: string | null;
};

export type DeleteOrderInput = {
  id?: string | null;
};

export type CreateOrderProductInput = {
  id?: string | null;
  orderProductOrderId: string;
  orderProductProductId: string;
};

export type ModelOrderProductConditionInput = {
  and?: Array<ModelOrderProductConditionInput | null> | null;
  or?: Array<ModelOrderProductConditionInput | null> | null;
  not?: ModelOrderProductConditionInput | null;
};

export type UpdateOrderProductInput = {
  id: string;
  orderProductOrderId?: string | null;
  orderProductProductId?: string | null;
};

export type DeleteOrderProductInput = {
  id?: string | null;
};

export type CreateCostumerInput = {
  id?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  name: string;
};

export type ModelCostumerConditionInput = {
  phoneNumber?: ModelStringInput | null;
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCostumerConditionInput | null> | null;
  or?: Array<ModelCostumerConditionInput | null> | null;
  not?: ModelCostumerConditionInput | null;
};

export type UpdateCostumerInput = {
  id: string;
  phoneNumber?: string | null;
  email?: string | null;
  name?: string | null;
};

export type DeleteCostumerInput = {
  id?: string | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  thumbnail?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  quantity?: ModelIntInput | null;
  categoryID?: ModelIDInput | null;
  tags?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  thumbnail?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
  costumerID?: ModelIDInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
};

export type ModelOrderProductFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelOrderProductFilterInput | null> | null;
  or?: Array<ModelOrderProductFilterInput | null> | null;
  not?: ModelOrderProductFilterInput | null;
};

export type ModelCostumerFilterInput = {
  id?: ModelIDInput | null;
  phoneNumber?: ModelStringInput | null;
  email?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCostumerFilterInput | null> | null;
  or?: Array<ModelCostumerFilterInput | null> | null;
  not?: ModelCostumerFilterInput | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderProductMutation = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderProductMutation = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderProductMutation = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type CreateCostumerMutation = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCostumerMutation = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCostumerMutation = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    description: string | null;
    products: {
      __typename: "ModelProductConnection";
      nextToken: string | null;
    } | null;
    thumbnail: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderProductQuery = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ListOrderProductsQuery = {
  __typename: "ModelOrderProductConnection";
  items: Array<{
    __typename: "OrderProduct";
    id: string;
    order: {
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    };
    product: {
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    };
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCostumerQuery = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCostumersQuery = {
  __typename: "ModelCostumerConnection";
  items: Array<{
    __typename: "Costumer";
    id: string;
    phoneNumber: string | null;
    email: string | null;
    name: string;
    orders: {
      __typename: "ModelOrderConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  price: number;
  quantity: number;
  categoryID: string;
  tags: Array<string | null> | null;
  orders: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  description: string | null;
  products: {
    __typename: "ModelProductConnection";
    items: Array<{
      __typename: "Product";
      id: string;
      name: string;
      description: string | null;
      thumbnail: string | null;
      price: number;
      quantity: number;
      categoryID: string;
      tags: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  thumbnail: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  id: string;
  costumerID: string;
  products: {
    __typename: "ModelOrderProductConnection";
    items: Array<{
      __typename: "OrderProduct";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderProductSubscription = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderProductSubscription = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderProductSubscription = {
  __typename: "OrderProduct";
  id: string;
  order: {
    __typename: "Order";
    id: string;
    costumerID: string;
    products: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  product: {
    __typename: "Product";
    id: string;
    name: string;
    description: string | null;
    thumbnail: string | null;
    price: number;
    quantity: number;
    categoryID: string;
    tags: Array<string | null> | null;
    orders: {
      __typename: "ModelOrderProductConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCostumerSubscription = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCostumerSubscription = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCostumerSubscription = {
  __typename: "Costumer";
  id: string;
  phoneNumber: string | null;
  email: string | null;
  name: string;
  orders: {
    __typename: "ModelOrderConnection";
    items: Array<{
      __typename: "Order";
      id: string;
      costumerID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateOrder(
    input: CreateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
        createOrder(input: $input, condition: $condition) {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(
    input: UpdateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!, $condition: ModelOrderConditionInput) {
        updateOrder(input: $input, condition: $condition) {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(
    input: DeleteOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!, $condition: ModelOrderConditionInput) {
        deleteOrder(input: $input, condition: $condition) {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async CreateOrderProduct(
    input: CreateOrderProductInput,
    condition?: ModelOrderProductConditionInput
  ): Promise<CreateOrderProductMutation> {
    const statement = `mutation CreateOrderProduct($input: CreateOrderProductInput!, $condition: ModelOrderProductConditionInput) {
        createOrderProduct(input: $input, condition: $condition) {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateOrderProductMutation>response.data.createOrderProduct;
  }
  async UpdateOrderProduct(
    input: UpdateOrderProductInput,
    condition?: ModelOrderProductConditionInput
  ): Promise<UpdateOrderProductMutation> {
    const statement = `mutation UpdateOrderProduct($input: UpdateOrderProductInput!, $condition: ModelOrderProductConditionInput) {
        updateOrderProduct(input: $input, condition: $condition) {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateOrderProductMutation>response.data.updateOrderProduct;
  }
  async DeleteOrderProduct(
    input: DeleteOrderProductInput,
    condition?: ModelOrderProductConditionInput
  ): Promise<DeleteOrderProductMutation> {
    const statement = `mutation DeleteOrderProduct($input: DeleteOrderProductInput!, $condition: ModelOrderProductConditionInput) {
        deleteOrderProduct(input: $input, condition: $condition) {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteOrderProductMutation>response.data.deleteOrderProduct;
  }
  async CreateCostumer(
    input: CreateCostumerInput,
    condition?: ModelCostumerConditionInput
  ): Promise<CreateCostumerMutation> {
    const statement = `mutation CreateCostumer($input: CreateCostumerInput!, $condition: ModelCostumerConditionInput) {
        createCostumer(input: $input, condition: $condition) {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCostumerMutation>response.data.createCostumer;
  }
  async UpdateCostumer(
    input: UpdateCostumerInput,
    condition?: ModelCostumerConditionInput
  ): Promise<UpdateCostumerMutation> {
    const statement = `mutation UpdateCostumer($input: UpdateCostumerInput!, $condition: ModelCostumerConditionInput) {
        updateCostumer(input: $input, condition: $condition) {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCostumerMutation>response.data.updateCostumer;
  }
  async DeleteCostumer(
    input: DeleteCostumerInput,
    condition?: ModelCostumerConditionInput
  ): Promise<DeleteCostumerMutation> {
    const statement = `mutation DeleteCostumer($input: DeleteCostumerInput!, $condition: ModelCostumerConditionInput) {
        deleteCostumer(input: $input, condition: $condition) {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCostumerMutation>response.data.deleteCostumer;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            products {
              __typename
              nextToken
            }
            thumbnail
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrdersQuery>response.data.listOrders;
  }
  async GetOrderProduct(id: string): Promise<GetOrderProductQuery> {
    const statement = `query GetOrderProduct($id: ID!) {
        getOrderProduct(id: $id) {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOrderProductQuery>response.data.getOrderProduct;
  }
  async ListOrderProducts(
    filter?: ModelOrderProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrderProductsQuery> {
    const statement = `query ListOrderProducts($filter: ModelOrderProductFilterInput, $limit: Int, $nextToken: String) {
        listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            order {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            product {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListOrderProductsQuery>response.data.listOrderProducts;
  }
  async GetCostumer(id: string): Promise<GetCostumerQuery> {
    const statement = `query GetCostumer($id: ID!) {
        getCostumer(id: $id) {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCostumerQuery>response.data.getCostumer;
  }
  async ListCostumers(
    filter?: ModelCostumerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCostumersQuery> {
    const statement = `query ListCostumers($filter: ModelCostumerFilterInput, $limit: Int, $nextToken: String) {
        listCostumers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            phoneNumber
            email
            name
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCostumersQuery>response.data.listCostumers;
  }
  OnCreateProductListener: Observable<
    OnCreateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProductSubscription>;

  OnUpdateProductListener: Observable<
    OnUpdateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProductSubscription>;

  OnDeleteProductListener: Observable<
    OnDeleteProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          description
          thumbnail
          price
          quantity
          categoryID
          tags
          orders {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProductSubscription>;

  OnCreateCategoryListener: Observable<
    OnCreateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCategorySubscription>;

  OnUpdateCategoryListener: Observable<
    OnUpdateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCategorySubscription>;

  OnDeleteCategoryListener: Observable<
    OnDeleteCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          description
          products {
            __typename
            items {
              __typename
              id
              name
              description
              thumbnail
              price
              quantity
              categoryID
              tags
              createdAt
              updatedAt
            }
            nextToken
          }
          thumbnail
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCategorySubscription>;

  OnCreateOrderListener: Observable<OnCreateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrder {
        onCreateOrder {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOrderSubscription>;

  OnUpdateOrderListener: Observable<OnUpdateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrder {
        onUpdateOrder {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOrderSubscription>;

  OnDeleteOrderListener: Observable<OnDeleteOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrder {
        onDeleteOrder {
          __typename
          id
          costumerID
          products {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOrderSubscription>;

  OnCreateOrderProductListener: Observable<
    OnCreateOrderProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrderProduct {
        onCreateOrderProduct {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOrderProductSubscription>;

  OnUpdateOrderProductListener: Observable<
    OnUpdateOrderProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrderProduct {
        onUpdateOrderProduct {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOrderProductSubscription>;

  OnDeleteOrderProductListener: Observable<
    OnDeleteOrderProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrderProduct {
        onDeleteOrderProduct {
          __typename
          id
          order {
            __typename
            id
            costumerID
            products {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          product {
            __typename
            id
            name
            description
            thumbnail
            price
            quantity
            categoryID
            tags
            orders {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOrderProductSubscription>;

  OnCreateCostumerListener: Observable<
    OnCreateCostumerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCostumer {
        onCreateCostumer {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCostumerSubscription>;

  OnUpdateCostumerListener: Observable<
    OnUpdateCostumerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCostumer {
        onUpdateCostumer {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCostumerSubscription>;

  OnDeleteCostumerListener: Observable<
    OnDeleteCostumerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCostumer {
        onDeleteCostumer {
          __typename
          id
          phoneNumber
          email
          name
          orders {
            __typename
            items {
              __typename
              id
              costumerID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCostumerSubscription>;
}
