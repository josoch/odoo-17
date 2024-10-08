/** @odoo-module **/
import { Order } from "@point_of_sale/app/store/models";
import { patch } from "@web/core/utils/patch";

// Define the Partial class
patch(Order.prototype, {
     constructor() {
         this.super(...arguments);
         this.partial_payment =  false
         this.is_partial_payment = this.is_partial_payment || false;
     },
     set_order_suggestion(suggestion){
         this.is_partial_payment = is_partial_payment
     },
     //send order data to send to the server
     export_as_JSON() {
         const json = super.export_as_JSON(...arguments)
         json.is_partial_payment = this.is_partial_payment ;
         return json;
     },
     init_from_JSON(json) {
         super.init_from_JSON(...arguments);
         this.is_partial_payment = json.is_partial_payment;
     }
});
