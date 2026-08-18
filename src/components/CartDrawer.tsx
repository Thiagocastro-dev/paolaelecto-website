import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Trash2, Plus, Minus, Send, CheckCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    let message = `*✨ NOVO PEDIDO - PAOLA ELECTO ✨*\n\n`;
    if (customerName) message += `*Cliente:* ${customerName}\n`;
    if (address) message += `*Endereço de Entrega:* ${address}\n`;
    message += `*Forma de Pagamento:* ${paymentMethod}\n\n`;
    message += `*Itens do Pedido:*\n`;

    cart.forEach((item) => {
      message += `• ${item.quantity}x ${item.product.name} - R$ ${(item.product.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\n*Total:* R$ ${totalAmount.toFixed(2)}\n\n`;
    message += `Que seja doce o dia, a vida e a alma! ❤️`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/55919984340097?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs animate-fadeIn flex justify-end">
      <div className="w-full max-w-md bg-[#fef6f6] border-l border-[#f0d1d3] h-full flex flex-col justify-between shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-[#f0d1d3] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fef6f6] border border-[#f0d1d3] text-[#e07a82] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-[#4a4a4a]">Sua Sacola</h3>
              <p className="text-xs text-[#4a4a4a]/70">{cart.length} itens selecionados</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-[#fef6f6] border border-[#f0d1d3] text-[#4a4a4a] hover:text-[#e07a82] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#10b981]/20 text-[#10b981] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#4a4a4a] font-serif">Pedido Enviado com Sucesso!</h4>
              <p className="text-sm text-[#4a4a4a]/80">
                Seu pedido foi encaminhado para o WhatsApp da Paola Electo. Nossas atendentes já vão confirmar os detalhes com você!
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClearCart();
                  onClose();
                }}
                className="mt-4 px-6 py-3 rounded-xl bg-[#e07a82] text-white font-medium text-sm hover:bg-[#d06971] transition-colors shadow-sm"
              >
                Fechar Sacola
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white border border-[#f0d1d3] text-[#e07a82] flex items-center justify-center mx-auto shadow-xs">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-base text-[#4a4a4a]">Sua sacola está vazia.</p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white border border-[#f0d1d3] text-[#4a4a4a] text-sm font-medium hover:border-[#e07a82] hover:text-[#e07a82] transition-colors shadow-xs"
              >
                Explorar Cardápio
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-white p-4 rounded-2xl border border-[#f0d1d3] flex items-center gap-4 shadow-xs"
                >
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#4a4a4a] text-sm truncate">{item.product.name}</h4>
                    <p className="text-xs text-[#e07a82] font-semibold mt-0.5">
                      R$ {item.product.price.toFixed(2).replace('.', ',')}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-6 h-6 rounded-lg bg-[#fef6f6] border border-[#f0d1d3] text-[#4a4a4a] flex items-center justify-center hover:bg-[#e07a82] hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold text-[#4a4a4a]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-6 h-6 rounded-lg bg-[#fef6f6] border border-[#f0d1d3] text-[#4a4a4a] flex items-center justify-center hover:bg-[#e07a82] hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Checkout Form */}
              <form onSubmit={handleWhatsAppCheckout} className="space-y-4 pt-6 border-t border-[#f0d1d3]">
                <h4 className="font-bold text-[#4a4a4a] text-sm">Dados para Entrega / Retirada</h4>
                <div>
                  <label className="block text-xs text-[#4a4a4a]/70 mb-1">Seu Nome</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nome completo"
                    className="w-full bg-white border border-[#f0d1d3] rounded-xl px-4 py-2.5 text-[#4a4a4a] text-sm focus:outline-none focus:border-[#e07a82]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#4a4a4a]/70 mb-1">Endereço de Entrega</label>
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Rua, número, bairro, complemento..."
                    className="w-full bg-white border border-[#f0d1d3] rounded-xl p-3 text-[#4a4a4a] text-sm focus:outline-none focus:border-[#e07a82]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#4a4a4a]/70 mb-1">Forma de Pagamento</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-white border border-[#f0d1d3] rounded-xl px-4 py-2.5 text-[#4a4a4a] text-sm focus:outline-none focus:border-[#e07a82]"
                  >
                    <option value="Pix">Pix</option>
                    <option value="Cartão de Crédito">Cartão de Crédito (na entrega)</option>
                    <option value="Dinheiro">Dinheiro</option>
                  </select>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer / Total & Checkout Button */}
        {cart.length > 0 && !isSuccess && (
          <div className="p-6 border-t border-[#f0d1d3] bg-white space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#4a4a4a]/70">Total do Pedido:</span>
              <span className="text-xl font-bold text-[#4a4a4a]">
                R$ {totalAmount.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 rounded-xl bg-[#e07a82] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:bg-[#d06971] transition-all"
            >
              <Send className="w-5 h-5" />
              <span>Finalizar Pedido via WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
