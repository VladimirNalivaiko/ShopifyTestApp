'use strict';

import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const ShopifyProductSchema = new Schema({
    id: { type: Number },
    deliveryRule: { type: Schema.Types.ObjectId, ref: 'DeliveryRule' },
  });

  mongoose.model('ShopifyProduct', ShopifyProductSchema);