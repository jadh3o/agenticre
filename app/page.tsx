"use client";

import React, { useState } from 'react';
import { 
  Mountain, 
  Map, 
  Check, 
  ArrowRight, 
  Menu, 
  X, 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  Smartphone,
  Zap,
  Users,
  Award,
  PlayCircle,
  Gift,
  Target,
  Calculator,
  TrendingUp,
  Phone,
  Percent
} from 'lucide-react';

// --- QUIZ DATA ---
const quizData = [
  {
    id: 1,
    question: "How many hours per week do you spend manually following up with leads?",
    options: [
      { text: "0-5 hours (I have a system)", points: 0 },
      { text: "5-10 hours (manageable but tedious)", points: 1 },
      { text: "10-20 hours (it's overwhelming)", points: 2 },
      { text: "20+ hours (it's all I do)", points: 3 }
    ]
  },
  {
    id: 2,
    question: "Pop quiz: If a lead fills out a form at 8pm on Saturday, when do you respond?",
    statCallout: true,
    options: [
      { 
        text: "Within 5 minutes (I'm always on my phone)", 
        points: 1, 
        subtext: "Even at 2am? On Christmas? During your kid's soccer game?" 
      },
      { 
        text: "Within an hour (I check regularly)", 
        points: 2, 
        subtext: "You just became 10x less likely to connect" 
      },
      { 
        text: "Next business day (I have boundaries)", 
        points: 3, 
        subtext: "By then, they've called 3 other agents. You lost." 
      },
      { 
        text: "I have AI that responds instantly, 24/7", 
        points: 0, 
        subtext: "This is the only answer that doesn't lose money" 
      }
    ]
  },
  {
    id: 3,
    question: "Quick math: What does ONE missed lead actually cost you?",
    subtext: "The average real estate deal is $8,000 in commission...",
    options: [
      { 
        text: "Holy shit, I never thought about it that way", 
        points: 3 
      },
      { 
        text: "I know I'm losing money but try not to think about it", 
        points: 3 
      },
      { 
        text: "I respond fast but probably still miss 2-3 per month", 
        points: 2, 
        subtext: "That's $16,000-$24,000 lost EVERY MONTH" 
      },
      { 
        text: "I respond to every lead within 5 minutes, 24/7/365", 
        points: 0, 
        subtext: "Even on Christmas? Your kid's birthday? 2am Saturday?" 
      }
    ]
  },
  {
    id: 4,
    question: "If missing ONE lead costs you $8,000... how many are you actually missing per month?",
    subtext: "Be brutally honest. Think about leads that came in after hours, weekends, or when you were with a client.",
    options: [
      { 
        text: "Probably 1-2 leads per month", 
        points: 2, 
        calc: "$8,000-$16,000/month = $96,000-$192,000/year" 
      },
      { 
        text: "Realistically 3-5 leads per month", 
        points: 3, 
        calc: "$24,000-$40,000/month = $288,000-$480,000/year" 
      },
      { 
        text: "Honestly? Probably 6-10 leads per month", 
        points: 4, 
        calc: "$48,000-$80,000/month = $576,000-$960,000/year" 
      },
      { 
        text: "I literally never miss a lead (I have a system)", 
        points: 0 
      }
    ]
  },
  {
    id: 5,
    question: "How comfortable are you with AI and automation tools?",
    options: [
      { text: "Very comfortable - I use them daily", points: 0 },
      { text: "Somewhat comfortable - willing to learn", points: 1 },
      { text: "Not comfortable but desperate for help", points: 2 },
      { text: "Terrified but know I need to adapt", points: 3 }
    ]
  },
  {
    id: 6,
    question: "If you could invest $2,500 to get 10-20 qualified leads per month AND learn to convert them, would you?",
    options: [
      { text: "Absolutely - that's a no-brainer", points: 3 },
      { text: "Probably, if I saw proof it works", points: 2 },
      { text: "Maybe, I'd need to see the full details", points: 1 },
      { text: "No, I can't afford that right now", points: 0 }
    ]
  }
];

