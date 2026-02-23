import React from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import {
  Search,
  Hash,
  Users,
  Bell,
  Settings,
  Send,
  Paperclip,
  Smile,
} from "lucide-react";

const ChatPage = () => {
  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border/50 bg-card/30 flex-col hidden md:flex">
          <div className="p-4 border-b border-border/50">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-secondary/50 border border-border/50 rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            <div className="px-3 mb-4">
              <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Channels
              </h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-2 px-2 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium">
                  <Hash className="h-4 w-4" />
                  general
                </button>
                <button className="w-full flex items-center gap-2 px-2 py-1.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md text-sm font-medium transition-colors">
                  <Hash className="h-4 w-4" />
                  engineering
                </button>
                <button className="w-full flex items-center gap-2 px-2 py-1.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md text-sm font-medium transition-colors">
                  <Hash className="h-4 w-4" />
                  design
                </button>
              </div>
            </div>

            <div className="px-3">
              <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Direct Messages
              </h3>
              <div className="space-y-1">
                {[1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-2 px-2 py-1.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md text-sm font-medium transition-colors"
                  >
                    <div className="relative">
                      <div className="w-5 h-5 rounded-full bg-secondary overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                          alt="user"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full border border-background ${i === 1 ? "bg-primary" : "bg-muted-foreground"}`}
                      ></div>
                    </div>
                    User {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-background/50 relative">
          {/* Subtle background gradient similar to hero */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/5 via-background to-background pointer-events-none"></div>

          {/* Chat Header */}
          <div className="h-14 border-b border-border/50 flex items-center justify-between px-4 sm:px-6 bg-card/30 backdrop-blur-sm z-10">
            <div className="flex items-center gap-2">
              <Hash className="h-5 w-5 text-muted-foreground" />
              <h2 className="font-semibold">general</h2>
              <span className="text-xs text-muted-foreground ml-2 px-2 py-0.5 bg-secondary/50 flex items-center rounded-sm">
                <Users className="h-3 w-3 mr-1" /> 24
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground rounded-full"
              >
                <Bell className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground rounded-full"
              >
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 z-10">
            <div className="text-center my-4">
              <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full border border-border/30">
                Welcome to the beginning of the #general channel.
              </span>
            </div>

            {/* Other user's message */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-border/50 overflow-hidden shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
                  alt="user"
                  className="w-full h-full object-cover bg-secondary"
                />
              </div>
              <div className="flex flex-col gap-1 w-full max-w-2xl">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm">System Admin</span>
                  <span className="text-xs text-muted-foreground">
                    10:00 AM
                  </span>
                </div>
                <div className="bg-secondary/40 border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
                  <p>
                    Welcome to Pulse Chat! Feel free to explore the features and
                    start collaborating.
                  </p>
                </div>
              </div>
            </div>

            {/* Current user's message */}
            <div className="flex items-start gap-4 flex-row-reverse">
              <div className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=me"
                  alt="user"
                  className="w-full h-full object-cover bg-primary/20"
                />
              </div>
              <div className="flex flex-col gap-1 items-end w-full max-w-2xl">
                <div className="flex items-baseline gap-2 flex-row-reverse">
                  <span className="font-semibold text-sm">You</span>
                  <span className="text-xs text-muted-foreground">
                    10:05 AM
                  </span>
                </div>
                <div className="bg-primary/10 border border-primary/20 text-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                  <p>
                    Thanks! The new dark theme with green accents looks amazing.
                    🚀
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-border/50 overflow-hidden shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=designer"
                  alt="user"
                  className="w-full h-full object-cover bg-secondary"
                />
              </div>
              <div className="flex flex-col gap-1 w-full max-w-2xl">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm">Alex Design</span>
                  <span className="text-xs text-muted-foreground">
                    10:08 AM
                  </span>
                </div>
                <div className="bg-secondary/40 border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
                  <p>
                    I agree, the gradient backgrounds really add that modern
                    SaaS feel. Let's make sure it's fully responsive though.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-background z-10">
            <div className="relative flex items-center bg-secondary/30 border border-border rounded-xl focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all overflow-hidden">
              <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Message #general..."
                className="flex-1 bg-transparent py-3 px-2 text-sm focus:outline-none placeholder:text-muted-foreground/70"
              />
              <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-2 mr-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-sm cursor-pointer hover:scale-105 active:scale-95 duration-200">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-muted-foreground">
                <span className="font-semibold">Pro tip:</span> Press Enter to
                send, Shift + Enter for new line.
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatPage;
