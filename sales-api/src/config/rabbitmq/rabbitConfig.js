import amqp from "amqplib/callback_api.js";
import {
  SALES_CONFIRMATION_QUEUE,
  SALES_CONFIRMATION_ROUTING_KEY,
  PRODUCT_STOCK_UPDATE_QUEUE,
  PRODUCT_STOCK_UPDATE_ROUTING_KEY,
  PRODUCT_TOPIC,
} from "./queue.js";

import { RABBIT_MQ_URL } from "../constants/secrets.js";

const HALF_SECOND = 500;

export async function connectRabbitMq() {
  amqp.connect(RABBIT_MQ_URL, (error, connection) => {
    if (error) {
      throw error;
    }
    createQueue(
      connection,
      PRODUCT_STOCK_UPDATE_QUEUE,
      PRODUCT_STOCK_UPDATE_ROUTING_KEY,
      PRODUCT_TOPIC
    );
    createQueue(
      connection,
      SALES_CONFIRMATION_QUEUE,
      SALES_CONFIRMATION_ROUTING_KEY,
      PRODUCT_TOPIC
    );
    setTimeout(function () {
      connection.close();
    }, HALF_SECOND);
  });

  function createQueue(connection, queue, routingKey, topic) {
    connection.createChannel((error, channel) => {
      if (error) {
        throw error;
      }
      channel.assertExchange(topic, "topic", [{ durable: true }]);
      channel.assertQueue(queue, { durable: true });
      channel.bindQueue(queue, topic, routingKey);
    });
  }
}
