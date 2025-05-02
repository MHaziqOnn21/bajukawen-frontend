
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle } from "lucide-react";
import { Product } from "@/types/product";

interface Message {
  id: number;
  sender: "user" | "seller";
  text: string;
  timestamp: Date;
}

interface ProductChatProps {
  product: Product;
}

export const ProductChat = ({ product }: ProductChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "seller",
      text: `Hello! I'm here to help you with any questions about the ${product.name}.`,
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage.trim(),
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate seller response
    setTimeout(() => {
      const sellerMessage: Message = {
        id: messages.length + 2,
        sender: "seller",
        text: `Thank you for your interest in ${product.name}. How can I assist you further?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, sellerMessage]);
    }, 1000);
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Trigger Button */}
      <Button 
        variant="outline" 
        className="rounded-full p-2 shadow-lg hover:bg-baju-soft flex items-center gap-2"
        onClick={toggleChat}
      >
        <MessageCircle className="h-5 w-5 text-baju-heading" />
        <span className="text-baju-heading font-medium">Chat</span>
      </Button>

      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-[300px] border rounded-lg shadow-lg bg-white">
          <div className="p-4 border-b flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-baju-heading" />
            <h2 className="font-semibold text-baju-heading">Chat with Seller</h2>
          </div>
          
          <ScrollArea className="h-[300px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-[#9b87f5] text-white"
                        : "bg-gray-100 text-baju-text"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" disabled={!newMessage.trim()}>
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
