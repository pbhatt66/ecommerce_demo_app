"use server"

import { getCart, createCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(productId: string, quantity: number) {
    const cart = await getCart() ?? await createCart();

    const articleInCart = cart.items.find(item => item.productID === productId)

    if (quantity === 0) {
        if (articleInCart) {
            await prisma.cartItem.delete({
                where: {
                    id: articleInCart.id
                }
            })
        }
    }
    else {
        if (articleInCart) {
            await prisma.cartItem.update({
                where: {
                    id: articleInCart.id
                },
                data: {
                    quantity: quantity
                }
            })
        }
        else {
            await prisma.cartItem.create({
                data: {
                    cartId: cart.id,
                    productID: productId,
                    quantity : quantity
                }
            })
        }
    }

    revalidatePath("/cart");
}