// --- NAVIGATION ---
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 font-sans shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Mountain className="text-green-800 w-8 h-8" />
            <span className="text-xl font-bold text-stone-900 tracking-tight">HighIQ <span className="font-normal text-stone-500">Accelerator</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-stone-600 font-medium text-sm uppercase tracking-wider">
            <a href="#problem" className="hover:text-green-800 transition">The Problem</a>
            <a href="#plan" className="hover:text-green-800 transition">The Plan</a>
            <a href="#investment" className="hover:text-green-800 transition">Investment</a>
            <a href="#results" className="hover:text-green-800 transition">Results</a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#investment" className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold transition-all shadow-sm">
              Reserve Your Spot
            </a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-600">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 py-4 px-4">
          <a href="#problem" className="block py-2 text-stone-600 hover:text-green-800">The Problem</a>
          <a href="#plan" className="block py-2 text-stone-600 hover:text-green-800">The Plan</a>
          <a href="#investment" className="block py-2 text-stone-600 hover:text-green-800">Investment</a>
          <a href="#results" className="block py-2 text-stone-600 hover:text-green-800">Results</a>
          <a href="#investment" className="block w-full mt-4 bg-orange-700 text-white px-6 py-3 rounded-md font-bold text-center">
            Reserve Your Spot
          </a>
        </div>
      )}
    </nav>
  );
};

// --- HERO ---
const Hero = () => (
  <header className="bg-gradient-to-br from-stone-50 to-stone-100 pt-24 pb-32 px-4 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-block bg-orange-100 border border-orange-200 px-4 py-1 rounded-full text-orange-800 text-xs font-bold uppercase tracking-widest mb-6">
        Limited to 20 Agents Per Cohort
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8 leading-tight text-balance">
        Stop Chasing Leads.<br />
        <span className="text-green-800 italic">Start Converting Them.</span>
      </h1>
      <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
        90-day intensive: Get HighIQ AI CRM, $900 in managed ads, weekly live coaching, and AI training — all for $2,500.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#investment" className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
          Reserve Your Spot — Only 7 Left
          <ArrowRight className="w-5 h-5" />
        </a>
        <a href="#plan" className="bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 rounded-md font-bold border-2 border-stone-300 flex items-center justify-center gap-2">
          <PlayCircle className="w-5 h-5" />
          See How It Works
        </a>
      </div>
      <p className="text-sm text-stone-500 mt-6">Next cohort starts <strong>March 15, 2026</strong> · Only 7 spots left</p>
    </div>
    <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-stone-200 text-center">
      <p className="text-xs text-stone-400 tracking-wide uppercase">Backed by HighIQ AI CRM · Used by 500+ agents nationwide</p>
    </div>
  </header>
);

