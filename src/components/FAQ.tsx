import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How does RessyAI handle complex orders?",
      answer: "RessyAI uses advanced natural language processing to understand context, handle modifications, and ask clarifying questions when needed. It's trained on thousands of business conversations to handle even the most complex orders with 99.9% accuracy."
    },
    {
      question: "Can I customize the AI's responses?",
      answer: "Absolutely! You can customize greetings, responses, upselling scripts, and even the AI's personality to match your brand. The system learns from your menu, pricing, and preferred responses during the setup process."
    },
    {
      question: "What happens if the AI can't handle a call?",
      answer: "If the AI encounters something it can't handle, it seamlessly transfers the call to your staff with a summary of the conversation. You can also set up specific scenarios for automatic human handoff."
    },
    {
      question: "How quickly can I get started?",
      answer: "Setup takes less than 30 minutes. Simply upload your menu, set your preferences, and forward your phone number. You can start taking AI-powered calls the same day."
    },
    {
      question: "Does it work with my existing POS system?",
      answer: "Yes! RessyAI integrates with all major POS systems including Square, Toast, Clover, and many others. Orders are sent directly to your kitchen with no manual input required."
    },
    {
      question: "What about different languages and accents?",
      answer: "RessyAI supports multiple languages and is trained to understand various accents and dialects. It can even handle calls in different languages if you serve a diverse customer base."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "No contracts required! You can start with our 7-day free trial and cancel anytime. We're confident you'll love the results, but we never lock you in."
    },
    {
      question: "How much does it cost compared to hiring staff?",
      answer: "RessyAI costs significantly less than hiring additional staff. For the price of 1-2 hours of employee wages per day, you get 24/7 coverage that never calls in sick or makes mistakes."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-scale-in">
            Frequently asked questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 animate-slide-up">
            Got questions?
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">We have answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Everything you need to know about RessyAI and how it can transform your business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 rounded-2xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-large">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;