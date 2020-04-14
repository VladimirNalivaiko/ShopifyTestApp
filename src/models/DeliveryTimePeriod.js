'use strict';

import { mongoose } from 'mongoose';

const Schema = mongoose.Schema;

const DeliveryTimePeriodSchema = new Schema({
    start: { type: TimeSpan },
    end: { type: TimeSpan }
  });

  mongoose.model('DeliveryTimePeriod', DeliveryTimePeriodSchema);