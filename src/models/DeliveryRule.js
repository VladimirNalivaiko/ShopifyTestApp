'use strict';

import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const DeliveryRuleSchema = new Schema({
    name: { type: String, default: '' },
    timeShift: { type: TimeSpan, default: 0 },
    periods: [DeliveryTimePeriodSchema]
  });

  mongoose.model('DeliveryRule', DeliveryRuleSchema);