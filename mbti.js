const MBTI = {
  // Questoni 1: You regularly make new friends.
  Q1: [
    {
      cohort: "You rarely make new friends.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["Introversion", "Social Interaction"],
    },
    {
      cohort: "You occasionally meet new people, but it's not a common occurrence.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["Introversion", "Social Interaction"],
    },
    {
      cohort: "You sometimes make new friends, though it's not frequent.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["Personality", "Social Interaction"],
    },
    {
      cohort: "You often meet and make new friends.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Friendship"],
    },
    {
      cohort: "You are constantly forming new friendships and connections.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Networking"],
    }
  ],
  // Question 2: You find simple ideas more exciting than complex ones.
  Q2: [
    {
      cohort: "You are more drawn to straightforward ideas than to complex theories.",
      topics: ["Personality", "Cognition"],
      type: "self-description",
      categories: ["Simple Thinking", "Pragmatism"],
    },
    {
      cohort: "While complex ideas sometimes catch your interest, you generally find simple concepts more appealing.",
      topics: ["Personality", "Cognition"],
      type: "self-description",
      categories: ["Simple Thinking", "Pragmatism"],
    },
    {
      cohort: "You hold an equal appreciation for both simple and intricate ideas.",
      topics: ["Personality", "Cognition"],
      type: "self-description",
      categories: ["Cognition", "Ideas"],
    },
    {
      cohort: "You tend to find complex and innovative ideas more stimulating than straightforward ones.",
      topics: ["Personality", "Cognition"],
      type: "self-description",
      categories: ["Complex Thinking", "Innovation"],
    },
    {
      cohort: "You are consistently captivated by complex and novel ideas over simpler ones.",
      topics: ["Personality", "Cognition"],
      type: "self-description",
      categories: ["Complex Thinking", "Novel Ideas"],
    }
  ],
  // Question 3: You usually feel more persuaded by what resonates emotionally with you than by factual arguments.
  Q3: [
    {
      cohort: "You rarely find emotional arguments more persuasive than factual ones.",
      topics: ["Personality", "Psychology", "Decision Making"],
      type: "self-description",
      categories: ["Rational Thinking", "Facts"],
    },
    {
      cohort: "You sometimes respond to emotional resonance, but facts generally sway you more.",
      topics: ["Personality", "Psychology", "Decision Making"],
      type: "self-description",
      categories: ["Emotion", "Facts"],
    },
    {
      cohort: "You are equally influenced by both emotional resonance and factual arguments.",
      topics: ["Personality", "Psychology", "Decision Making"],
      type: "self-description",
      categories: ["Emotion", "Facts"],
    },
    {
      cohort: "Emotional resonance often has a stronger impact on you than facts.",
      topics: ["Personality", "Psychology", "Decision Making"],
      type: "self-description",
      categories: ["Emotion", "Empathy"],
    },
    {
      cohort: "You are almost always more persuaded by emotions than by factual evidence.",
      topics: ["Personality", "Psychology", "Decision Making"],
      type: "self-description",
      categories: ["Emotion", "Empathy"],
    }
  ],
  // Question 4: Your living and working spaces are clean and well organized.
  Q4: [
    {
      cohort: "Your spaces are rarely tidy or well-organized.",
      topics: ["Personality", "Lifestyle", "Productivity"],
      type: "self-description",
      categories: ["Disorganization", "Lifestyle"],
    },
    {
      cohort: "You sometimes manage to keep your spaces organized, but it’s not consistent.",
      topics: ["Personality", "Lifestyle", "Productivity"],
      type: "self-description",
      categories: ["Organization", "Lifestyle"],
    },
    {
      cohort: "Your spaces are moderately clean and organized.",
      topics: ["Personality", "Lifestyle", "Productivity"],
      type: "self-description",
      categories: ["Organization", "Lifestyle"],
    },
    {
      cohort: "You often maintain a clean and organized living and working space.",
      topics: ["Personality", "Lifestyle", "Productivity"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Organization"],
    },
    {
      cohort: "Your spaces are always impeccably clean and well-organized.",
      topics: ["Personality", "Lifestyle", "Productivity"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Organization"],
    }
  ],
  // question 5: You usually stay calm even under a lot of pressure.
  Q5: [
    {
      cohort: "You rarely manage to stay calm in high-pressure situations.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Stress", "Emotional Regulation"],
    },
    {
      cohort: "You sometimes find it difficult to remain calm under pressure.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Stress", "Emotional Regulation"],
    },
    {
      cohort: "You are moderately calm even when faced with stressful situations.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Stress", "Emotional Regulation"],
    },
    {
      cohort: "You often keep your composure in stressful situations.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Stress Management"],
    },
    {
      cohort: "You always remain calm, even in extremely stressful scenarios.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Stress Management"],
    }
  ],
  // question 6: You find the idea of networking or promoting yourself to strangers very daunting.
  Q6: [
    {
      cohort: "You find networking to be a very easy task.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["Networking", "Social Interaction"],
    },
    {
      cohort: "You find networking slightly challenging but manageable.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["Networking", "Social Interaction"],
    },
    {
      cohort: "You feel somewhat intimidated by the idea of networking.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["Networking", "Social Interaction"],
    },
    {
      cohort: "You find networking to be quite a daunting experience.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Networking"],
    },
    {
      cohort: "You feel extremely daunted by the thought of networking.",
      topics: ["Personality", "Social Interaction"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Networking"],
    }
  ],
  // Question 7: You prioritize and plan tasks effectively, often completing them well before the deadline.
  Q7: [
    {
      cohort: "You rarely make plans and often miss deadlines.",
      topics: ["Personality", "Productivity"],
      type: "self-description",
      categories: ["Procrastination", "Time Management"],
    },
    {
      cohort: "You sometimes plan your tasks but occasionally meet deadlines.",
      topics: ["Personality", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Time Management"],
    },
    {
      cohort: "You moderately plan your tasks and sometimes finish before deadlines.",
      topics: ["Personality", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Time Management"],
    },
    {
      cohort: "You often plan effectively and complete tasks ahead of schedule.",
      topics: ["Personality", "Productivity"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Planning"],
    },
    {
      cohort: "You always plan meticulously and finish tasks long before they are due.",
      topics: ["Personality", "Productivity"],
      type: "self-description",
      categories: ["The introversion-extraversion axis", "Planning"],
    }
  ],
  
  // Question 8: People’s stories and emotions speak louder to you than numbers or data.
  Q8: [
    {
      cohort: "You are rarely influenced by stories or emotional appeals.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Rational Thinking", "Facts"],
    },
    {
      cohort: "You sometimes feel moved by emotions over factual data.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Emotion", "Facts"],
    },
    {
      cohort: "You are moderately influenced by emotions and stories.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Emotion", "Facts"],
    },
    {
      cohort: "You often find that stories and emotions resonate with you more than data.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Emotion", "Facts"],
    },
    {
      cohort: "You always feel that people's stories and emotions speak louder than numbers or data.",
      topics: ["Personality", "Psychology"],
      type: "self-description",
      categories: ["Emotion", "Facts"],
    }
],
// Q for Question 9
Q9: [
  {
    cohort: "You rarely use organizing tools.",
    topics: ["Productivity", "Time Management"],
    type: "self-description",
    categories: ["Tools", "Organization"],
  },
  {
    cohort: "You sometimes utilize organizing tools like schedules and lists.",
    topics: ["Productivity", "Time Management"],
    type: "self-description",
    categories: ["Tools", "Organization"],
  },
  {
    cohort: "You moderately depend on organizing tools for planning.",
    topics: ["Productivity", "Time Management"],
    type: "self-description",
    categories: ["Tools", "Organization"],
  },
  {
    cohort: "You often use schedules and lists to organize your tasks.",
    topics: ["Productivity", "Time Management"],
    type: "self-description",
    categories: ["Tools", "Organization"],
  },
  {
    cohort: "You always rely heavily on organizing tools to structure your activities.",
    topics: ["Productivity", "Time Management"],
    type: "self-description",
    categories: ["Tools", "Organization"],
  }
],
// Q for Question 10
Q10: [
  {
    cohort: "You rarely doubt yourself after making a mistake.",
    topics: ["Self-Confidence", "Psychology"],
    type: "self-description",
    categories: ["Doubt", "Self-Assessment"],
  },
  {
    cohort: "You sometimes feel uncertain after a minor mistake.",
    topics: ["Self-Confidence", "Psychology"],
    type: "self-description",
    categories: ["Doubt", "Self-Assessment"],
  },
  {
    cohort: "You moderately question your abilities following a mistake.",
    topics: ["Self-Confidence", "Psychology"],
    type: "self-description",
    categories: ["Doubt", "Self-Assessment"],
  },
  {
    cohort: "You often doubt your abilities after even small mistakes.",
    topics: ["Self-Confidence", "Psychology"],
    type: "self-description",
    categories: ["Doubt", "Self-Assessment"],
  },
  {
    cohort: "You always doubt your abilities after making even a minor mistake.",
    topics: ["Self-Confidence", "Psychology"],
    type: "self-description",
    categories: ["Doubt", "Self-Assessment"],
  }
],
// Q for Question 11
Q11: [
  {
    cohort: "You rarely feel at ease approaching someone interesting to talk.",
    topics: ["Social Skills", "Interpersonal Communication"],
    type: "self-description",
    categories: ["Social Interaction", "Comfort Level"],
  },
  {
    cohort: "You sometimes feel comfortable approaching others but find it difficult.",
    topics: ["Social Skills", "Interpersonal Communication"],
    type: "self-description",
    categories: ["Social Interaction", "Comfort Level"],
  },
  {
    cohort: "You moderately feel at ease starting conversations with interesting people.",
    topics: ["Social Skills", "Interpersonal Communication"],
    type: "self-description",
    categories: ["Social Interaction", "Comfort Level"],
  },
  {
    cohort: "You often feel comfortable initiating a conversation with someone you find interesting.",
    topics: ["Social Skills", "Interpersonal Communication"],
    type: "self-description",
    categories: ["Social Interaction", "Comfort Level"],
  },
  {
    cohort: "You always feel completely at ease approaching new people for conversation.",
    topics: ["Social Skills", "Interpersonal Communication"],
    type: "self-description",
    categories: ["Social Interaction", "Comfort Level"],
  }
],
// Q for Question 12
Q12: [
  {
    cohort: "You have a strong interest in discussions about various interpretations of creative works.",
    topics: ["Art", "Literature", "Interpretation"],
    type: "self-description",
    categories: ["Creativity", "Interpretation"],
  },
  {
    cohort: "You possess some interest in discussing interpretations of creative works.",
    topics: ["Art", "Literature", "Interpretation"],
    type: "self-description",
    categories: ["Creativity", "Interpretation"],
  },
  {
    cohort: "You moderately enjoy discussing creative interpretations.",
    topics: ["Art", "Literature", "Interpretation"],
    type: "self-description",
    categories: ["Creativity", "Interpretation"],
  },
  {
    cohort: "You find discussions about creative interpretations slightly less engaging.",
    topics: ["Art", "Literature", "Interpretation"],
    type: "self-description",
    categories: ["Creativity", "Interpretation"],
  },
  {
    cohort: "You are not interested in discussing interpretations of creative works at all.",
    topics: ["Art", "Literature", "Interpretation"],
    type: "self-description",
    categories: ["Creativity", "Interpretation"],
  }
],
// Q for Question 13
Q13: [
  {
    cohort: "You rarely prioritize facts when considering people's feelings.",
    topics: ["Decision Making", "Ethics"],
    type: "self-description",
    categories: ["Emotion", "Facts"],
  },
  {
    cohort: "You sometimes prioritize facts but also take feelings into account.",
    topics: ["Decision Making", "Ethics"],
    type: "self-description",
    categories: ["Emotion", "Facts"],
  },
  {
    cohort: "You moderately balance between facts and feelings when making decisions.",
    topics: ["Decision Making", "Ethics"],
    type: "self-description",
    categories: ["Emotion", "Facts"],
  },
  {
    cohort: "You often prioritize facts over people's feelings in your decisions.",
    topics: ["Decision Making", "Ethics"],
    type: "self-description",
    categories: ["Emotion", "Facts"],
  },
  {
    cohort: "You always prioritize facts, even if it conflicts with others' feelings.",
    topics: ["Decision Making", "Ethics"],
    type: "self-description",
    categories: ["Emotion", "Facts"],
  }
],
// Q for Question 14
Q14: [
  {
    cohort: "You rarely allow your day to unfold without a plan.",
    topics: ["Lifestyle", "Time Management"],
    type: "self-description",
    categories: ["Planning", "Organization"],
  },
  {
    cohort: "You occasionally let your day go unscheduled.",
    topics: ["Lifestyle", "Time Management"],
    type: "self-description",
    categories: ["Planning", "Organization"],
  },
  {
    cohort: "You moderately leave your day unstructured at times.",
    topics: ["Lifestyle", "Time Management"],
    type: "self-description",
    categories: ["Planning", "Organization"],
  },
  {
    cohort: "You often let your day unfold without planning.",
    topics: ["Lifestyle", "Time Management"],
    type: "self-description",
    categories: ["Planning", "Organization"],
  },
  {
    cohort: "You always allow your day to unfold naturally without a schedule.",
    topics: ["Lifestyle", "Time Management"],
    type: "self-description",
    categories: ["Planning", "Organization"],
  }
],
// Q for Question 15
Q15: [
  {
    cohort: "You always worry about making a good impression on others.",
    topics: ["Social Anxiety", "Self-Perception"],
    type: "self-description",
    categories: ["Social Interaction", "Impression Management"],
  },
  {
    cohort: "You sometimes feel concerned about the impression you make.",
    topics: ["Social Anxiety", "Self-Perception"],
    type: "self-description",
    categories: ["Social Interaction", "Impression Management"],
  },
  {
    cohort: "You moderately think about how you are perceived by others.",
    topics: ["Social Anxiety", "Self-Perception"],
    type: "self-description",
    categories: ["Social Interaction", "Impression Management"],
  },
  {
    cohort: "You rarely worry about the impression you leave on people you meet.",
    topics: ["Social Anxiety", "Self-Perception"],
    type: "self-description",
    categories: ["Social Interaction", "Impression Management"],
  },
  {
    cohort: "You never concern yourself with the impression you make on others.",
    topics: ["Social Anxiety", "Self-Perception"],
    type: "self-description",
    categories: ["Social Interaction", "Impression Management"],
  }
],
// Q for Question 16
Q16: [
  {
    cohort: "You rarely enjoy participating in team-based activities.",
    topics: ["Social Interaction", "Teamwork"],
    type: "self-description",
    categories: ["Team Dynamics", "Group Activities"],
  },
  {
    cohort: "You sometimes find enjoyment in team activities.",
    topics: ["Social Interaction", "Teamwork"],
    type: "self-description",
    categories: ["Team Dynamics", "Group Activities"],
  },
  {
    cohort: "You moderately enjoy working in team settings.",
    topics: ["Social Interaction", "Teamwork"],
    type: "self-description",
    categories: ["Team Dynamics", "Group Activities"],
  },
  {
    cohort: "You often find pleasure in participating in team-based activities.",
    topics: ["Social Interaction", "Teamwork"],
    type: "self-description",
    categories: ["Team Dynamics", "Group Activities"],
  },
  {
    cohort: "You always take delight in engaging in team activities.",
    topics: ["Social Interaction", "Teamwork"],
    type: "self-description",
    categories: ["Team Dynamics", "Group Activities"],
  }
],
// Q for Question 17
Q17: [
  {
    cohort: "You rarely experiment with new and untested approaches.",
    topics: ["Creativity", "Innovation"],
    type: "self-description",
    categories: ["Experimentation", "Innovation"],
  },
  {
    cohort: "You sometimes try new approaches but prefer tested methods.",
    topics: ["Creativity", "Innovation"],
    type: "self-description",
    categories: ["Experimentation", "Innovation"],
  },
  {
    cohort: "You moderately enjoy experimenting with new approaches.",
    topics: ["Creativity", "Innovation"],
    type: "self-description",
    categories: ["Experimentation", "Innovation"],
  },
  {
    cohort: "You often engage in experimenting with new methods.",
    topics: ["Creativity", "Innovation"],
    type: "self-description",
    categories: ["Experimentation", "Innovation"],
  },
  {
    cohort: "You always prefer to experiment with new and untested methods.",
    topics: ["Creativity", "Innovation"],
    type: "self-description",
    categories: ["Experimentation", "Innovation"],
  }
],
// Q for Question 18
Q18: [
  {
    cohort: "You rarely prioritize sensitivity over honesty.",
    topics: ["Ethics", "Interpersonal Skills"],
    type: "self-description",
    categories: ["Honesty", "Sensitivity"],
  },
  {
    cohort: "You sometimes value sensitivity but also regard honesty.",
    topics: ["Ethics", "Interpersonal Skills"],
    type: "self-description",
    categories: ["Honesty", "Sensitivity"],
  },
  {
    cohort: "You moderately prioritize being sensitive to others.",
    topics: ["Ethics", "Interpersonal Skills"],
    type: "self-description",
    categories: ["Honesty", "Sensitivity"],
  },
  {
    cohort: "You often place sensitivity above complete honesty.",
    topics: ["Ethics", "Interpersonal Skills"],
    type: "self-description",
    categories: ["Honesty", "Sensitivity"],
  },
  {
    cohort: "You always prioritize being sensitive, even at the cost of some honesty.",
    topics: ["Ethics", "Interpersonal Skills"],
    type: "self-description",
    categories: ["Honesty", "Sensitivity"],
  }
],
// Q for Question 19
Q19: [
  {
    cohort: "You rarely seek out new experiences or areas of knowledge.",
    topics: ["Exploration", "Personal Development"],
    type: "self-description",
    categories: ["Experience", "Knowledge"],
  },
  {
    cohort: "You occasionally explore new experiences or knowledge areas.",
    topics: ["Exploration", "Personal Development"],
    type: "self-description",
    categories: ["Experience", "Knowledge"],
  },
  {
    cohort: "You moderately seek out new experiences and knowledge.",
    topics: ["Exploration", "Personal Development"],
    type: "self-description",
    categories: ["Experience", "Knowledge"],
  },
  {
    cohort: "You often actively explore new experiences and knowledge areas.",
    topics: ["Exploration", "Personal Development"],
    type: "self-description",
    categories: ["Experience", "Knowledge"],
  },
  {
    cohort: "You always seek out new experiences and areas of knowledge to explore.",
    topics: ["Exploration", "Personal Development"],
    type: "self-description",
    categories: ["Experience", "Knowledge"],
  }
],
// Q for Question 20
Q20: [
  {
    cohort: "You rarely worry that things will go wrong.",
    topics: ["Anxiety", "Mindset"],
    type: "self-description",
    categories: ["Worry", "Expectations"],
  },
  {
    cohort: "You occasionally worry that things might not turn out well.",
    topics: ["Anxiety", "Mindset"],
    type: "self-description",
    categories: ["Worry", "Expectations"],
  },
  {
    cohort: "You moderately worry about negative outcomes in certain situations.",
    topics: ["Anxiety", "Mindset"],
    type: "self-description",
    categories: ["Worry", "Expectations"],
  },
  {
    cohort: "You often anticipate that things might go wrong.",
    topics: ["Anxiety", "Mindset"],
    type: "self-description",
    categories: ["Worry", "Expectations"],
  },
  {
    cohort: "You always expect situations to take a turn for the worse.",
    topics: ["Anxiety", "Mindset"],
    type: "self-description",
    categories: ["Worry", "Expectations"],
  }
],
// Q for Question 21
Q21: [
  {
    cohort: "You rarely prefer solitary activities over group activities.",
    topics: ["Leisure", "Personal Preferences"],
    type: "self-description",
    categories: ["Activity Preference", "Social Interaction"],
  },
  {
    cohort: "You sometimes enjoy solitary activities more than group ones.",
    topics: ["Leisure", "Personal Preferences"],
    type: "self-description",
    categories: ["Activity Preference", "Social Interaction"],
  },
  {
    cohort: "You moderately enjoy both solitary and group activities equally.",
    topics: ["Leisure", "Personal Preferences"],
    type: "self-description",
    categories: ["Activity Preference", "Social Interaction"],
  },
  {
    cohort: "You often prefer solitary activities to group activities.",
    topics: ["Leisure", "Personal Preferences"],
    type: "self-description",
    categories: ["Activity Preference", "Social Interaction"],
  },
  {
    cohort: "You always favor solitary hobbies over group activities.",
    topics: ["Leisure", "Personal Preferences"],
    type: "self-description",
    categories: ["Activity Preference", "Social Interaction"],
  }
],
  // Q for Question 22
   Q22: [
  {
    cohort: "You can easily envision yourself writing fictional stories for a living.",
    topics: ["Creativity", "Career Aspirations"],
    type: "self-description",
    categories: ["Fiction Writing", "Career"],
  },
  {
    cohort: "You sometimes imagine writing fiction as a viable career option.",
    topics: ["Creativity", "Career Aspirations"],
    type: "self-description",
    categories: ["Fiction Writing", "Career"],
  },
  {
    cohort: "You are moderately uncertain about the possibility of writing fiction for a living.",
    topics: ["Creativity", "Career Aspirations"],
    type: "self-description",
    categories: ["Fiction Writing", "Career"],
  },
  {
    cohort: "You rarely consider writing fiction as a feasible career.",
    topics: ["Creativity", "Career Aspirations"],
    type: "self-description",
    categories: ["Fiction Writing", "Career"],
  },
  {
    cohort: "You cannot envision yourself making a living by writing fiction at all.",
    topics: ["Creativity", "Career Aspirations"],
    type: "self-description",
    categories: ["Fiction Writing", "Career"],
  }
],
  // Q for Question 23
   Q23: [
  {
    cohort: "You rarely prioritize efficiency in decisions, even if it disregards emotions.",
    topics: ["Decision Making", "Efficiency"],
    type: "self-description",
    categories: ["Decision Process", "Emotion"],
  },
  {
    cohort: "You sometimes value efficiency but also consider emotional aspects.",
    topics: ["Decision Making", "Efficiency"],
    type: "self-description",
    categories: ["Decision Process", "Emotion"],
  },
  {
    cohort: "You moderately balance efficiency with emotional considerations.",
    topics: ["Decision Making", "Efficiency"],
    type: "self-description",
    categories: ["Decision Process", "Emotion"],
  },
  {
    cohort: "You often prioritize efficiency, even when it may affect emotional aspects.",
    topics: ["Decision Making", "Efficiency"],
    type: "self-description",
    categories: ["Decision Process", "Emotion"],
  },
  {
    cohort: "You always prioritize efficiency, regardless of emotional impact.",
    topics: ["Decision Making", "Efficiency"],
    type: "self-description",
    categories: ["Decision Process", "Emotion"],
  }
],
  // Q for Question 24
   Q24: [
  {
    cohort: "You rarely complete chores before allowing yourself to relax.",
    topics: ["Productivity", "Leisure"],
    type: "self-description",
    categories: ["Chores", "Relaxation"],
  },
  {
    cohort: "You sometimes do chores first but often relax beforehand.",
    topics: ["Productivity", "Leisure"],
    type: "self-description",
    categories: ["Chores", "Relaxation"],
  },
  {
    cohort: "You moderately balance between chores and relaxation.",
    topics: ["Productivity", "Leisure"],
    type: "self-description",
    categories: ["Chores", "Relaxation"],
  },
  {
    cohort: "You often prefer to complete chores before taking time to relax.",
    topics: ["Productivity", "Leisure"],
    type: "self-description",
    categories: ["Chores", "Relaxation"],
  },
  {
    cohort: "You always finish your chores before allowing yourself to relax.",
    topics: ["Productivity", "Leisure"],
    type: "self-description",
    categories: ["Chores", "Relaxation"],
  }
],
// Q for Question 25
 Q25: [
    {
      cohort: "You rarely prioritize proving your point over the feelings of others.",
      topics: ["Communication", "Conflict Resolution"],
      type: "self-description",
      categories: ["Argument", "Sensitivity"],
    },
    {
      cohort: "You sometimes focus on making your point but consider others' feelings.",
      topics: ["Communication", "Conflict Resolution"],
      type: "self-description",
      categories: ["Argument", "Sensitivity"],
    },
    {
      cohort: "You moderately balance between proving your point and being sensitive to others.",
      topics: ["Communication", "Conflict Resolution"],
      type: "self-description",
      categories: ["Argument", "Sensitivity"],
    },
    {
      cohort: "You often prioritize proving your point, even if it affects others' feelings.",
      topics: ["Communication", "Conflict Resolution"],
      type: "self-description",
      categories: ["Argument", "Sensitivity"],
    },
    {
      cohort: "You always prioritize proving your point, regardless of others' feelings.",
      topics: ["Communication", "Conflict Resolution"],
      type: "self-description",
      categories: ["Argument", "Sensitivity"],
    }
  ],
  
  // Q for Question 26
   Q26: [
  {
    cohort: "You never wait for others to introduce themselves; you take the initiative.",
    topics: ["Social Skills", "Initiative"],
    type: "self-description",
    categories: ["Introductions", "Social Interaction"],
  },
  {
    cohort: "You sometimes introduce yourself but often wait for others to do so.",
    topics: ["Social Skills", "Initiative"],
    type: "self-description",
    categories: ["Introductions", "Social Interaction"],
  },
  {
    cohort: "You moderately balance between waiting for others and initiating introductions.",
    topics: ["Social Skills", "Initiative"],
    type: "self-description",
    categories: ["Introductions", "Social Interaction"],
  },
  {
    cohort: "You often wait for others to introduce themselves.",
    topics: ["Social Skills", "Initiative"],
    type: "self-description",
    categories: ["Introductions", "Social Interaction"],
  },
  {
    cohort: "You always wait for others to introduce themselves first.",
    topics: ["Social Skills", "Initiative"],
    type: "self-description",
    categories: ["Introductions", "Social Interaction"],
  }
],
  // Q for Question 27
   Q27: [
  {
    cohort: "Your mood rarely changes quickly.",
    topics: ["Emotional Stability", "Mood"],
    type: "self-description",
    categories: ["Mood", "Emotional Regulation"],
  },
  {
    cohort: "Your mood occasionally changes quickly.",
    topics: ["Emotional Stability", "Mood"],
    type: "self-description",
    categories: ["Mood", "Emotional Regulation"],
  },
  {
    cohort: "Your mood moderately fluctuates at times.",
    topics: ["Emotional Stability", "Mood"],
    type: "self-description",
    categories: ["Mood", "Emotional Regulation"],
  },
  {
    cohort: "Your mood often changes rapidly.",
    topics: ["Emotional Stability", "Mood"],
    type: "self-description",
    categories: ["Mood", "Emotional Regulation"],
  },
  {
    cohort: "Your mood changes very quickly and unpredictably.",
    topics: ["Emotional Stability", "Mood"],
    type: "self-description",
    categories: ["Mood", "Emotional Regulation"],
  }
],
  // Q for Question 28
   Q28: [
  {
    cohort: "You are very easily swayed by emotional arguments.",
    topics: ["Persuasion", "Emotional Intelligence"],
    type: "self-description",
    categories: ["Emotional Arguments", "Decision Making"],
  },
  {
    cohort: "You are sometimes swayed by emotional arguments.",
    topics: ["Persuasion", "Emotional Intelligence"],
    type: "self-description",
    categories: ["Emotional Arguments", "Decision Making"],
  },
  {
    cohort: "You moderately resist emotional arguments but are open to them.",
    topics: ["Persuasion", "Emotional Intelligence"],
    type: "self-description",
    categories: ["Emotional Arguments", "Decision Making"],
  },
  {
    cohort: "You are rarely swayed by emotional arguments.",
    topics: ["Persuasion", "Emotional Intelligence"],
    type: "self-description",
    categories: ["Emotional Arguments", "Decision Making"],
  },
  {
    cohort: "You are never swayed by emotional arguments.",
    topics: ["Persuasion", "Emotional Intelligence"],
    type: "self-description",
    categories: ["Emotional Arguments", "Decision Making"],
  }
],
  // Q for Question 29
   Q29: [
  {
    cohort: "You never procrastinate; you always finish tasks early.",
    topics: ["Time Management", "Productivity"],
    type: "self-description",
    categories: ["Procrastination", "Task Completion"],
  },
  {
    cohort: "You sometimes leave things until the last minute.",
    topics: ["Time Management", "Productivity"],
    type: "self-description",
    categories: ["Procrastination", "Task Completion"],
  },
  {
    cohort: "You moderately procrastinate and occasionally do things last minute.",
    topics: ["Time Management", "Productivity"],
    type: "self-description",
    categories: ["Procrastination", "Task Completion"],
  },
  {
    cohort: "You often finish tasks at the last possible moment.",
    topics: ["Time Management", "Productivity"],
    type: "self-description",
    categories: ["Procrastination", "Task Completion"],
  },
  {
    cohort: "You always leave things until the last possible moment.",
    topics: ["Time Management", "Productivity"],
    type: "self-description",
    categories: ["Procrastination", "Task Completion"],
  }
],
  // Q for Question 30
 Q30: [
  {
    cohort: "You never enjoy debating ethical dilemmas.",
    topics: ["Ethics", "Philosophy"],
    type: "self-description",
    categories: ["Ethical Dilemmas", "Discussion"],
  },
  {
    cohort: "You sometimes enjoy debating ethics but prefer other discussions.",
    topics: ["Ethics", "Philosophy"],
    type: "self-description",
    categories: ["Ethical Dilemmas", "Discussion"],
  },
  {
    cohort: "You moderately enjoy discussing ethical dilemmas.",
    topics: ["Ethics", "Philosophy"],
    type: "self-description",
    categories: ["Ethical Dilemmas", "Discussion"],
  },
  {
    cohort: "You often enjoy debating ethical dilemmas.",
    topics: ["Ethics", "Philosophy"],
    type: "self-description",
    categories: ["Ethical Dilemmas", "Discussion"],
  },
  {
    cohort: "You always enjoy debating ethical dilemmas.",
    topics: ["Ethics", "Philosophy"],
    type: "self-description",
    categories: ["Ethical Dilemmas", "Discussion"],
  }
],
  // Q for Question 31
   Q31: [
  {
    cohort: "You rarely prefer to be around others.",
    topics: ["Social Preferences", "Isolation"],
    type: "self-description",
    categories: ["Social Interaction", "Personal Preference"],
  },
  {
    cohort: "You sometimes prefer company but often enjoy being alone.",
    topics: ["Social Preferences", "Isolation"],
    type: "self-description",
    categories: ["Social Interaction", "Personal Preference"],
  },
  {
    cohort: "You moderately enjoy both company and solitude equally.",
    topics: ["Social Preferences", "Isolation"],
    type: "self-description",
    categories: ["Social Interaction", "Personal Preference"],
  },
  {
    cohort: "You often prefer to be around others.",
    topics: ["Social Preferences", "Isolation"],
    type: "self-description",
    categories: ["Social Interaction", "Personal Preference"],
  },
  {
    cohort: "You always prefer to be around others.",
    topics: ["Social Preferences", "Isolation"],
    type: "self-description",
    categories: ["Social Interaction", "Personal Preference"],
  }
],
  // Q for Question 32
  Q32: [
    {
      cohort: "You never lose interest in theoretical discussions; they always engage you.",
      topics: ["Theoretical Discussions", "Engagement"],
      type: "self-description",
      categories: ["Interest", "Theoretical Knowledge"],
    },
    {
      cohort: "You sometimes lose interest in theoretical discussions.",
      topics: ["Theoretical Discussions", "Engagement"],
      type: "self-description",
      categories: ["Interest", "Theoretical Knowledge"],
    },
    {
      cohort: "You moderately enjoy theoretical discussions but can lose interest.",
      topics: ["Theoretical Discussions", "Engagement"],
      type: "self-description",
      categories: ["Interest", "Theoretical Knowledge"],
    },
    {
      cohort: "You often lose interest in highly theoretical discussions.",
      topics: ["Theoretical Discussions", "Engagement"],
      type: "self-description",
      categories: ["Interest", "Theoretical Knowledge"],
    },
    {
      cohort: "You always lose interest when discussions get too theoretical.",
      topics: ["Theoretical Discussions", "Engagement"],
      type: "self-description",
      categories: ["Interest", "Theoretical Knowledge"],
    }
  ],
  // Q for Question 33
  Q33: [
    {
      cohort: "You always follow facts over feelings.",
      topics: ["Decision Making", "Rationality"],
      type: "self-description",
      categories: ["Fact vs. Feelings", "Decision Process"],
    },
    {
      cohort: "You sometimes follow your heart but consider facts.",
      topics: ["Decision Making", "Rationality"],
      type: "self-description",
      categories: ["Fact vs. Feelings", "Decision Process"],
    },
    {
      cohort: "You moderately balance facts and feelings in decisions.",
      topics: ["Decision Making", "Rationality"],
      type: "self-description",
      categories: ["Fact vs. Feelings", "Decision Process"],
    },
    {
      cohort: "You often follow your heart when facts and feelings conflict.",
      topics: ["Decision Making", "Rationality"],
      type: "self-description",
    
      categories: ["Fact vs. Feelings", "Decision Process"],
    },
    {
      cohort: "You always follow your heart over facts.",
      topics: ["Decision Making", "Rationality"],
      type: "self-description",
      categories: ["Fact vs. Feelings", "Decision Process"],
    }
  ],
    // Q for Question 34
  Q34: [
    {
      cohort: "You never find it difficult to maintain a consistent schedule.",
      topics: ["Time Management", "Consistency"],
      type: "self-description",
      categories: ["Scheduling", "Productivity"],
    },
    {
      cohort: "You sometimes struggle to maintain a schedule.",
      topics: ["Time Management", "Consistency"],
      type: "self-description",
      categories: ["Scheduling", "Productivity"],
    },
    {
      cohort: "You moderately manage to stick to a schedule but find it challenging at times.",
      topics: ["Time Management", "Consistency"],
      type: "self-description",
      categories: ["Scheduling", "Productivity"],
    },
    {
      cohort: "You often struggle to maintain a consistent schedule.",
      topics: ["Time Management", "Consistency"],
      type: "self-description",
      categories: ["Scheduling", "Productivity"],
    },
    {
      cohort: "You always find it challenging to keep a consistent schedule.",
      topics: ["Time Management", "Consistency"],
      type: "self-description",
      categories: ["Scheduling", "Productivity"],
    }
  ],
  // Q for Question 35
  Q35: [
    {
      cohort: "You always second-guess your choices.",
      topics: ["Self-Doubt", "Decision Making"],
      type: "self-description",
      categories: ["Confidence", "Decision Process"],
    },
    {
      cohort: "You sometimes second-guess yourself but are often confident.",
      topics: ["Self-Doubt", "Decision Making"],
      type: "self-description",
      categories: ["Confidence", "Decision Process"],
    },
    {
      cohort: "You moderately second-guess your choices occasionally.",
      topics: ["Self-Doubt", "Decision Making"],
      type: "self-description",
      categories: ["Confidence", "Decision Process"],
    },
    {
      cohort: "You rarely second-guess the choices you make.",
      topics: ["Self-Doubt", "Decision Making"],
      type: "self-description",
      categories: ["Confidence", "Decision Process"],
    },
    {
      cohort: "You never second-guess your decisions; you’re always confident.",
      topics: ["Self-Doubt", "Decision Making"],
      type: "self-description",
      categories: ["Confidence", "Decision Process"],
    }
  ],
  // Q for Question 36
  Q36: [
    {
      cohort: "Your friends would never describe you as lively or outgoing.",
      topics: ["Personality", "Social Behavior"],
      type: "self-description",
      categories: ["Extraversion", "Social Perception"],
    },
    {
      cohort: "Your friends might occasionally describe you as lively.",
      topics: ["Personality", "Social Behavior"],
      type: "self-description",
      categories: ["Extraversion", "Social Perception"],
    },
    {
      cohort: "Your friends moderately see you as lively at times.",
      topics: ["Personality", "Social Behavior"],
      type: "self-description",
      categories: ["Extraversion", "Social Perception"],
    },
    {
      cohort: "Your friends often describe you as lively and outgoing.",
      topics: ["Personality", "Social Behavior"],
      type: "self-description",
      categories: ["Extraversion", "Social Perception"],
    },
    {
      cohort: "Your friends would always describe you as lively and outgoing.",
      topics: ["Personality", "Social Behavior"],
      type: "self-description",
      categories: ["Extraversion", "Social Perception"],
    }
  ],
  // Q for Question 37
  Q37: [
    {
      cohort: "You are not at all drawn to creative expression.",
      topics: ["Personality", "Creativity"],
      type: "self-description",
      categories: ["Creativity", "Artistic Expression"],
    },
    {
      cohort: "You are slightly interested in creative expression.",
      topics: ["Personality", "Creativity"],
      type: "self-description",
      categories: ["Creativity", "Artistic Expression"],
    },
    {
      cohort: "You are moderately drawn to creative outlets like writing.",
      topics: ["Personality", "Creativity"],
      type: "self-description",
      categories: ["Creativity", "Artistic Expression"],
    },
    {
      cohort: "You are often drawn to creative expression.",
      topics: ["Personality", "Creativity"],
      type: "self-description",
      categories: ["Creativity", "Artistic Expression"],
    },
    {
      cohort: "You are always passionate about creative expression.",
      topics: ["Personality", "Creativity"],
      type: "self-description",
      categories: ["Creativity", "Artistic Expression"],
    }
  ],
  // Q for Question 38
  Q38: [
    {
      cohort: "You rarely base decisions on facts; you follow your emotions.",
      topics: ["Decision-Making", "Rationality"],
      type: "self-description",
      categories: ["Logic", "Emotion"],
    },
    {
      cohort: "You sometimes consider facts but follow emotional impressions.",
      topics: ["Decision-Making", "Rationality"],
      type: "self-description",
      categories: ["Logic", "Emotion"],
    },
    {
      cohort: "You moderately balance facts and emotions.",
      topics: ["Decision-Making", "Rationality"],
      type: "self-description",
      categories: ["Logic", "Emotion"],
    },
    {
      cohort: "You often base decisions on objective facts.",
      topics: ["Decision-Making", "Rationality"],
      type: "self-description",
      categories: ["Logic", "Emotion"],
    },
    {
      cohort: "You always prioritize facts over emotions in decision-making.",
      topics: ["Decision-Making", "Rationality"],
      type: "self-description",
      categories: ["Logic", "Emotion"],
    }
  ],
  // Q for Question 39
  Q39: [
    {
      cohort: "You never make to-do lists.",
      topics: ["Organization", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Task Management"],
    },
    {
      cohort: "You sometimes make to-do lists but rarely follow them.",
      topics: ["Organization", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Task Management"],
    },
    {
      cohort: "You moderately use to-do lists but don’t always stick to them.",
      topics: ["Organization", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Task Management"],
    },
    {
      cohort: "You often use daily to-do lists.",
      topics: ["Organization", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Task Management"],
    },
    {
      cohort: "You always rely on daily to-do lists to stay organized.",
      topics: ["Organization", "Productivity"],
      type: "self-description",
      categories: ["Planning", "Task Management"],
    }
  ],
  // Q for Question 40
  Q40: [
    {
      cohort: "You always feel insecure.",
      topics: ["Self-Esteem", "Mental Health"],
      type: "self-description",
      categories: ["Confidence", "Insecurity"],
    },
    {
      cohort: "You sometimes feel insecure.",
      topics: ["Self-Esteem", "Mental Health"],
      type: "self-description",
      categories: ["Confidence", "Insecurity"],
    },
    {
      cohort: "You moderately feel insecure on occasion.",
      topics: ["Self-Esteem", "Mental Health"],
      type: "self-description",
      categories: ["Confidence", "Insecurity"],
    },
    {
      cohort: "You rarely feel insecure.",
      topics: ["Self-Esteem", "Mental Health"],
      type: "self-description",
      categories: ["Confidence", "Insecurity"],
    },
    {
      cohort: "You never feel insecure.",
      topics: ["Self-Esteem", "Mental Health"],
      type: "self-description",
      categories: ["Confidence", "Insecurity"],
    }
  ],
  // Q for Question 41
  Q41: [
    {
      cohort: "You never avoid making phone calls; you feel comfortable with them.",
      topics: ["Communication", "Social Skills"],
      type: "self-description",
      categories: ["Communication", "Anxiety"],
    },
    {
      cohort: "You sometimes avoid making phone calls.",
      topics: ["Communication", "Social Skills"],
      type: "self-description",
      categories: ["Communication", "Anxiety"],
    },
    {
      cohort: "You moderately avoid phone calls depending on the situation.",
      topics: ["Communication", "Social Skills"],
      type: "self-description",
      categories: ["Communication", "Anxiety"],
    },
    {
      cohort: "You often avoid making phone calls.",
      topics: ["Communication", "Social Skills"],
      type: "self-description",
      categories: ["Communication", "Anxiety"],
    },
    {
      cohort: "You always avoid making phone calls.",
      topics: ["Communication", "Social Skills"],
      type: "self-description",
      categories: ["Communication", "Anxiety"],
    }
  ],
  // Q for Question 42
  Q42: [
    {
      cohort: "You rarely enjoy exploring unfamiliar ideas.",
      topics: ["Open-Mindedness", "Curiosity"],
      type: "self-description",
      categories: ["Exploration", "Ideas"],
    },
    {
      cohort: "You sometimes enjoy exploring unfamiliar viewpoints.",
      topics: ["Open-Mindedness", "Curiosity"],
      type: "self-description",
      categories: ["Exploration", "Ideas"],
    },
    {
      cohort: "You moderately enjoy exploring new ideas occasionally.",
      topics: ["Open-Mindedness", "Curiosity"],
      type: "self-description",
      categories: ["Exploration", "Ideas"],
    },
    {
      cohort: "You often enjoy exploring new ideas and perspectives.",
      topics: ["Open-Mindedness", "Curiosity"],
      type: "self-description",
      categories: ["Exploration", "Ideas"],
    },
    {
      cohort: "You always enjoy exploring unfamiliar ideas and viewpoints.",
      topics: ["Open-Mindedness", "Curiosity"],
      type: "self-description",
      categories: ["Exploration", "Ideas"],
    }
  ],
  // Q for Question 43
  Q43: [
    {
      cohort: "You rarely connect with people you just met.",
      topics: ["Social Skills", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Connection", "Social Interaction"],
    },
    {
      cohort: "You sometimes find it easy to connect with new people.",
      topics: ["Social Skills", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Connection", "Social Interaction"],
    },
    {
      cohort: "You moderately connect with new people in certain situations.",
      topics: ["Social Skills", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Connection", "Social Interaction"],
    },
    {
      cohort: "You often connect easily with people you just met.",
      topics: ["Social Skills", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Connection", "Social Interaction"],
    },
    {
      cohort: "You always connect effortlessly with new acquaintances.",
      topics: ["Social Skills", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Connection", "Social Interaction"],
    }
  ],
  
  // Q for Question 44
  Q44: [
    {
      cohort: "You rarely prioritize getting back on track after interruptions.",
      topics: ["Time Management", "Adaptability"],
      type: "self-description",
      categories: ["Planning", "Flexibility"],
    },
    {
      cohort: "You sometimes focus on recovering plans after interruptions.",
      topics: ["Time Management", "Adaptability"],
      type: "self-description",
      categories: ["Planning", "Flexibility"],
    },
    {
      cohort: "You moderately try to get back on track, depending on the situation.",
      topics: ["Time Management", "Adaptability"],
      type: "self-description",
      categories: ["Planning", "Flexibility"],
    },
    {
      cohort: "You often prioritize recovering plans after an interruption.",
      topics: ["Time Management", "Adaptability"],
      type: "self-description",
      categories: ["Planning", "Flexibility"],
    },
    {
      cohort: "You always immediately focus on getting back on track after being interrupted.",
      topics: ["Time Management", "Adaptability"],
      type: "self-description",
      categories: ["Planning", "Flexibility"],
    }
  ],

  // Q for Question 45
  Q45: [
    {
      cohort: "You never dwell on past mistakes.",
      topics: ["Self-Reflection", "Emotional Resilience"],
      type: "self-description",
      categories: ["Resilience", "Self-Perception"],
    },
    {
      cohort: "You sometimes think about past mistakes, but they don’t bother you much.",
      topics: ["Self-Reflection", "Emotional Resilience"],
      type: "self-description",
      categories: ["Resilience", "Self-Perception"],
    },
    {
      cohort: "You moderately feel bothered by mistakes, depending on their impact.",
      topics: ["Self-Reflection", "Emotional Resilience"],
      type: "self-description",
      categories: ["Resilience", "Self-Perception"],
    },
    {
      cohort: "You often feel troubled by mistakes you made long ago.",
      topics: ["Self-Reflection", "Emotional Resilience"],
      type: "self-description",
      categories: ["Resilience", "Self-Perception"],
    },
    {
      cohort: "You are always bothered by past mistakes, even if they happened long ago.",
      topics: ["Self-Reflection", "Emotional Resilience"],
      type: "self-description",
      categories: ["Resilience", "Self-Perception"],
    }
  ],
  // Q for Question 46
  Q46: [
    {
      cohort: "You are very interested in future-oriented theories and discussions.",
      topics: ["Future-Oriented Thinking", "Theoretical Discussions"],
      type: "self-description",
      categories: ["Interests", "Theoretical Engagement"],
    },
    {
      cohort: "You are slightly interested in discussing future theories.",
      topics: ["Future-Oriented Thinking", "Theoretical Discussions"],
      type: "self-description",
      categories: ["Interests", "Theoretical Engagement"],
    },
    {
      cohort: "You moderately enjoy discussions about what the world could look like in the future.",
      topics: ["Future-Oriented Thinking", "Theoretical Discussions"],
      type: "self-description",
      categories: ["Interests", "Theoretical Engagement"],
    },
    {
      cohort: "You rarely engage in discussions about future possibilities.",
      topics: ["Future-Oriented Thinking", "Theoretical Discussions"],
      type: "self-description",
      categories: ["Interests", "Theoretical Engagement"],
    },
    {
      cohort: "You are not interested at all in discussing future theories.",
      topics: ["Future-Oriented Thinking", "Theoretical Discussions"],
      type: "self-description",
      categories: ["Interests", "Theoretical Engagement"],
    }
  ],
  // Q for Question 47
  Q47: [
    {
      cohort: "You always control your emotions rather than the other way around.",
      topics: ["Emotional Control", "Self-Regulation"],
      type: "self-description",
      categories: ["Emotional Intelligence", "Self-Management"],
    },
    {
      cohort: "You sometimes feel your emotions take control, but usually manage them.",
      topics: ["Emotional Control", "Self-Regulation"],
      type: "self-description",
      categories: ["Emotional Intelligence", "Self-Management"],
    },
    {
      cohort: "You moderately feel balanced between controlling your emotions and being controlled by them.",
      topics: ["Emotional Control", "Self-Regulation"],
      type: "self-description",
      categories: ["Emotional Intelligence", "Self-Management"],
    },
    {
      cohort: "You often feel your emotions are in control.",
      topics: ["Emotional Control", "Self-Regulation"],
      type: "self-description",
      categories: ["Emotional Intelligence", "Self-Management"],
    },
    {
      cohort: "You always feel your emotions control you more than you control them.",
      topics: ["Emotional Control", "Self-Regulation"],
      type: "self-description",
      categories: ["Emotional Intelligence", "Self-Management"],
    }
  ],
  // Q for Question 48
  Q48: [
    {
      cohort: "You never prioritize feelings over logic in decision-making.",
      topics: ["Decision-Making", "Logic vs. Emotion"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You sometimes consider people’s feelings but focus on logic.",
      topics: ["Decision-Making", "Logic vs. Emotion"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You moderately balance emotions and efficiency when making decisions.",
      topics: ["Decision-Making", "Logic vs. Emotion"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You often prioritize how others feel over logic.",
      topics: ["Decision-Making", "Logic vs. Emotion"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You always prioritize others’ feelings over efficiency and logic.",
      topics: ["Decision-Making", "Logic vs. Emotion"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    }
  ],
  // Q for Question 49
  Q49: [
    {
      cohort: "You never work in bursts; you prefer consistent efforts.",
      topics: ["Work Style", "Productivity"],
      type: "self-description",
      categories: ["Work Habits", "Consistency"],
    },
    {
      cohort: "You sometimes work in spontaneous bursts but usually stay organized.",
      topics: ["Work Style", "Productivity"],
      type: "self-description",
      categories: ["Work Habits", "Consistency"],
    },
    {
      cohort: "You moderately balance bursts of energy with organization.",
      topics: ["Work Style", "Productivity"],
      type: "self-description",
      categories: ["Work Habits", "Consistency"],
    },
    {
      cohort: "You often work in spontaneous bursts rather than following a consistent schedule.",
      topics: ["Work Style", "Productivity"],
      type: "self-description",
      categories: ["Work Habits", "Consistency"],
    },
    {
      cohort: "You always work in spontaneous bursts, avoiding consistency.",
      topics: ["Work Style", "Productivity"],
      type: "self-description",
      categories: ["Work Habits", "Consistency"],
    }
  ],
  // Q for Question 50
  Q50: [
    {
      cohort: "You never worry that people will feel disappointed in you.",
      topics: ["Self-Perception", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Confidence", "Self-Image"],
    },
    {
      cohort: "You occasionally wonder if people will be disappointed in you.",
      topics: ["Self-Perception", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Confidence", "Self-Image"],
    },
    {
      cohort: "You moderately question how long people will maintain a positive view of you.",
      topics: ["Self-Perception", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Confidence", "Self-Image"],
    },
    {
      cohort: "You often wonder how long it will take for someone to feel disappointed in you.",
      topics: ["Self-Perception", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Confidence", "Self-Image"],
    },
    {
      cohort: "You always expect that people will eventually feel disappointed in you.",
      topics: ["Self-Perception", "Interpersonal Relationships"],
      type: "self-description",
      categories: ["Confidence", "Self-Image"],
    }
  ],
  // Q for Question 51
  Q51: [
    {
      cohort: "You never want a job where you work alone; you prefer group work.",
      topics: ["Work Preferences", "Collaboration"],
      type: "self-description",
      categories: ["Work Style", "Social Interaction"],
    },
    {
      cohort: "You sometimes enjoy working alone, but group work appeals to you more.",
      topics: ["Work Preferences", "Collaboration"],
      type: "self-description",
      categories: ["Work Style", "Social Interaction"],
    },
    {
      cohort: "You moderately balance working alone and in groups.",
      topics: ["Work Preferences", "Collaboration"],
      type: "self-description",
      categories: ["Work Style", "Social Interaction"],
    },
    {
      cohort: "You often prefer jobs that allow you to work alone most of the time.",
      topics: ["Work Preferences", "Collaboration"],
      type: "self-description",
      categories: ["Work Style", "Social Interaction"],
    },
    {
      cohort: "You always want to work alone and would love a job where that’s the case.",
      topics: ["Work Preferences", "Collaboration"],
      type: "self-description",
      categories: ["Work Style", "Social Interaction"],
    }
  ],
  // Q for Question 52
  Q52: [
    {
      cohort: "You never think pondering abstract philosophy is a waste of time.",
      topics: ["Philosophical Inquiry", "Abstract Thinking"],
      type: "self-description",
      categories: ["Thought Processes", "Philosophy"],
    },
    {
      cohort: "You sometimes think abstract philosophy can be worthwhile, but not always.",
      topics: ["Philosophical Inquiry", "Abstract Thinking"],
      type: "self-description",
      categories: ["Thought Processes", "Philosophy"],
    },
    {
      cohort: "You moderately believe philosophical questions are worth pondering in certain situations.",
      topics: ["Philosophical Inquiry", "Abstract Thinking"],
      type: "self-description",
      categories: ["Thought Processes", "Philosophy"],
    },
    {
      cohort: "You often feel that pondering abstract questions is not productive.",
      topics: ["Philosophical Inquiry", "Abstract Thinking"],
      type: "self-description",
      categories: ["Thought Processes", "Philosophy"],
    },
    {
      cohort: "You always think philosophical questions are a waste of time.",
      topics: ["Philosophical Inquiry", "Abstract Thinking"],
      type: "self-description",
      categories: ["Thought Processes", "Philosophy"],
    }
  ],
  Q53: [
    {
      cohort: "You never feel drawn to busy atmospheres; you prefer quiet places.",
      topics: ["Environmental Preference", "Social Spaces"],
      type: "self-description",
      categories: ["Atmospheric Preference", "Social Interaction"],
    },
    {
      cohort: "You sometimes enjoy busy places but also like quiet settings.",
      topics: ["Environmental Preference", "Social Spaces"],
      type: "self-description",
      categories: ["Atmospheric Preference", "Social Interaction"],
    },
    {
      cohort: "You moderately balance between enjoying bustling and quiet atmospheres.",
      topics: ["Environmental Preference", "Social Spaces"],
      type: "self-description",
      categories: ["Atmospheric Preference", "Social Interaction"],
    },
    {
      cohort: "You often feel drawn to busy and bustling environments.",
      topics: ["Environmental Preference", "Social Spaces"],
      type: "self-description",
      categories: ["Atmospheric Preference", "Social Interaction"],
    },
    {
      cohort: "You always prefer busy, lively atmospheres over quiet ones.",
      topics: ["Environmental Preference", "Social Spaces"],
      type: "self-description",
      categories: ["Atmospheric Preference", "Social Interaction"],
    }
  ],
  // Q for Question 54
  Q54: [
    {
      cohort: "You never act on feelings without proof; you need concrete evidence.",
      topics: ["Decision-Making", "Intuition vs. Proof"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You sometimes act on what feels right, but usually seek confirmation.",
      topics: ["Decision-Making", "Intuition vs. Proof"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You moderately trust your feelings but still look for proof.",
      topics: ["Decision-Making", "Intuition vs. Proof"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You often act on feelings when something feels right, without seeking more proof.",
      topics: ["Decision-Making", "Intuition vs. Proof"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You always trust your feelings and act on them without needing any further proof.",
      topics: ["Decision-Making", "Intuition vs. Proof"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    }
  ],
  // Q for Question 55
  Q55: [
    {
      cohort: "You never feel overwhelmed; you stay calm and composed.",
      topics: ["Stress Management", "Emotional Regulation"],
      type: "self-description",
      categories: ["Resilience", "Stress Management"],
    },
    {
      cohort: "You sometimes feel overwhelmed in challenging situations.",
      topics: ["Stress Management", "Emotional Regulation"],
      type: "self-description",
      categories: ["Resilience", "Stress Management"],
    },
    {
      cohort: "You moderately feel overwhelmed depending on the situation.",
      topics: ["Stress Management", "Emotional Regulation"],
      type: "self-description",
      categories: ["Resilience", "Stress Management"],
    },
    {
      cohort: "You often feel overwhelmed by stress or pressure.",
      topics: ["Stress Management", "Emotional Regulation"],
      type: "self-description",
      categories: ["Resilience", "Stress Management"],
    },
    {
      cohort: "You always feel overwhelmed, even in regular situations.",
      topics: ["Stress Management", "Emotional Regulation"],
      type: "self-description",
      categories: ["Resilience", "Stress Management"],
    }
  ],
  // Q for Question 56
  Q56: [
    {
      cohort: "You never complete tasks methodically; you often skip steps.",
      topics: ["Work Style", "Task Completion"],
      type: "self-description",
      categories: ["Work Habits", "Productivity"],
    },
    {
      cohort: "You sometimes work methodically but skip steps when necessary.",
      topics: ["Work Style", "Task Completion"],
      type: "self-description",
      categories: ["Work Habits", "Productivity"],
    },
    {
      cohort: "You moderately complete tasks methodically, skipping steps occasionally.",
      topics: ["Work Style", "Task Completion"],
      type: "self-description",
      categories: ["Work Habits", "Productivity"],
    },
    {
      cohort: "You often complete things methodically, without skipping steps.",
      topics: ["Work Style", "Task Completion"],
      type: "self-description",
      categories: ["Work Habits", "Productivity"],
    },
    {
      cohort: "You always complete tasks methodically and never skip steps.",
      topics: ["Work Style", "Task Completion"],
      type: "self-description",
      categories: ["Work Habits", "Productivity"],
    }
  ],
  // Q for Question 57
  Q57: [
    {
      cohort: "You never prefer tasks requiring creativity; you prefer following steps.",
      topics: ["Work Preferences", "Creativity vs. Structure"],
      type: "self-description",
      categories: ["Work Style", "Creativity"],
    },
    {
      cohort: "You sometimes enjoy creative tasks but also follow concrete processes.",
      topics: ["Work Preferences", "Creativity vs. Structure"],
      type: "self-description",
      categories: ["Work Style", "Creativity"],
    },
    {
      cohort: "You moderately enjoy tasks requiring both creativity and structured steps.",
      topics: ["Work Preferences", "Creativity vs. Structure"],
      type: "self-description",
      categories: ["Work Style", "Creativity"],
    },
    {
      cohort: "You often prefer tasks requiring creative thinking over rigid steps.",
      topics: ["Work Preferences", "Creativity vs. Structure"],
      type: "self-description",
      categories: ["Work Style", "Creativity"],
    },
    {
      cohort: "You always prefer creative problem-solving to following concrete steps.",
      topics: ["Work Preferences", "Creativity vs. Structure"],
      type: "self-description",
      categories: ["Work Style", "Creativity"],
    }
  ],
  // Q for Question 58
  Q58: [
    {
      cohort: "You never rely on emotional intuition; you prefer logical reasoning.",
      topics: ["Decision-Making", "Intuition vs. Logic"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You sometimes rely on emotional intuition but consider logic as well.",
      topics: ["Decision-Making", "Intuition vs. Logic"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You moderately balance emotional intuition and logical reasoning.",
      topics: ["Decision-Making", "Intuition vs. Logic"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You often rely on emotional intuition over logical reasoning.",
      topics: ["Decision-Making", "Intuition vs. Logic"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    },
    {
      cohort: "You always rely on emotional intuition when making decisions.",
      topics: ["Decision-Making", "Intuition vs. Logic"],
      type: "self-description",
      categories: ["Cognitive Processing", "Decision-Making"],
    }
  ],
  // Q for Question 59
  Q59: [
    {
      cohort: "You never struggle with deadlines; you always meet them on time.",
      topics: ["Time Management", "Deadlines"],
      type: "self-description",
      categories: ["Productivity", "Time Management"],
    },
    {
      cohort: "You sometimes struggle with deadlines, but usually manage them.",
      topics: ["Time Management", "Deadlines"],
      type: "self-description",
      categories: ["Productivity", "Time Management"],
    },
    {
      cohort: "You moderately struggle with deadlines, depending on the situation.",
      topics: ["Time Management", "Deadlines"],
      type: "self-description",
      categories: ["Productivity", "Time Management"],
    },
    {
      cohort: "You often find it hard to meet deadlines.",
      topics: ["Time Management", "Deadlines"],
      type: "self-description",
      categories: ["Productivity", "Time Management"],
    },
    {
      cohort: "You always struggle to meet deadlines.",
      topics: ["Time Management", "Deadlines"],
      type: "self-description",
      categories: ["Productivity", "Time Management"],
    }
  ],
  // Q for Question 60
  Q60: [
    {
      cohort: "You never feel confident that things will work out.",
      topics: ["Self-Confidence", "Future Outlook"],
      type: "self-description",
      categories: ["Confidence", "Self-Perception"],
    },
    {
      cohort: "You sometimes feel confident, but often have doubts.",
      topics: ["Self-Confidence", "Future Outlook"],
      type: "self-description",
      categories: ["Confidence", "Self-Perception"],
    },
    {
      cohort: "You moderately believe things will work out, but with some reservations.",
      topics: ["Self-Confidence", "Future Outlook"],
      type: "self-description",
      categories: ["Confidence", "Self-Perception"],
    },
    {
      cohort: "You often feel confident that things will work out in the end.",
      topics: ["Self-Confidence", "Future Outlook"],
      type: "self-description",
      categories: ["Confidence", "Self-Perception"],
    },
    {
      cohort: "You always feel confident that everything will work out just fine.",
      topics: ["Self-Confidence", "Future Outlook"],
      type: "self-description",
      categories: ["Confidence", "Self-Perception"],
    }
  ]
}

module.exports = { MBTI };
