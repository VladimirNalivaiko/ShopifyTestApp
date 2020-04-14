'use strict';

import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const ShopifyUserSchema = new Schema({
    userId: { type: Number },
    deliveryRule: { type: Schema.Types.ObjectId, ref: 'DeliveryRule' },
    categories: [{type: Schema.Types.ObjectId, ref: 'ShopifyCategory'}]
  });

  mongoose.model('ShopifyUser', ShopifyUserSchema);