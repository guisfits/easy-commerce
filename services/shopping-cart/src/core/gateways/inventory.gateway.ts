import Inventory from "../domain/catalogs/inventory.interface";

export default class InventoryGateway implements Inventory {
  getAvailabilityInventories(): Promise<any> {
    // TODO
    return new Promise<any>((resolve, reject) => {
      return {};
    })
  }
}
