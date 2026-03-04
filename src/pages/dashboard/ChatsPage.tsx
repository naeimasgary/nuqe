import { useState } from "react";
import { DashboardLayout } from "../../components/DashboardLayout";

// ── Avatar assets ─────────────────────────────────────────────────────────────
const avatarJohn = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";
const avatarTim  = "https://www.figma.com/api/mcp/asset/e44a9b78-bbc6-444f-b6de-b410bda8e41b";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ChatThread {
  id: string;
  name: string;
  preview: string;
  avatar?: string;
  initials?: string;
  unread?: number;
  time?: string;
}

interface Message {
  id: string;
  text: string;
  time: string;
  isMine: boolean;
  avatar?: string;
}

// ── Sample data ───────────────────────────────────────────────────────────────
const THREADS: ChatThread[] = [
  { id: "1", name: "Tim", preview: "The table I received has a scratch on it.", avatar: avatarTim, time: "10:31" },
  { id: "2", name: "Alex Johnson", preview: "The table I receive...", initials: "AJ", unread: 1 },
  { id: "3", name: "Alex Johnson", preview: "The table I receive...", initials: "JJ", unread: 1 },
  { id: "4", name: "Alex Johnson", preview: "The table I receive...", initials: "JJ", unread: 1 },
  { id: "5", name: "Alex Johnson", preview: "The table I receive...", initials: "JJ", unread: 1 },
  { id: "6", name: "Alex Johnson", preview: "The table I receive...", initials: "JJ", unread: 1 },
  { id: "7", name: "Alex Johnson", preview: "The table I receive...", initials: "JJ", unread: 1 },
];

const MESSAGES: Message[] = [
  {
    id: "1",
    text: "Hi, I just received the wooden dining table I ordered last week. Unfortunately, there's a visible scratch on the surface.",
    time: "",
    isMine: false,
    avatar: avatarTim,
  },
  {
    id: "2",
    text: "Could you please let me know how to request a replacement or refund?",
    time: "10:31",
    isMine: false,
    avatar: avatarTim,
  },
  {
    id: "3",
    text: "Hi Alex, I'm really sorry to hear about that!\nCould you please share a photo of the damaged area so we can verify it with our quality team?",
    time: "10:32",
    isMine: true,
    avatar: avatarJohn,
  },
  {
    id: "4",
    text: "Thank you! Please wait while we're checking",
    time: "10:33",
    isMine: true,
    avatar: avatarJohn,
  },
];

// ── Avatar component ──────────────────────────────────────────────────────────
function Avatar({ src, initials, size = 40 }: { src?: string; initials?: string; size?: number }) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className="rounded-full object-cover flex-shrink-0"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="rounded-full bg-sky-brand-500 flex items-center justify-center text-white font-semibold flex-shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}

// ── Thread list ───────────────────────────────────────────────────────────────
function ThreadList({
  threads,
  activeId,
  onSelect,
}: {
  threads: ChatThread[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-col h-full border-r border-neutral-200 bg-white" style={{ minWidth: 220, maxWidth: 280, width: "28%" }}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
        <h2 className="text-lg font-bold text-text-default">Chats</h2>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>

      <ul className="flex flex-col overflow-y-auto flex-1 py-1 list-none">
        {threads.map((thread) => (
          <li key={thread.id}>
            <button
              className={[
                "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors",
                activeId === thread.id ? "bg-neutral-100" : "",
              ].join(" ")}
              onClick={() => onSelect(thread.id)}
            >
              <Avatar src={thread.avatar} initials={thread.initials} size={40} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-sm font-medium text-text-default truncate">{thread.name}</span>
                  {thread.time && <span className="text-xs text-neutral-400 flex-shrink-0">{thread.time}</span>}
                </div>
                <p className="text-xs text-neutral-500 truncate mt-0.5">{thread.preview}</p>
              </div>
              {thread.unread && (
                <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center leading-none flex-shrink-0">
                  {thread.unread}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Message bubble ─────────────────────────────────────────────────────────────
function MessageBubble({ msg }: { msg: Message }) {
  return (
    <div className={`flex items-end gap-2 ${msg.isMine ? "flex-row-reverse" : "flex-row"}`}>
      <Avatar src={msg.avatar} size={32} />
      <div className={`flex flex-col gap-1 max-w-[65%] ${msg.isMine ? "items-end" : "items-start"}`}>
        <div
          className={[
            "px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
            msg.isMine
              ? "bg-sky-brand-100 text-text-default rounded-br-sm"
              : "bg-neutral-100 text-text-default rounded-bl-sm",
          ].join(" ")}
        >
          {msg.text}
        </div>
        {msg.time && (
          <span className="text-xs text-neutral-400">{msg.time}</span>
        )}
      </div>
    </div>
  );
}

// ── Conversation panel ────────────────────────────────────────────────────────
function ConversationPanel({ thread }: { thread: ChatThread }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col flex-1 min-w-0 bg-white h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-200 flex-shrink-0">
        <Avatar src={thread.avatar} initials={thread.initials} size={40} />
        <div className="flex-1">
          <p className="text-sm font-semibold text-text-default">{thread.name}</p>
          <p className="text-xs text-neutral-400 truncate">{thread.preview}</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
        {MESSAGES.map((msg) => (
          <MessageBubble key={msg.id} msg={msg} />
        ))}
        {/* Typing indicator */}
        <div className="flex items-center gap-2">
          <Avatar src={avatarTim} size={28} />
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-neutral-100 rounded-2xl rounded-bl-sm">
            <span className="text-sm text-neutral-500 italic">Typing ...</span>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-3 px-5 py-4 border-t border-neutral-200 flex-shrink-0">
        <div className="flex-1 flex items-center gap-2 h-11 px-4 rounded-full border border-neutral-200 bg-neutral-50 focus-within:border-sky-brand-400 focus-within:bg-white transition-all">
          <input
            type="text"
            placeholder="Type your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-sm text-text-default placeholder:text-neutral-400 outline-none"
            onKeyDown={(e) => e.key === "Enter" && setInput("")}
          />
          <button className="flex-shrink-0 text-neutral-400 hover:text-neutral-600 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
        <button
          className="w-11 h-11 rounded-full bg-sky-brand-500 text-white flex items-center justify-center hover:bg-sky-brand-600 transition-colors flex-shrink-0 shadow-xs"
          onClick={() => setInput("")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function ChatsPage() {
  const [activeId, setActiveId] = useState(THREADS[0].id);
  const activeThread = THREADS.find((t) => t.id === activeId) ?? THREADS[0];

  return (
    <DashboardLayout>
      {/* Override main padding — chats needs full height */}
      <div className="-m-6 h-[calc(100vh-80px)] flex">
        <div className="flex flex-1 rounded-2xl overflow-hidden border border-neutral-200 shadow-xs m-6">
          <ThreadList threads={THREADS} activeId={activeId} onSelect={setActiveId} />
          <ConversationPanel thread={activeThread} />
        </div>
      </div>
    </DashboardLayout>
  );
}