// --- THE PROBLEM (EXTERNAL) ---
const Problem = () => {
  const problems = [
    {
      icon: <DollarSign className="w-8 h-8 text-orange-700" />,
      stat: "$4,000/mo",
      title: "ISAs Are Too Expensive",
      desc: "Plus 10-15% commission splits. Most agents can't afford dedicated inside sales."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-700" />,
      stat: "40%",
      title: "Zillow Flex Takes 40%",
      desc: "Zillow Flex is 40% of your commission. On an $8,000 deal, that's $3,200 gone."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-700" />,
      stat: "80%",
      title: "New Agents Quit",
      desc: "Within 12 months because they can't generate consistent leads or conversions."
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 text-balance">
            Why Most Agents Fail
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            It's not your fault. The old playbook doesn't work anymore.
          </p>
          <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-4 max-w-2xl">
            <p className="text-green-900 font-medium italic">
              "This is exactly the play I would run if I had to turn my business around in 90 days."
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="mb-4">{problem.icon}</div>
              <div className="text-4xl font-bold text-green-800 mb-2">{problem.stat}</div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{problem.title}</h3>
              <p className="text-stone-600">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- QUIZ SECTION ---
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const points = quizData[currentQuestion].options[answerIndex].points;
    setSelectedAnswer(answerIndex);
    setTotalPoints(totalPoints + points);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setCompleted(false);
    setTotalPoints(0);
    setEmail('');
    setEmailSubmitted(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmailSubmitted(true);
    }
  };

  const getResultMessage = () => {
    if (totalPoints >= 12) {
      return {
        title: "You're Bleeding Money",
        subtitle: `Score: ${totalPoints} points`,
        message: "Based on your answers, you're likely losing $50,000-$100,000+ per year in missed opportunities. The good news? That's fixable. The HighIQ Accelerator was built for agents exactly like you.",
        urgency: "high"
      };
    } else if (totalPoints >= 6) {
      return {
        title: "Room for Improvement",
        subtitle: `Score: ${totalPoints} points`,
        message: "You're doing better than most, but there's still significant money being left on the table. AI automation could help you capture those missed leads and scale without burning out.",
        urgency: "medium"
      };
    } else {
      return {
        title: "You're Ahead of the Game",
        subtitle: `Score: ${totalPoints} points`,
        message: "You already have systems in place. The Accelerator could help you optimize and scale what's working, or you might not need us right now. Either way, you're on the right track.",
        urgency: "low"
      };
    }
  };

  // Email capture gate
  if (completed && !emailSubmitted) {
    return (
      <section className="py-20 px-4 bg-stone-900">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-stone-800 border border-stone-700 rounded-2xl p-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-900/50 flex items-center justify-center">
              <Target className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-3">Your Results Are Ready</h2>
            <p className="text-stone-400 mb-8">Get your personalized lead conversion score</p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-4 rounded-lg bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
              <button
                type="submit"
                className="w-full bg-orange-700 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition"
              >
                Get My Score
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-stone-500 text-xs mt-4">We'll send your full breakdown. No spam, ever.</p>
          </div>
        </div>
      </section>
    );
  }

  // Results after email
  if (completed && emailSubmitted) {
    const result = getResultMessage();
    return (
      <section className="py-20 px-4 bg-stone-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`bg-stone-800 border rounded-2xl p-10 ${
            result.urgency === 'high' ? 'border-orange-500' : 
            result.urgency === 'medium' ? 'border-yellow-500' : 'border-green-500'
          }`}>
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
              result.urgency === 'high' ? 'bg-orange-900/50' : 
              result.urgency === 'medium' ? 'bg-yellow-900/50' : 'bg-green-900/50'
            }`}>
              {result.urgency === 'high' ? <AlertTriangle className="w-8 h-8 text-orange-500" /> :
               result.urgency === 'medium' ? <Target className="w-8 h-8 text-yellow-500" /> :
               <Check className="w-8 h-8 text-green-500" />}
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-2">{result.title}</h2>
            <p className="text-stone-400 mb-6">{result.subtitle}</p>
            <p className="text-stone-300 mb-8 leading-relaxed">
              {result.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={resetQuiz}
                className="bg-transparent hover:bg-stone-700 text-stone-300 px-6 py-3 rounded-lg border border-stone-600 transition"
              >
                Retake Quiz
              </button>
              <a href="#investment" className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition inline-flex items-center justify-center">
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = quizData[currentQuestion];
  const selectedOption = selectedAnswer !== null ? question.options[selectedAnswer] : null;

  return (
    <section className="py-20 px-4 bg-stone-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            The Lead Conversion Quiz
          </h2>
          <p className="text-stone-400">6 questions to diagnose where you're losing money.</p>
        </div>

        <div className="bg-stone-800 border border-stone-700 rounded-2xl p-8">
          {/* Progress */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-stone-400 text-sm">Question {currentQuestion + 1} of {quizData.length}</span>
            <div className="flex gap-1">
              {quizData.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-8 h-1 rounded-full ${idx <= currentQuestion ? 'bg-green-500' : 'bg-stone-600'}`} 
                />
              ))}
            </div>
          </div>

          {/* Question */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{question.question}</h3>
          {question.subtext && (
            <p className="text-stone-400 mb-6 text-sm">{question.subtext}</p>
          )}
          {!question.subtext && <div className="mb-6" />}

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;

              return (
                <button
                  key={idx}
                  onClick={() => selectedAnswer === null && handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    isSelected 
                      ? 'bg-green-900/50 border-green-500 text-green-100' 
                      : selectedAnswer !== null
                        ? 'bg-stone-700/30 border-stone-600 text-stone-500'
                        : 'bg-stone-700/50 border-stone-600 text-stone-200 hover:border-stone-500'
                  }`}
                >
                  <span className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center text-sm mt-0.5 ${
                      isSelected ? 'bg-green-500 border-green-500 text-white' : 'border-stone-500'
                    }`}>
                      {isSelected ? <Check className="w-4 h-4" /> : String.fromCharCode(65 + idx)}
                    </span>
                    <div>
                      <span>{option.text}</span>
                      {option.calc && isSelected && (
                        <span className="block text-orange-400 font-mono text-sm mt-1">{option.calc}</span>
                      )}
                    </div>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Subtext reveal after selection */}
          {selectedOption?.subtext && (
            <div className="bg-stone-700/50 border border-stone-600 rounded-lg p-4 mb-6">
              <p className="text-stone-300 text-sm italic">{selectedOption.subtext}</p>
            </div>
          )}

          {/* Next Button */}
          {selectedAnswer !== null && (
            <button
              onClick={nextQuestion}
              className="w-full bg-orange-700 hover:bg-orange-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition"
            >
              {currentQuestion < quizData.length - 1 ? 'Next Question' : 'See My Results'}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

// --- THE GUIDE (EMPATHY + AUTHORITY) ---
const Guide = () => (
  <section className="py-20 px-4 bg-green-900 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
        Here's What You Actually Need
      </h2>
      <p className="text-xl opacity-90 mb-8 leading-relaxed">
        Not another guru telling you to "hustle harder." You need a <strong>system that works while you sleep</strong> — AI that responds in 60 seconds, calls every lead, sets appointments automatically, and costs 90% less than an ISA.
      </p>
      <p className="text-lg opacity-80">
        That's exactly what we built. And we're going to hand it to you, fully set up, for $2,500.
      </p>
    </div>
  </section>
);

// --- WHO THIS IS FOR ---
const WhoThisIsFor = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center text-balance">
        Is This Right for You?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6">This IS for you if...</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-stone-700">Solo agents spending $500+/mo on leads with no system to convert them</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-stone-700">New agents (0-2 years) who need a proven launchpad</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-stone-700">Experienced agents ready to add AI leverage to their business</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-800 text-white flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-stone-700">Teams looking for a turnkey lead gen + conversion system</span>
            </li>
          </ul>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-6">This is NOT for you if...</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center mt-0.5">
                <X className="w-4 h-4" />
              </div>
              <span className="text-stone-700">You're looking for a get-rich-quick scheme</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center mt-0.5">
                <X className="w-4 h-4" />
              </div>
              <span className="text-stone-700">You're not willing to commit 5 hours/week for 90 days</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center mt-0.5">
                <X className="w-4 h-4" />
              </div>
              <span className="text-stone-700">You already have a working lead conversion system</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// --- THE PLAN (3-STEP PROCESS) ---
const Plan = () => {
  const steps = [
    {
      number: "1",
      title: "Get the AI System",
      desc: "We set up your HighIQ AI CRM (voice + SMS). It responds to leads in under 60 seconds, 24/7. No more missed opportunities."
    },
    {
      number: "2",
      title: "Launch Your Ads",
      desc: "We create and manage $900 in Facebook ads for 3 months. You get leads flowing in while we coach you on conversion every week."
    },
    {
      number: "3",
      title: "Master AI Tools",
      desc: "Complete 3 required courses: AI listing presentations, AI buyer guides, AI website building. Graduate with skills that set you apart."
    }
  ];

  return (
    <section id="plan" className="py-20 px-4 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4 text-balance">
            The 90-Day Plan
          </h2>
          <p className="text-xl text-stone-600">
            Three simple steps. No fluff. Just results.
          </p>
        </div>
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border-l-4 border-green-800 rounded-r-lg p-8 shadow-sm hover:shadow-md transition flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- WHAT'S INCLUDED ---
const WhatsIncluded = () => {
  const included = [
    { icon: <Smartphone />, text: "Complete HighIQ AI CRM setup (voice + SMS automation)" },
    { icon: <DollarSign />, text: "$900 in managed Facebook ad spend (rebated after 2 closings)" },
    { icon: <Users />, text: "12 weekly group coaching calls (live call reviews)" },
    { icon: <Award />, text: "AI Course 1: Build listing presentations with AI" },
    { icon: <Award />, text: "AI Course 2: Create buyer guides and market reports" },
    { icon: <Award />, text: "AI Course 3: Build your real estate website with AI" },
    { icon: <Map />, text: "Private community access (Slack/Discord)" },
    { icon: <Zap />, text: "Ad templates and AI prompt library" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center text-balance">
          Everything You Get
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {included.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-stone-50 p-4 rounded-lg border border-stone-200">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center">
                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
              </div>
              <p className="text-stone-700 font-medium pt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- INVESTMENT / PRICING ---
const Investment = () => (
  <section id="investment" className="py-20 px-4 bg-gradient-to-br from-green-900 to-green-800 text-white">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-2xl line-through opacity-50 mb-2">$4,100</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-balance">
          Total Investment: $2,500
        </h2>
        <p className="text-green-300 font-bold text-lg mb-2">You Save $1,600</p>
        <p className="text-xl opacity-90">For 3 months of everything. Then choose your path.</p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
        <div className="space-y-4 text-lg">
          <div className="flex justify-between pb-3 border-b border-white/20">
            <span>HighIQ AI CRM Setup</span>
            <span className="font-bold">$1,500</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-white/20">
            <span>Facebook Ad Spend (3 months)</span>
            <span className="font-bold">$900</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-white/20">
            <span>Weekly Coaching (12 weeks)</span>
            <span className="font-bold">$1,200</span>
          </div>
          <div className="flex justify-between pb-3 border-b border-white/20">
            <span>AI Training Courses (3 courses)</span>
            <span className="font-bold">$500</span>
          </div>
          <div className="flex justify-between text-2xl font-bold pt-4">
            <span>Total Value:</span>
            <span>$4,100</span>
          </div>
          <div className="flex justify-between text-3xl font-bold text-orange-300">
            <span>You Pay:</span>
            <span>$2,500</span>
          </div>
        </div>
      </div>

      <div className="bg-orange-100 text-orange-900 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <Gift className="w-6 h-6 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">Money-Back Guarantee</h3>
            <p>$900 ad spend refunded after your first 2 closings from our system</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="#investment" className="inline-block bg-orange-700 hover:bg-orange-600 text-white px-10 py-5 rounded-md font-bold text-xl shadow-2xl hover:shadow-3xl transition-all">
          Reserve Your Spot
        </a>
        <p className="mt-3 text-sm opacity-70">Or 3 payments of $867/mo</p>
        <p className="mt-2 text-sm opacity-80">Plus 25% referral fee on closings from our leads (same as Zillow)</p>
      </div>
    </div>
  </section>
);

// --- AFTER THE PROGRAM ---
const AfterProgram = () => (
  <section className="py-20 px-4 bg-stone-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center text-balance">
        What Happens After 90 Days?
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border-2 border-green-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Option 1: Stay Performance-Based</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-800 flex-shrink-0 mt-0.5" />
              <span>Keep using HighIQ AI CRM</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-800 flex-shrink-0 mt-0.5" />
              <span>Pay only for ad spend ($300/month)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-800 flex-shrink-0 mt-0.5" />
              <span>We keep 25% referral fee on our leads</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-800 flex-shrink-0 mt-0.5" />
              <span>Optional: Weekly coaching ($200/month)</span>
            </li>
          </ul>
          <p className="text-sm text-stone-600 italic">Best for agents who want ongoing lead flow with zero upfront cost</p>
        </div>

        <div className="bg-white border-2 border-stone-300 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Option 2: Go Independent</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
              <span>Become standard HighIQ customer ($500/month)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
              <span>Run your own ads (keep what you learned)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
              <span>Keep 100% of all commissions</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-stone-600 flex-shrink-0 mt-0.5" />
              <span>You have all the skills and systems</span>
            </li>
          </ul>
          <p className="text-sm text-stone-600 italic">Best for agents who want full control and independence</p>
        </div>
      </div>
    </div>
  </section>
);

// --- TESTIMONIALS ---
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Closed my first deal in Week 5. The AI system freed up 15 hours per week that I used to spend cold calling and texting leads manually.",
      name: "Sarah Mitchell",
      brokerage: "Keller Williams DFW",
      initials: "SM",
      role: "2nd Year Agent, Austin TX",
      result: "3 closings in 90 days"
    },
    {
      quote: "The live call reviews are pure gold. I learned more in 12 weeks than in 2 years at my brokerage. Wish I had this when I started.",
      name: "James Kowalski",
      brokerage: "RE/MAX Premier",
      initials: "JK",
      role: "Team Leader, Denver CO",
      result: "$45k GCI from program leads"
    },
    {
      quote: "I was about to quit real estate. This program saved my career. Now I actually have a system instead of hoping someone calls me back.",
      name: "Maria Lopez",
      brokerage: "eXp Realty Dallas",
      initials: "ML",
      role: "1st Year Agent, San Diego CA",
      result: "Went from 0 to 5 deals"
    }
  ];

  return (
    <section id="results" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center text-balance">
          Real Results from Real Agents
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 rounded-xl p-8">
              <div className="text-green-800 text-5xl mb-4">"</div>
              <p className="text-stone-700 mb-6 italic">{t.quote}</p>
              <div className="border-t border-stone-200 pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">{t.name}</p>
                    <p className="text-xs text-stone-500">{t.brokerage}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 mb-2">{t.role}</p>
                <p className="text-sm font-bold text-green-800">{t.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "Do I need tech experience?",
      a: "Nope. We set up everything for you. If you can use email, you can use this system."
    },
    {
      q: "What if I don't close any deals?",
      a: "You still keep the HighIQ CRM, all the training, and the AI skills. Plus you'll have learned exactly what works (and what doesn't) from our live call reviews."
    },
    {
      q: "When is the $900 refunded?",
      a: "After your first 2 closings from leads generated by our system. We track this automatically."
    },
    {
      q: "How many agents per cohort?",
      a: "We cap it at 20 agents so everyone gets real attention on the coaching calls. Quality over quantity."
    },
    {
      q: "Can I cancel anytime?",
      a: "There's a 90-day commitment (the length of the program). After that, it's month-to-month if you choose to continue."
    },
    {
      q: "Is this only for new agents?",
      a: "No. We have agents from 1st year to 15+ years in the program. If you're struggling with consistent lead flow, this works."
    }
  ];

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-12 text-center text-balance">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 font-bold text-lg text-stone-900 hover:bg-stone-50 transition flex justify-between items-center"
              >
                {faq.q}
                <span className="text-green-800">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-stone-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FINAL CTA ---
const FinalCTA = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-green-900 to-green-800 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
        Ready to Build a System That Works While You Sleep?
      </h2>
      <p className="text-xl opacity-90 mb-8">
        Next cohort starts <strong>March 15, 2026</strong>. Limited to 20 agents.
      </p>
      <a href="#investment" className="inline-block bg-orange-700 hover:bg-orange-600 text-white px-12 py-6 rounded-md font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all mb-6">
        Reserve Your Spot
      </a>
      <p className="text-sm opacity-70">Only 7 spots remaining</p>
      <div className="mt-8 pt-8 border-t border-white/20">
        <p className="text-sm opacity-80">Questions? <a href="#" className="underline font-bold">Book a 15-minute call</a></p>
      </div>
    </div>
  </section>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-12 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Mountain className="text-green-600 w-6 h-6" />
        <span className="text-lg font-bold text-white">HighIQ Accelerator</span>
      </div>
      <p className="text-sm mb-4">© 2026 HighIQ Labs. All rights reserved.</p>
      <div className="flex justify-center gap-6 text-sm">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <Hero />
      <Problem />
      <Quiz />
      <Guide />
      <WhoThisIsFor />
      <Plan />
      <WhatsIncluded />
      <Investment />
      <AfterProgram />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
