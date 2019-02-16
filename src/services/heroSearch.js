import React, { Component } from "react";

const data = [
  {
    id: 102,
    name: "npc_dota_hero_abaddon",
    localized_name: "Abaddon",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Carry", "Durable"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/abaddon_hphover.png?v=4905471",
    counter: ["Axe", "Outworld Devourer", "Doom", "Lion", "Meepo"]
  },
  {
    id: 73,
    name: "npc_dota_hero_alchemist",
    localized_name: "Alchemist",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Support", "Durable", "Disabler", "Initiator", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/alchemist_hphover.png?v=4905471",
    counter: [
      "Ancient Apparition",
      "Anti-Mage",
      "Drow Ranger",
      "Phantom Assassin",
      "Troll Warlord"
    ]
  },
  {
    id: 68,
    name: "npc_dota_hero_ancient_apparition",
    localized_name: "Ancient Apparition",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/ancient_apparition_hphover.png",
    counter: ["Anti-Mage", "Bloodseeker", "Nyx Assassin", "Silencer", "Weaver"]
  },
  {
    id: 113,
    name: "npc_dota_hero_arc_warden",
    localized_name: "Arc Warden",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Escape", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Bristleback", "Chaos Knight", "Meepo", "Naga Siren"]
  },
  {
    id: 1,
    name: "npc_dota_hero_antimage",
    localized_name: "Anti-Mage",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_hphover.png?v=4905471",
    counter: [
      "Bloodseeker",
      "Disruptor",
      "Outworld Devourer",
      "Shadow Demon",
      "Spirit Breaker"
    ]
  },
  {
    id: 2,
    name: "npc_dota_hero_axe",
    localized_name: "Axe",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Durable", "Disabler", "Jungler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/axe_hphover.png?v=4905471",
    counter: ["Drow Ranger", "Enchantress", "Lifestealer", "Omniknight", "Ursa"]
  },
  {
    id: 3,
    name: "npc_dota_hero_bane",
    localized_name: "Bane",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker", "Durable"],
    legs: 4,
    image_url: "http://cdn.dota2.com/apps/dota2/images/heroes/bane_hphover.png",
    counter: ["Pudge", "Rubick", "Silencer", "Vengeful Spirit", "Visage"]
  },
  {
    id: 65,
    name: "npc_dota_hero_batrider",
    localized_name: "Batrider",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Initiator", "Jungler", "Disabler", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/batrider_hphover.png",
    counter: ["Abaddon", "Anti-Mage", "Bloodseeker", "Nyx Assassin", "Slark"]
  },
  {
    id: 38,
    name: "npc_dota_hero_beastmaster",
    localized_name: "Beastmaster",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/beastmaster_hphover.png?v=4905471",
    counter: ["Weaver", "Tidehunter", "Puck", "Alchemist", "Chen"]
  },
  {
    id: 4,
    name: "npc_dota_hero_bloodseeker",
    localized_name: "Bloodseeker",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Disabler", "Jungler", "Nuker", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/bloodseeker_hphover.png?v=4905471",
    counter: [
      "Chaos Knight",
      "Abaddon",
      "Dragon Knight",
      "Lifestealer",
      "Ancient Apparition"
    ]
  },
  {
    id: 62,
    name: "npc_dota_hero_bounty_hunter",
    localized_name: "Bounty Hunter",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Escape", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/bounty_hunter_hphover.png?v=4905471",
    counter: ["Slardar", "Bloodseeker", "Lion", "Slark", "Nyx Assassin"]
  },
  {
    id: 78,
    name: "npc_dota_hero_brewmaster",
    localized_name: "Brewmaster",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/brewmaster_hphover.png?v=4905471",
    counter: ["Luna", "Doom", "Silencer", "Lifestealer", "Crystal Maiden"]
  },
  {
    id: 99,
    name: "npc_dota_hero_bristleback",
    localized_name: "Bristleback",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Durable", "Initiator", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/bristleback_hphover.png?v=4905471",
    counter: ["Axe", "Legion Commander", "Necrophos", "Warlock", "Viper"]
  },
  {
    id: 61,
    name: "npc_dota_hero_broodmother",
    localized_name: "Broodmother",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Pusher", "Escape", "Nuker"],
    legs: 8,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/broodmother_hphover.png?v=4905471",
    counter: [
      "Axe",
      "Earthshaker",
      "Kunkka",
      "Keeper of the Light",
      "Legion Commander"
    ]
  },
  {
    id: 96,
    name: "npc_dota_hero_centaur",
    localized_name: "Centaur Warrunner",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Durable", "Initiator", "Disabler", "Nuker", "Escape"],
    legs: 4,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/centaur_hphover.png?v=4905471",
    counter: ["Lifestealer", "Necrophos", "Undying", "Alchemist", "Abaddon"]
  },
  {
    id: 81,
    name: "npc_dota_hero_chaos_knight",
    localized_name: "Chaos Knight",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Disabler", "Durable", "Pusher", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/chaos_knight_hphover.png?v=4905471",
    counter: ["Medusa", "Earthshaker", "Sven", "Io", "Phantom Lancer"]
  },
  {
    id: 66,
    name: "npc_dota_hero_chen",
    localized_name: "Chen",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Jungler", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/chen_hphover.png?v=4905471",
    counter: ["Meepo", "Enchantress", "Doom", "Alchemist", "Clinkz"]
  },
  {
    id: 56,
    name: "npc_dota_hero_clinkz",
    localized_name: "Clinkz",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Escape", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/clinkz_hphover.png?v=4905471",
    counter: ["Slardar", "Bounty Hunter", "Dragon Knight", "Bane", "Lion"]
  },
  {
    id: 51,
    name: "npc_dota_hero_rattletrap",
    localized_name: "Clockwerk",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/rattletrap_hphover.png?v=4905471",
    counter: [
      "Skywrath Mage",
      "Juggernaut",
      "Alchemist",
      "Abaddon",
      "Queen of Pain"
    ]
  },
  {
    id: 5,
    name: "npc_dota_hero_crystal_maiden",
    localized_name: "Crystal Maiden",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker", "Jungler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/crystal_maiden_hphover.png?v=4905471",
    counter: ["Juggernaut", "Riki", "Night Stalker", "Invoker", "Luna"]
  },
  {
    id: 55,
    name: "npc_dota_hero_dark_seer",
    localized_name: "Dark Seer",
    primary_attr: "int",
    attack_type: "Melee",
    roles: ["Initiator", "Jungler", "Escape", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/dark_seer_hphover.png",
    counter: ["Lone Druid", "Clinkz", "Bloodseeker", "Disruptor", "Enigma"]
  },
  {
    id: 119,
    name: "npc_dota_hero_dark_willow",
    localized_name: "Dark Willow",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/dark_willow_hphover.png?v=4905471",
    counter: [
      "Anti-Mage",
      "Bristleback",
      "Drow Ranger",
      "Ember Spirit",
      "Huskar"
    ]
  },
  {
    id: 50,
    name: "npc_dota_hero_dazzle",
    localized_name: "Dazzle",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/dazzle_hphover.png",
    counter: [
      "Ancient Apparition",
      "Axe",
      "Naga Siren",
      "Outworld Devourer",
      "Phantom Lancer"
    ]
  },
  {
    id: 43,
    name: "npc_dota_hero_death_prophet",
    localized_name: "Death Prophet",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Pusher", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/death_prophet_hphover.png",
    counter: [
      "Ancient Apparition",
      "Anti-Mage",
      "Doom",
      "Legion Commander",
      "Omniknight"
    ]
  },
  {
    id: 87,
    name: "npc_dota_hero_disruptor",
    localized_name: "Disruptor",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/disruptor_hphover.png?v=4905471",
    counter: [
      "Juggernaut",
      "Lifestealer",
      "Phantom Lancer",
      "Pugna",
      "Omniknight"
    ]
  },
  {
    id: 69,
    name: "npc_dota_hero_doom_bringer",
    localized_name: "Doom",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/doom_bringer_hphover.png?v=4905471",
    counter: [
      "Alchemist",
      "Centaur Warrunner",
      "Drow Ranger",
      "Lifestealer",
      "Lone Druid"
    ]
  },
  {
    id: 49,
    name: "npc_dota_hero_dragon_knight",
    localized_name: "Dragon Knight",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Pusher", "Durable", "Disabler", "Initiator", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/dragon_knight_hphover.png?v=4905471",
    counter: [
      "Ancient Apparition",
      "Bristleback",
      "Necrophos",
      "Outworld Devourer",
      "Razor"
    ]
  },
  {
    id: 6,
    name: "npc_dota_hero_drow_ranger",
    localized_name: "Drow Ranger",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Disabler", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/drow_ranger_hphover.png?v=4905471",
    counter: ["Tinker", "Tusk", "Axe", "Clockwerk", "Huskar"]
  },
  {
    id: 107,
    name: "npc_dota_hero_earth_spirit",
    localized_name: "Earth Spirit",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Nuker", "Escape", "Disabler", "Initiator", "Durable"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/earth_spirit_hphover.png?v=4905471",
    counter: ["Abaddon", "Lycan", "Techies", "Silencer", "Doom"]
  },
  {
    id: 7,
    name: "npc_dota_hero_earthshaker",
    localized_name: "Earthshaker",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Initiator", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/earthshaker_hphover.png?v=4905471",
    counter: [
      "Clockwerk",
      "Disruptor",
      "Earth Spirit",
      "Skywrath Mage",
      "Sniper"
    ]
  },
  {
    id: 103,
    name: "npc_dota_hero_elder_titan",
    localized_name: "Elder Titan",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Nuker", "Durable"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/elder_titan_hphover.png?v=4905471",
    counter: ["Brewmaster", "Clockwerk", "Juggernaut", "Lion", "Sven"]
  },
  {
    id: 106,
    name: "npc_dota_hero_ember_spirit",
    localized_name: "Ember Spirit",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Nuker", "Disabler", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/ember_spirit_hphover.png?v=4905471",
    counter: [
      "Faceless Void",
      "Storm Spirit",
      "Silencer",
      "Kunkka",
      "Nyx Assassin"
    ]
  },
  {
    id: 58,
    name: "npc_dota_hero_enchantress",
    localized_name: "Enchantress",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Jungler", "Pusher", "Durable", "Disabler"],
    legs: 4,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/enchantress_hphover.png?v=4905471",
    counter: ["Broodmother", "Juggernaut", "Lifestealer", "Timbersaw", "Riki"]
  },
  {
    id: 33,
    name: "npc_dota_hero_enigma",
    localized_name: "Enigma",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Disabler", "Jungler", "Initiator", "Pusher"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/enigma_hphover.png",
    counter: ["Clockwerk", "Medusa", "Pudge", "Silencer", "Storm Spirit"]
  },
  {
    id: 41,
    name: "npc_dota_hero_faceless_void",
    localized_name: "Faceless Void",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Initiator", "Disabler", "Escape", "Durable"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_hphover.png?v=4905471",
    counter: ["Pudge", "Shadow Demon", "Phoenix", "Night Stalker", "Brewmaster"]
  },
  {
    id: 121,
    name: "npc_dota_hero_grimstroke",
    localized_name: "Grimstroke",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/grimstroke_hphover.png",
    counter: ["Sniper", "Rubick", "Silencer", "Anti-Mage", "Riki"]
  },
  {
    id: 72,
    name: "npc_dota_hero_gyrocopter",
    localized_name: "Gyrocopter",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/gyrocopter_hphover.png?v=4905471",
    counter: [
      "Lifestealer",
      "Juggernaut",
      "Omniknight",
      "Queen of Pain",
      "Arc Warden"
    ]
  },
  {
    id: 59,
    name: "npc_dota_hero_huskar",
    localized_name: "Huskar",
    primary_attr: "str",
    attack_type: "Ranged",
    roles: ["Carry", "Durable", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/huskar_hphover.png?v=4905471",
    counter: [
      "Juggernaut",
      "Naga Siren",
      "Lifestealer",
      "Bloodseeker",
      "Phantom Lancer"
    ]
  },
  {
    id: 74,
    name: "npc_dota_hero_invoker",
    localized_name: "Invoker",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Disabler", "Escape", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/invoker_hphover.png",
    counter: [
      "Broodmother",
      "Anti-Mage",
      "Doom",
      "Faceless Void",
      "Night Stalker"
    ]
  },
  {
    id: 91,
    name: "npc_dota_hero_wisp",
    localized_name: "Io",
    primary_attr: "str",
    attack_type: "Ranged",
    roles: ["Support", "Escape", "Nuker"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/wisp_hphover.png?v=4905471",
    counter: ["Bloodseeker", "Leshrac", "Luna", "Disruptor", "Bristleback"]
  },
  {
    id: 64,
    name: "npc_dota_hero_jakiro",
    localized_name: "Jakiro",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Pusher", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/jakiro_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Oracle", "Rubick", "Silencer", "Lifestealer"]
  },
  {
    id: 8,
    name: "npc_dota_hero_juggernaut",
    localized_name: "Juggernaut",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Pusher", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_hphover.png?v=4905471",
    counter: ["Axe", "Clinkz", "Outworld Devourer", "Phantom Lancer", "Ursa"]
  },
  {
    id: 90,
    name: "npc_dota_hero_keeper_of_the_light",
    localized_name: "Keeper of the Light",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler", "Jungler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/keeper_of_the_light_hphover.png?v=4905471",
    counter: [
      "Anti-Mage",
      "Nyx Assassin",
      "Legion Commander",
      "Huskar",
      "Night Stalker"
    ]
  },
  {
    id: 23,
    name: "npc_dota_hero_kunkka",
    localized_name: "Kunkka",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Support", "Disabler", "Initiator", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_hphover.png?v=4905471",
    counter: ["Ursa", "Juggernaut", "Sniper", "Outworld Devourer", "Huskar"]
  },
  {
    id: 104,
    name: "npc_dota_hero_legion_commander",
    localized_name: "Legion Commander",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/legion_commander_hphover.png?v=4905471",
    counter: ["Abaddon", "Bane", "Dazzle", "Dragon Knight", "Razor"]
  },
  {
    id: 52,
    name: "npc_dota_hero_leshrac",
    localized_name: "Leshrac",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Support", "Nuker", "Pusher", "Disabler"],
    legs: 4,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/leshrac_hphover.png",
    counter: ["Pugna", "Anti-Mage", "Clockwerk", "Lifestealer", "Nyx Assassin"]
  },
  {
    id: 31,
    name: "npc_dota_hero_lich",
    localized_name: "Lich",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker"],
    legs: 2,
    image_url: "http://cdn.dota2.com/apps/dota2/images/heroes/lich_hphover.png",
    counter: [
      "Anti-Mage",
      "Weaver",
      "Nature's Prophet",
      "Broodmother",
      "Dark Seer"
    ]
  },
  {
    id: 54,
    name: "npc_dota_hero_life_stealer",
    localized_name: "Lifestealer",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Durable", "Jungler", "Escape", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/life_stealer_hphover.png?v=4905471",
    counter: ["Clinkz", "Terrorblade", "Weaver", "Luna", "Ursa"]
  },
  {
    id: 25,
    name: "npc_dota_hero_lina",
    localized_name: "Lina",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Carry", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/lina_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Lifestealer", "Faceless Void", "Spectre", "Slark"]
  },
  {
    id: 26,
    name: "npc_dota_hero_lion",
    localized_name: "Lion",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker", "Initiator"],
    legs: 2,
    image_url: "http://cdn.dota2.com/apps/dota2/images/heroes/lion_hphover.png",
    counter: ["Lifestealer", "Puck", "Rubick", "Nyx Assassin", "Tidehunter"]
  },
  {
    id: 48,
    name: "npc_dota_hero_luna",
    localized_name: "Luna",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/luna_hphover.png?v=4905471",
    counter: [
      "Arc Warden",
      "Bristleback",
      "Huskar",
      "Juggernaut",
      "Phantom Lancer"
    ]
  },
  {
    id: 77,
    name: "npc_dota_hero_lycan",
    localized_name: "Lycan",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Pusher", "Jungler", "Durable", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/lycan_hphover.png?v=4905471",
    counter: ["Axe", "Bloodseeker", "Sven", "Phantom Assassin", "Omniknight"]
  },
  {
    id: 97,
    name: "npc_dota_hero_magnataur",
    localized_name: "Magnus",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Nuker", "Escape"],
    legs: 4,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/magnataur_hphover.png?v=4905471",
    counter: ["Tinker", "Venomancer", "Huskar", "Rubick", "Night Stalker"]
  },
  {
    id: 94,
    name: "npc_dota_hero_medusa",
    localized_name: "Medusa",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Disabler", "Durable"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/medusa_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Arc Warden", "Phantom Lancer", "Slark", "Invoker"]
  },
  {
    id: 82,
    name: "npc_dota_hero_meepo",
    localized_name: "Meepo",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Nuker", "Disabler", "Initiator", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/meepo_hphover.png?v=4905471",
    counter: ["Lich", "Axe", "Earthshaker", "Ember Spirit", "Kunkka"]
  },
  {
    id: 9,
    name: "npc_dota_hero_mirana",
    localized_name: "Mirana",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Support", "Escape", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/mirana_hphover.png?v=4905471",
    counter: ["Puck", "Abaddon", "Meepo", "Arc Warden", "Slark"]
  },
  {
    id: 114,
    name: "npc_dota_hero_monkey_king",
    localized_name: "Monkey King",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Disabler", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/monkey_king_hphover.png?v=4905471",
    counter: [
      "Batrider",
      "Beastmaster",
      "Bounty Hunter",
      "Brewmaster",
      "Clockwerk"
    ]
  },
  {
    id: 10,
    name: "npc_dota_hero_morphling",
    localized_name: "Morphling",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Escape", "Durable", "Nuker", "Disabler"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/morphling_hphover.png?v=4905471",
    counter: [
      "Ancient Apparition",
      "Anti-Mage",
      "Ember Spirit",
      "Mirana",
      "Rubick"
    ]
  },
  {
    id: 89,
    name: "npc_dota_hero_naga_siren",
    localized_name: "Naga Siren",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Support", "Pusher", "Disabler", "Initiator", "Escape"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/naga_siren_hphover.png?v=4905471",
    counter: ["Axe", "Earthshaker", "Lion", "Outworld Devourer", "Zues"]
  },
  {
    id: 53,
    name: "npc_dota_hero_furion",
    localized_name: "Nature's Prophet",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Jungler", "Pusher", "Escape", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/furion_hphover.png?v=4905471",
    counter: ["Storm Spirit", "Broodmother", "Elder Titan", "Lina", "Meepo"]
  },
  {
    id: 36,
    name: "npc_dota_hero_necrolyte",
    localized_name: "Necrophos",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Durable", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/necrolyte_hphover.png",
    counter: ["Antimage", "Dazzle", "Meepo", "Phantom Lancer", "Oracle"]
  },
  {
    id: 60,
    name: "npc_dota_hero_night_stalker",
    localized_name: "Night Stalker",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/night_stalker_hphover.png?v=4905471",
    counter: [
      "Phantom Lancer",
      "Terrorblade",
      "Meepo",
      "Chaos Knight",
      "Huskar"
    ]
  },
  {
    id: 88,
    name: "npc_dota_hero_nyx_assassin",
    localized_name: "Nyx Assassin",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Disabler", "Nuker", "Initiator", "Escape"],
    legs: 6,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/nyx_assassin_hphover.png?v=4905471",
    counter: [
      "Lifestealer",
      "Arc Warden",
      "Visage",
      "Bloodseeker",
      "Night Stalker"
    ]
  },
  {
    id: 84,
    name: "npc_dota_hero_ogre_magi",
    localized_name: "Ogre Magi",
    primary_attr: "int",
    attack_type: "Melee",
    roles: ["Support", "Nuker", "Disabler", "Durable", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/ogre_magi_hphover.png?v=4905471",
    counter: ["Phantom Lancer", "Oracle", "Chaos Knight", "Meepo", "Omniknight"]
  },
  {
    id: 57,
    name: "npc_dota_hero_omniknight",
    localized_name: "Omniknight",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_hphover.png?v=4905471",
    counter: ["Doom", "Bewmaster", "Silencer", "Oracle", "Invoker"]
  },
  {
    id: 111,
    name: "npc_dota_hero_oracle",
    localized_name: "Oracle",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/oracle_hphover.png?v=4905471",
    counter: [
      "Anti-Mage",
      "Axe",
      "Bristleback",
      "Shadow Demon",
      "Faceless Void"
    ]
  },
  {
    id: 76,
    name: "npc_dota_hero_obsidian_destroyer",
    localized_name: "Outworld Devourer",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Disabler"],
    legs: 4,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_hphover.png",
    counter: [
      "Legion Commander",
      "Lone Druid",
      "Nyx Assassin",
      "Pugna",
      "Rubick"
    ]
  },
  {
    id: 120,
    name: "npc_dota_hero_pangolier",
    localized_name: "Pangolier",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Nuker", "Disabler", "Durable", "Escape", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/pangolier_hphover.png?v=4905471",
    counter: [
      "Anti-Mage",
      "Beastmaster",
      "Bloodseeker",
      "Centaur Warrunner",
      "Naga Siren"
    ]
  },
  {
    id: 44,
    name: "npc_dota_hero_phantom_assassin",
    localized_name: "Phantom Assassin",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/phantom_assassin_hphover.png?v=4905471",
    counter: [
      "Axe",
      "Bane",
      "Broodmother",
      "Centaur Warrunner",
      "Dragon Knight"
    ]
  },
  {
    id: 12,
    name: "npc_dota_hero_phantom_lancer",
    localized_name: "Phantom Lancer",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Pusher", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/phantom_lancer_hphover.png?v=4905471",
    counter: [
      "Axe",
      "Earthshaker",
      "Centaur Warrunner",
      "Ember Spirit",
      "Phoenix"
    ]
  },
  {
    id: 110,
    name: "npc_dota_hero_phoenix",
    localized_name: "Phoenix",
    primary_attr: "str",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Initiator", "Escape", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/phoenix_hphover.png?v=4905471",
    counter: ["Troll Warlord", "Night Stalker", "Huskar", "Ursa", "Necrophos"]
  },
  {
    id: 13,
    name: "npc_dota_hero_puck",
    localized_name: "Puck",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Initiator", "Disabler", "Escape", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/puck_hphover.png?v=4905471",
    counter: [
      "Arc Warden",
      "Faceless Void",
      "Jakiro",
      "Night Stalker",
      "Nyx Assassin"
    ]
  },
  {
    id: 14,
    name: "npc_dota_hero_pudge",
    localized_name: "Pudge",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Disabler", "Initiator", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/pudge_hphover.png?v=4905471",
    counter: [
      "Abaddon",
      "Anti-Mage",
      "Bristleback",
      "Legion Commander",
      "Lifestealer"
    ]
  },
  {
    id: 45,
    name: "npc_dota_hero_pugna",
    localized_name: "Pugna",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Nuker", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/pugna_hphover.png",
    counter: ["Nyx Assassin", "Clockwerk", "Sniper", "Phantom Lancer", "Luna"]
  },
  {
    id: 39,
    name: "npc_dota_hero_queenofpain",
    localized_name: "Queen of Pain",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/queenofpain_hphover.png",
    counter: [
      "Arc Warden",
      "Bloodseeker",
      "Death Prophet",
      "Puck",
      "Night Stalker"
    ]
  },
  {
    id: 15,
    name: "npc_dota_hero_razor",
    localized_name: "Razor",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Durable", "Nuker", "Pusher"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/razor_hphover.png?v=4905471",
    counter: ["Necrophos", "Outworld Devourer", "Slark", "Weaver", "Sniper"]
  },
  {
    id: 32,
    name: "npc_dota_hero_riki",
    localized_name: "Riki",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/riki_hphover.png?v=4905471",
    counter: ["Axe", "Bristleback", "Sven", "Legion Commander", "Faceless Void"]
  },
  {
    id: 86,
    name: "npc_dota_hero_rubick",
    localized_name: "Rubick",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/rubick_hphover.png?v=4905471",
    counter: ["Bristleback", "Clinkz", "Legion Commander", "Riki", "Slark"]
  },
  {
    id: 16,
    name: "npc_dota_hero_sand_king",
    localized_name: "Sand King",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Support", "Nuker", "Escape", "Jungler"],
    legs: 6,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/sand_king_hphover.png?v=4905471",
    counter: ["Earth Spirit", "Kunkka", "Phoenix", "Silencer", "Zues"]
  },
  {
    id: 79,
    name: "npc_dota_hero_shadow_demon",
    localized_name: "Shadow Demon",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Initiator", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/shadow_demon_hphover.png",
    counter: [
      "Anti-Mage",
      "Ember Spirit",
      "Leshrac",
      "Phantom Assassin",
      "Storm Spirit"
    ]
  },
  {
    id: 11,
    name: "npc_dota_hero_nevermore",
    localized_name: "Shadow Fiend",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/nevermore_hphover.png?v=4905471",
    counter: ["Axe", "Bane", "Bounty Hunter", "Ursa", "Zues"]
  },
  {
    id: 27,
    name: "npc_dota_hero_shadow_shaman",
    localized_name: "Shadow Shaman",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Pusher", "Disabler", "Nuker", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/shadow_shaman_hphover.png?v=4905471",
    counter: ["Morphling", "Riki", "Morphling", "Wraith King", "Mirana"]
  },
  {
    id: 75,
    name: "npc_dota_hero_silencer",
    localized_name: "Silencer",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Support", "Disabler", "Initiator", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/silencer_hphover.png?v=4905471",
    counter: [
      "Broodmother",
      "Phantom Assassin",
      "Nyx Assassin",
      "Ursa",
      "Slark"
    ]
  },
  {
    id: 101,
    name: "npc_dota_hero_skywrath_mage",
    localized_name: "Skywrath Mage",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/skywrath_mage_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Huskar", "Nyx Assassin", "Wraith King", "Abaddon"]
  },
  {
    id: 28,
    name: "npc_dota_hero_slardar",
    localized_name: "Slardar",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Durable", "Initiator", "Disabler", "Escape"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/slardar_hphover.png?v=4905471",
    counter: ["Oracle", "Abaddon", "Phantom Lancer", "Meepo", "Bloodseeker"]
  },
  {
    id: 93,
    name: "npc_dota_hero_slark",
    localized_name: "Slark",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Escape", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/slark_hphover.png?v=4905471",
    counter: [
      "Axe",
      "Bloodseeker",
      "Centaur Warrunner",
      "Omniknight",
      "Phantom Lancer"
    ]
  },
  {
    id: 35,
    name: "npc_dota_hero_sniper",
    localized_name: "Sniper",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/sniper_hphover.png?v=4905471",
    counter: ["Bounty Hunter", "Invoker", "Pudge", "Slark", "Tusk"]
  },
  {
    id: 67,
    name: "npc_dota_hero_spectre",
    localized_name: "Spectre",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Durable", "Escape"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/spectre_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Lycan", "Necrophos", "Lion", "Meepo"]
  },
  {
    id: 71,
    name: "npc_dota_hero_spirit_breaker",
    localized_name: "Spirit Breaker",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Initiator", "Disabler", "Durable", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/spirit_breaker_hphover.png?v=4905471",
    counter: ["Clockwerk", "Outworld Devourer", "Enigma", "Invoker", "Meepo"]
  },
  {
    id: 17,
    name: "npc_dota_hero_storm_spirit",
    localized_name: "Storm Spirit",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Escape", "Nuker", "Initiator", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/storm_spirit_hphover.png?v=4905471",
    counter: [
      "Anti-Mage",
      "Ember Spirit",
      "Night Stalker",
      "Silencer",
      "Skywrath Mage"
    ]
  },
  {
    id: 18,
    name: "npc_dota_hero_sven",
    localized_name: "Sven",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/sven_hphover.png?v=4905471",
    counter: ["Clockwerk", "Enchantress", "Lifestealer", "Sniper", "Spectre"]
  },
  {
    id: 105,
    name: "npc_dota_hero_techies",
    localized_name: "Techies",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Nuker", "Disabler"],
    legs: 6,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/techies_hphover.png?v=4905471",
    counter: ["Beastmaster", "Night Stalker", "Wraith King", "Zues", "Chen"]
  },
  {
    id: 46,
    name: "npc_dota_hero_templar_assassin",
    localized_name: "Templar Assassin",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/templar_assassin_hphover.png?v=4905471",
    counter: ["Arc Warden", "Pudge", "Huskar", "Dragon Knight", "Venomancer"]
  },
  {
    id: 109,
    name: "npc_dota_hero_terrorblade",
    localized_name: "Terrorblade",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Pusher", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/terrorblade_hphover.png?v=4905471",
    counter: [
      "Razor",
      "Earth Spirit",
      "Elder Titan",
      "Shadow Shaman",
      "Ember Spirit"
    ]
  },
  {
    id: 29,
    name: "npc_dota_hero_tidehunter",
    localized_name: "Tidehunter",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Durable", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/tidehunter_hphover.png?v=4905471",
    counter: ["Ursa", "Luna", "Silencer", "Slark", "Outworld Devourer"]
  },
  {
    id: 98,
    name: "npc_dota_hero_shredder",
    localized_name: "Timbersaw",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Nuker", "Durable", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/shredder_hphover.png?v=4905471",
    counter: ["Bane", "Doom", "Faceless Void", "Ember Spririt", "Necrophos"]
  },
  {
    id: 34,
    name: "npc_dota_hero_tinker",
    localized_name: "Tinker",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Nuker", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/tinker_hphover.png?v=4905471",
    counter: ["Anti-Mage", "Clockwerk", "Legion", "Lifestealer", "Nyx Assassin"]
  },
  {
    id: 19,
    name: "npc_dota_hero_tiny",
    localized_name: "Tiny",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Nuker", "Pusher", "Initiator", "Durable", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/tiny_hphover.png?v=4905471",
    counter: ["Bristleback", "Juggernaut", "Lifestealer", "Lion", "Viper"]
  },
  {
    id: 83,
    name: "npc_dota_hero_treant",
    localized_name: "Treant Protector",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Initiator", "Durable", "Disabler", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/treant_hphover.png?v=4905471",
    counter: [
      "Phantom Lancer",
      "Timbersaw",
      "Natures Prophet",
      "Batrider",
      "Lina"
    ]
  },
  {
    id: 95,
    name: "npc_dota_hero_troll_warlord",
    localized_name: "Troll Warlord",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Pusher", "Disabler", "Durable"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/troll_warlord_hphover.png?v=4905471",
    counter: [
      "Axe",
      "Chaos Knight",
      "Crystal Maiden",
      "Lich",
      "Outworld Devourer"
    ]
  },
  {
    id: 100,
    name: "npc_dota_hero_tusk",
    localized_name: "Tusk",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Initiator", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/tusk_hphover.png?v=4905471",
    counter: [
      "Techies",
      "Anti-Mage",
      "Disruptor",
      "Earthshaker",
      "Phantom Lancer"
    ]
  },
  {
    id: 108,
    name: "npc_dota_hero_abyssal_underlord",
    localized_name: "Underlord",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Nuker", "Disabler", "Durable", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/abyssal_underlord_hphover.png?v=4905471",
    counter: ["Kunkka", "Natures Prophet", "Spectre", "Sniper", "Visage"]
  },
  {
    id: 85,
    name: "npc_dota_hero_undying",
    localized_name: "Undying",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Support", "Durable", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/undying_hphover.png?v=4905471",
    counter: ["Silencer", "Necrophos", "Luna", "Earthshaker", "Death Prophet"]
  },
  {
    id: 70,
    name: "npc_dota_hero_ursa",
    localized_name: "Ursa",
    primary_attr: "agi",
    attack_type: "Melee",
    roles: ["Carry", "Jungler", "Durable", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/ursa_hphover.png?v=4905471",
    counter: ["Bristleback", "Riki", "Shadow Demon", "Beastmaster", "Viper"]
  },
  {
    id: 20,
    name: "npc_dota_hero_vengefulspirit",
    localized_name: "Vengeful Spirit",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Support", "Initiator", "Disabler", "Nuker", "Escape"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/vengefulspirit_hphover.png?v=4905471",
    counter: [
      "Phantom Assassin",
      "Anti-Mage",
      "Spirit Breaker",
      "Tidehunter",
      "Chaos Knight"
    ]
  },
  {
    id: 40,
    name: "npc_dota_hero_venomancer",
    localized_name: "Venomancer",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Initiator", "Pusher", "Disabler"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/venomancer_hphover.png?v=4905471",
    counter: ["Slark", "Huskar", "Oracle", "Anti-Mage", "Terrorblade"]
  },
  {
    id: 47,
    name: "npc_dota_hero_viper",
    localized_name: "Viper",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Durable", "Initiator", "Disabler"],
    legs: 0,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/viper_hphover.png?v=4905471",
    counter: ["Invoker", "Phantom Lancer", "Terrorblade", "Windranger", "Viper"]
  },
  {
    id: 92,
    name: "npc_dota_hero_visage",
    localized_name: "Visage",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Durable", "Disabler", "Pusher"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/visage_hphover.png",
    counter: ["Timbersaw", "Tidehunter", "Gyrocopter", "Rubick", "Luna"]
  },
  {
    id: 37,
    name: "npc_dota_hero_warlock",
    localized_name: "Warlock",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Initiator", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/warlock_hphover.png",
    counter: ["Anti-Mage", "Ember Spirit", "Bloodseeker", "Weaver", "Silencer"]
  },
  {
    id: 63,
    name: "npc_dota_hero_weaver",
    localized_name: "Weaver",
    primary_attr: "agi",
    attack_type: "Ranged",
    roles: ["Carry", "Escape"],
    legs: 4,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/weaver_hphover.png?v=4905471",
    counter: [
      "Bloodseeker",
      "Faceless Void",
      "Nyx Assassin",
      "Bloodseeker",
      "Axe"
    ]
  },
  {
    id: 21,
    name: "npc_dota_hero_windrunner",
    localized_name: "Windranger",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Carry", "Support", "Disabler", "Escape", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/windrunner_hphover.png?v=4905471",
    counter: ["Axe", "Tinker", "Shadow Demon", "Bloodseeker", "Silencer"]
  },
  {
    id: 112,
    name: "npc_dota_hero_winter_wyvern",
    localized_name: "Winter Wyvern",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Disabler", "Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/winter_wyvern_hphover.png",
    counter: [
      "Ancient Apparition",
      "Luna",
      "Naga Siren",
      "Outworld Devourer",
      "Timbersaw"
    ]
  },
  {
    id: 30,
    name: "npc_dota_hero_witch_doctor",
    localized_name: "Witch Doctor",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Support", "Nuker", "Disabler"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/witch_doctor_hphover.png",
    counter: ["Morphling", "Riki", "Rubick", "Silencer", "Oracle"]
  },
  {
    id: 42,
    name: "npc_dota_hero_skeleton_king",
    localized_name: "Wraith King",
    primary_attr: "str",
    attack_type: "Melee",
    roles: ["Carry", "Support", "Durable", "Disabler", "Initiator"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/skeleton_king_hphover.png?v=4905471",
    counter: ["Lion", "Riki", "Weaver", "Slark", "Terrorblade"]
  },
  {
    id: 22,
    name: "npc_dota_hero_zuus",
    localized_name: "Zeus",
    primary_attr: "int",
    attack_type: "Ranged",
    roles: ["Nuker"],
    legs: 2,
    image_url:
      "http://cdn.dota2.com/apps/dota2/images/heroes/zuus_hphover.png?v=4905471",
    counter: ["Faceless Void", "Meepo", "Juggernaut", "Anti-Mage", "Pudge"]
  }
];
class HeroSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroSearch: "",
      filteredData: [],

      clickedHero: {id: "", img: "", counter: []},
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.updateHeroContainer = this.updateHeroContainer.bind(this);
  }

  // FUNCTIONS

  updateSearch(event) {
    this.setState({ heroSearch: event.target.value.substr(0, 20) });
  }

  updateHeroContainer(id, img, counter) {
    this.id = id;
    this.img = img;
    this.counter = counter;

    this.setState({ clickedHero: { id: this.id, img: this.img, counter: this.counter } });
  }

  // RENDER TO VIEW

  render() {
    let heroes = data.filter(hero => {
      return hero.localized_name
        .toLowerCase()
        .includes(this.state.heroSearch.toLowerCase());
    });
    let clickedHero = this.state.clickedHero;
    let counterList = clickedHero.counter.map(counterItem => {
      return <li className="heroCounter">
      {counterItem}
      </li>
    })
    
    console.log("heroImage: ", this.state.clickedHero.img);

    return (
      // BODY
      <div className="wrapper">
        {/* SEARCH BAR */}
        <input
          className="smartSearch"
          type="search"
          id="heroSearch"
          value={this.state.heroSearch}
          name="heroSearch"
          onChange={this.updateSearch.bind(this)}
        />
        {/* NUMBER OF CURRENTLY SHOWN RESULTS */}
        <h5 className="numberResults">Heroes ({heroes.length} results)</h5>

        {/* HERO CONTAINER */}
        <ul name="heroes" className="heroContainer">
          {heroes.map(hero => (
            <li
              key={hero.id}
              onClick={e =>
                this.updateHeroContainer(
                  hero.localized_name,
                  hero.image_url,
                  hero.counter
                )
              }
            >
              <img className="hero-img" src={hero.image_url} />
            </li>
          ))}
        </ul>

        {/* COUNTER CONTAINER */}
        <ul name="counter" className="counterContainer">
          <h1 id="counterName" className="counterName">{clickedHero.id}</h1>
          <img className="counter-img" id="counterImage" src={clickedHero.img} />
          {counterList}
        </ul>
      </div>

    );
  }
}

export default HeroSearch;
