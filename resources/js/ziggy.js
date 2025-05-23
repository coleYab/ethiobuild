const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"home":{"uri":"\/","methods":["GET","HEAD"]},"rules":{"uri":"rules","methods":["GET","HEAD"]},"order.index":{"uri":"order","methods":["GET","HEAD"]},"order.create":{"uri":"order\/create","methods":["GET","HEAD"]},"order.store":{"uri":"order","methods":["POST"]},"order.show":{"uri":"order\/{order}","methods":["GET","HEAD"],"parameters":["order"],"bindings":{"order":"id"}},"order.edit":{"uri":"order\/{order}\/edit","methods":["GET","HEAD"],"parameters":["order"],"bindings":{"order":"id"}},"order.update":{"uri":"order\/{order}","methods":["PUT","PATCH"],"parameters":["order"],"bindings":{"order":"id"}},"order.destroy":{"uri":"order\/{order}","methods":["DELETE"],"parameters":["order"],"bindings":{"order":"id"}},"cart.index":{"uri":"cart","methods":["GET","HEAD"]},"cart.create":{"uri":"cart\/create","methods":["GET","HEAD"]},"cart.store":{"uri":"cart","methods":["POST"]},"cart.show":{"uri":"cart\/{cart}","methods":["GET","HEAD"],"parameters":["cart"],"bindings":{"cart":"id"}},"cart.edit":{"uri":"cart\/{cart}\/edit","methods":["GET","HEAD"],"parameters":["cart"],"bindings":{"cart":"id"}},"cart.update":{"uri":"cart\/{cart}","methods":["PUT","PATCH"],"parameters":["cart"],"bindings":{"cart":"id"}},"cart.destroy":{"uri":"cart\/{cart}","methods":["DELETE"],"parameters":["cart"],"bindings":{"cart":"id"}},"product.index":{"uri":"product","methods":["GET","HEAD"]},"product.create":{"uri":"product\/create","methods":["GET","HEAD"]},"product.store":{"uri":"product","methods":["POST"]},"product.show":{"uri":"product\/{product}","methods":["GET","HEAD"],"parameters":["product"],"bindings":{"product":"id"}},"product.edit":{"uri":"product\/{product}\/edit","methods":["GET","HEAD"],"parameters":["product"],"bindings":{"product":"id"}},"product.update":{"uri":"product\/{product}","methods":["PUT","PATCH"],"parameters":["product"],"bindings":{"product":"id"}},"product.destroy":{"uri":"product\/{product}","methods":["DELETE"],"parameters":["product"],"bindings":{"product":"id"}},"shop.index":{"uri":"shop","methods":["GET","HEAD"]},"shop.create":{"uri":"shop\/create","methods":["GET","HEAD"]},"shop.store":{"uri":"shop","methods":["POST"]},"shop.show":{"uri":"shop\/{shop}","methods":["GET","HEAD"],"parameters":["shop"],"bindings":{"shop":"id"}},"shop.edit":{"uri":"shop\/{shop}\/edit","methods":["GET","HEAD"],"parameters":["shop"],"bindings":{"shop":"id"}},"shop.update":{"uri":"shop\/{shop}","methods":["PUT","PATCH"],"parameters":["shop"],"bindings":{"shop":"id"}},"shop.destroy":{"uri":"shop\/{shop}","methods":["DELETE"],"parameters":["shop"],"bindings":{"shop":"id"}},"review.create":{"uri":"review\/create","methods":["GET","HEAD"]},"review.index":{"uri":"review","methods":["GET","HEAD"]},"review.store":{"uri":"review","methods":["POST"]},"review.show":{"uri":"review\/{review}","methods":["GET","HEAD"],"parameters":["review"],"bindings":{"review":"id"}},"review.edit":{"uri":"review\/{review}\/edit","methods":["GET","HEAD"],"parameters":["review"],"bindings":{"review":"id"}},"review.update":{"uri":"review\/{review}","methods":["PUT","PATCH"],"parameters":["review"],"bindings":{"review":"id"}},"review.destroy":{"uri":"review\/{review}","methods":["DELETE"],"parameters":["review"],"bindings":{"review":"id"}},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"settings\/profile","methods":["GET","HEAD"]},"profile.update":{"uri":"settings\/profile","methods":["PATCH"]},"profile.destroy":{"uri":"settings\/profile","methods":["DELETE"]},"password.edit":{"uri":"settings\/password","methods":["GET","HEAD"]},"password.update":{"uri":"settings\/password","methods":["PUT"]},"appearance":{"uri":"settings\/appearance","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
