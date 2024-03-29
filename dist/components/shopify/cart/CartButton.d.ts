import React from 'react';
type CartButtonProps = {
    icon?: string;
    variant?: 'topNav' | 'sideNav';
    editing?: boolean;
    label?: string;
};
declare const CartButton: React.FC<CartButtonProps>;
export default CartButton;
