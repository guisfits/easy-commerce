export default class CreateShoppingCartCommand {
  constructor(
    public readonly productCatalogId: string,
    public readonly userId: string
  ) { }
}
