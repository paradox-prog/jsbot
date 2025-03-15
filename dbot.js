const http = require("http");
const {
  Client,
  Intents,
  MessageAttachment,
  MessageEmbed,
  Permissions,
  MessageActionRow,
  MessageSelectMenu,
  MessageButton,
  GatewayIntentBits,
  EmbedBuilder,
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  IntentsBitField,
  Guild,
  GuildMember,
  ApplicationCommandOptionType,
  MessageMentions,
  MessageActionRowOptions,
  MessageSelectMenuOptions,
  Presence,
  UserFlags,
  AttachmentBuilder,
  Colors,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
  WebhookClient,
  version: discordVersion,
} = require("discord.js");
const Discord = require("discord.js");
const Canvas = require("@napi-rs/canvas");
const { REST } = require("@discordjs/rest");
const express = require("express");
const app = express();
const axios = require("axios");
const ytdl = require("ytdl-core");
const util = require("util");
const path = require("path");
const cron = require("node-cron");
const { Routes } = require("discord-api-types/v9");
const { request } = require("undici");
const { readdirSync } = require("fs");
const fs = require("fs");
const ms = require("ms");
const { join } = require("path");
const Keyv = require("keyv");
const dotenv = require("dotenv");
const ClientId = "1098536632161947658";
const workerpool = require("workerpool");
const pool = workerpool.pool("./worker.js");
const moment = require("moment");
const translate = require("google-translate-api");
const fetch = require("node-fetch");
const os = require("os");
const { JSDOM } = require("jsdom");
const lastSendTime = {};
dotenv.config();
require("dotenv").config();
const options = {
  intents: [
    "Guilds",
    "GuildBans",
    "GuildMessages",
    "GuildMessageReactions",
    "GuildChannels,",
    "GuildPresences",
    "MessageContent",
    "GatewayIntentBits.GuildVoiceStates",
    "GatewayIntentBits.GuildMembers",
    "IntentsBitField.Flags.GuildMessages",
    "IntentsBitField.Flags.MessageContent",
    "DirectMessages",
    "DirectMessageReactions",
    "DirectMessageTyping",
    "GuildPresences",
    "Discord.Intents.FLAGS.GUILDS",
    "Discord.Intents.FLAGS.GUILD_MESSAGES",
    "Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS",
  ],
};
const client = new Client({
  partials: ["CHANNEL"],
  intents: new Intents(32767),
});
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
const {
  Modal,
  TextInputComponent,
  SelectMenuComponent,
  showModal,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord-modals");
const discordModals = require("discord-modals");
discordModals(client);
const prefix = "dea.";
const newbutton = (buttondata) => {
  return {
    components: buttondata.map((data) => {
      return {
        custom_id: data.id,
        label: data.label,
        style: data.style || 1,
        url: data.url,
        emoji: data.emoji,
        disabled: data.disabled,
        type: 2,
      };
    }),
    type: 1,
  };
};
process.env.TZ = "Asia/Tokyo";
("use strict");
let guildId;

const admin_list = ["1350063666850037794"];

const { URL, URLSearchParams } = require("url");
const uuid = require("uuid");
const { DateTime } = require("luxon");

function extractVerificationCode(url) {
  const parsedUrl = new URL(url);
  const pathSegments = parsedUrl.pathname.split("/");

  if (pathSegments.length > 1) {
    return pathSegments[pathSegments.length - 1];
  }

  const queryParams = parsedUrl.searchParams;
  if (queryParams.has("link_key")) {
    return queryParams.get("link_key");
  }

  return null;
}

async function getPayPayLinkInfo(paypayLink) {
  const verificationCode = extractVerificationCode(paypayLink);
  if (!verificationCode) {
    throw new Error("有効なリンクを指定してください。");
  }

  const clientUuid = uuid.v4();
  const baseUrl = "https://www.paypay.ne.jp/app/v2/p2p-api/getP2PLinkInfo";
  const queryParams = new URLSearchParams({
    verificationCode: verificationCode,
    client_uuid: clientUuid,
  });

  const pathHeaderValue = `/app/v2/p2p-api/getP2PLinkInfo?${queryParams.toString()}`;
  const refererUrl = `https://www.paypay.ne.jp/app/p2p/${verificationCode}?pid=SMS&link_key=${verificationCode}`;

  const headers = {
    authority: "www.paypay.ne.jp",
    method: "GET",
    path: pathHeaderValue,
    scheme: "https",
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "ja;q=0.9",
    Referer: refererUrl,
    "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Gpc": "1",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  };

  const response = await axios.get(baseUrl, {
    headers,
    params: queryParams,
  });
  return response.data;
}

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    response.end(
      `${client.user?.tag} is ready!\n導入サーバー:${client.guilds.cache.size}\nユーザー:${client.users.cache.size}`
    );
  })
  .listen(3000);

if (process.env.DISCORD_TOKEN == undefined) {
  console.error("tokenが設定されていません！");
  process.exit(0);
}

client.on("ready", (client) => {
  console.log(`ログイン: ${client.user.tag}`);
  const getCPUUsage = () => {
    const cpus = os.cpus();

    let user = 0;
    let nice = 0;
    let sys = 0;
    let idle = 0;
    let irq = 0;
    let total = 0;

    for (const cpu of cpus) {
      user += cpu.times.user;
      nice += cpu.times.nice;
      sys += cpu.times.sys;
      idle += cpu.times.idle;
      irq += cpu.times.irq;
    }

    total = user + nice + sys + idle + irq;

    return {
      idle,
      total,
    };
  };

  let startMeasure = getCPUUsage();

  const updateStats = async () => {
    const endMeasure = getCPUUsage();
    const idleDifference = endMeasure.idle - startMeasure.idle;
    const totalDifference = endMeasure.total - startMeasure.total;
    const cpuUsagePercentage = (1 - idleDifference / totalDifference) * 100;

    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const memoryUsagePercentage = (usedMemory / totalMemory) * 100;
    const usedMemoryGB = (usedMemory / 1024 / 1024 / 1024).toFixed(2);
    const totalMemoryGB = (totalMemory / 1024 / 1024 / 1024).toFixed(2);

    const statusMessage = `CPU: ${cpuUsagePercentage.toFixed(
      1
    )}%, Mem: ${memoryUsagePercentage.toFixed(
      1
    )}% | ${usedMemoryGB}GB / ${totalMemoryGB}GB  | \n${
      client.guilds.cache.size
    }個のサーバーに参加中。`;

    client.user.setActivity({
      type: "PLAYING",
      name: statusMessage,
      //name: `/help,r.help ❘ Develop by @rui06060`,
      //name: `メンテナンス中 ❘ develop by @RUI`,
    });

    startMeasure = endMeasure;
  };

  try {
    setInterval(updateStats, 5000);
  } catch (erorr) {
    console.error(error);
  }
  const embed = new MessageEmbed()
    .setTitle("BOT ONLINE ログ")
    .setDescription(
      ">>> ```diff\nBOTが起動されました　　　　　``````diff\n+ BOT導入サーバー数:" +
        client.guilds.cache.size +
        "\n+ ユーザー数:" +
        client.users.cache.size +
        "```" +
        moment().format("YYYY-MM-DD HH:mm:ss")
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM");
  client.channels.cache.get("1209002367886827520").send({ embeds: [embed] });
  client.channels.cache.get("1234858897248878654").send({ embeds: [embed] });
  client.guilds.cache.size;
  client.user.setStatus("online");
});
client.on("debug", console.log).on("warn", console.log);

process.on("uncaughtException", (error) => {
  console.error("未処理の例外:", error);
  fs.appendFileSync("error.log", `未処理の例外: ${error.stack}\n`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("未処理の拒否:", reason);
  fs.appendFileSync("error.log", `未処理の拒否: ${reason}\n`);
});

//ここから
const { createCanvas, loadImage } = require("canvas");

client.on("messageCreate", async (message) => {
  try {
    if (message.type === "REPLY" && !message.reference?.messageId) {
      return;
    }
    if (
      !message.content.startsWith(`<@!${client.user.id}>`) &&
      !message.content.startsWith(`<@${client.user.id}>`)
    ) {
      return;
    }

    let replyMessage;
    if (message.type === "REPLY") {
      try {
        replyMessage = await message.fetchReference();
      } catch (error) {
        console.error("Failed to fetch the reference message:", error);
        return;
      }
    }
    if (!replyMessage) {
      return;
    }

    const user = replyMessage.author;
    const text = replyMessage.content;

    const member = message.guild.members.cache.get(user.id);
    const payload = {
      username: user.username,
      display_name: member ? member.displayName : user.username,
      text: text,
      avatar: user.displayAvatarURL({ format: "png" }),
      color: true,
    };

    try {
      const response = await axios.post("https://api.voids.top/quote", payload);
      const quote = response.data;

      const imageUrl = quote.url;
      const canvas = createCanvas(1200, 630);
      const ctx = canvas.getContext("2d");

      const image = await loadImage(imageUrl);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      ctx.font = "14px Noto";
      ctx.fillStyle = "rgb(114,114,114)";
      ctx.textAlign = "center";
      ctx.fillText(
        `@${client.user.tag}`,
        canvas.width - 85,
        canvas.height - 10
      );
      ctx.fillStyle = "#ffffff";

      const outputPath = path.join(__dirname, "output.png");
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(outputPath, buffer);

      const reply = await message.reply({ files: [outputPath] });

      fs.unlinkSync(outputPath);

      const deleteButton = new MessageButton()
        .setLabel("🗑削除する")
        .setStyle("DANGER")
        .setCustomId("delete_image");
      const actionRow = new MessageActionRow().addComponents(deleteButton);
      reply.edit({ components: [actionRow] });

      const filter = (interaction) =>
        interaction.customId === "delete_image" &&
        interaction.user.id === message.author.id;
      const collector = reply.createMessageComponentCollector({
        filter,
        time: 60000,
      });
      collector.on("collect", async (interaction) => {
        await reply.delete();
        const deletedEmbed = new MessageEmbed()
          .setColor("#ff0000")
          .setTitle("🗑Delete")
          .setDescription(
            `${interaction.user} がメッセージを削除しました。メッセージはメッセージ製作者のみ削除できるようになっています。`
          );
        message.reply({ embeds: [deletedEmbed] });
      });
      collector.on("end", async () => {
        if (!reply.deleted) {
          reply.edit({ components: [] });
        }
      });
    } catch (error) {
      console.error("Error creating quote:", error);
      await message.reply({
        content: "Failed to create quote.",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

//スラッシュコマンド
client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "メッセージリンク展開-on",
      description: "メッセージリンクの展開をONにします",
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "メッセージリンク展開-on") {
      const guildId = interaction.guildId;
      if (!guildId) {
        return interaction.reply({
          content: "このコマンドはサーバー内で実行してください。",
          ephemeral: true,
        });
      }

      try {
        fs.appendFileSync("messagelink.txt", `${guildId}\n`);
        interaction.reply({
          content: "メッセージリンクの展開をONにしました。",
          ephemeral: true,
        });
      } catch (error) {
        console.error("Error saving guild ID:", error);
        interaction.reply({
          content: "サーバーIDの保存中にエラーが発生しました。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (!message.guild) return;

    let guildIds = [];
    if (fs.existsSync("messagelink.txt")) {
      guildIds = fs.readFileSync("messagelink.txt", "utf8").trim().split("\n");
    }

    if (!guildIds.includes(message.guild.id)) return;

    if (
      message.content.includes("https://discord.com/channels/") ||
      message.content.includes("https://discordapp.com/channels/")
    ) {
      const messageLinkRegex =
        /https:\/\/discord(?:app)?\.com\/channels\/(\d{17,19})\/(\d{17,19})\/(\d{17,19})/;
      const matches = message.content.match(messageLinkRegex);
      if (matches && matches.length === 4) {
        const [, guildId, channelId, messageId] = matches;

        try {
          const guild = await client.guilds.fetch(guildId);
          const channel = guild.channels.cache.get(channelId);
          const targetMessage = await channel.messages.fetch(messageId);

          if (targetMessage.embeds.length > 0) {
            const embed2 = targetMessage.embeds[0];
            const embed1 = new MessageEmbed()
              .setAuthor(
                targetMessage.author.tag,
                targetMessage.author.avatarURL()
              )
              .setDescription(
                `[メッセージリンク](${targetMessage.url})\n埋め込みメッセージ`
              )
              .addField("サーバー", guild.name, true)
              .addField("チャンネル", `<#${channel.id}>`, true)
              .setColor("BLUE")
              .setTimestamp(targetMessage.createdAt);
            message.reply({ embeds: [embed1, embed2] });
          } else if (targetMessage.attachments.size > 0) {
            const attachment = targetMessage.attachments.first();
            const embed = new MessageEmbed()
              .setAuthor(
                targetMessage.author.tag,
                targetMessage.author.avatarURL()
              )
              .setDescription(
                `[メッセージリンク](${targetMessage.url})\n添付画像`
              )
              .addField("サーバー", guild.name, true)
              .addField("チャンネル", `<#${channel.id}>`, true)
              .setColor("BLUE")
              .setTimestamp(targetMessage.createdAt);
            message.reply({
              embeds: [embed],
              files: [attachment.url],
            });
          } else {
            const embed = new MessageEmbed()
              .setAuthor(
                targetMessage.author.tag,
                targetMessage.author.avatarURL()
              )
              .setDescription(
                `[メッセージリンク](${targetMessage.url})\n${targetMessage.content}`
              )
              .addField("サーバー", guild.name, true)
              .addField("チャンネル", `<#${channel.id}>`, true)
              .setColor("BLUE")
              .setTimestamp(targetMessage.createdAt);
            message.reply({ embeds: [embed] });
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "アップデート通知",
      description: "Developer専用",
      options: [
        {
          name: "content",
          type: "STRING",
          description: "アップデート内容",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options, user } = interaction;
    const allowedUserId = "1178414826184265819";
    if (commandName === "アップデート通知") {
      if (user.id !== allowedUserId) {
        return interaction.reply({
          content: "このコマンドは許可されたユーザーのみが実行できます。",
          ephemeral: true,
        });
      }
      const content = options.getString("content");
      const updateEmbed = new MessageEmbed()
        .setTitle("アプリケーションアップデート通知")
        .setDescription(`${content}`)
        .setColor("RANDOM")
        .setTimestamp();

      try {
        const channelIds = fs
          .readFileSync("updatechannel.txt", "utf8")
          .trim()
          .split("\n");
        if (channelIds.length === 0)
          throw new Error("No channel IDs found in updatechannel.txt.");

        for (const id of channelIds) {
          try {
            const channel = await client.channels.fetch(id.trim());
            if (channel && channel.isText()) {
              await channel.send({ embeds: [updateEmbed] });
            }
          } catch (error) {
            console.error("Error sending update to channel:", error);
          }
        }

        interaction.reply("アップデート通知を送信しました。");
      } catch (error) {
        console.error("Error reading channel IDs:", error);
        interaction.reply("チャンネルIDが見つかりませんでした。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "禁止ワード",
      description: "禁止ワードを登録します",
      options: [
        {
          name: "banword",
          type: "STRING",
          description: "禁止ワードを入力",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

const wordFilePath = "word.txt";

let bannedWordsMap = {};

const saveBannedWordsToFile = () => {
  fs.writeFileSync(
    wordFilePath,
    JSON.stringify(Object.entries(bannedWordsMap))
  );
};

if (!fs.existsSync(wordFilePath)) {
  fs.writeFileSync(wordFilePath, "[]");
} else {
  const fileContent = fs.readFileSync(wordFilePath, "utf-8");
  if (fileContent) {
    try {
      const entries = JSON.parse(fileContent);
      bannedWordsMap = Object.fromEntries(entries);
    } catch (error) {
      console.error("Error parsing banned words from file:", error);
    }
  }
}

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "禁止ワード") {
      const guildId = interaction.guild.id;
      const newBannedWord = interaction.options.getString("banword");
      if (!interaction.member.permissions.has("ADMINISTRATOR"))
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      if (!bannedWordsMap[guildId]) {
        bannedWordsMap[guildId] = {};
      }

      bannedWordsMap[guildId][newBannedWord] = true;
      saveBannedWordsToFile();

      const embed = new MessageEmbed()
        .setTitle("success")
        .setDescription(`${newBannedWord}を禁止ワードに設定しました。`);

      interaction.reply({
        embeds: [embed],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

const timeouttime = 10 * 60 * 1000; // 10分
const timeoutreason = "禁止ワードの送信";

client.on("messageCreate", async (message) => {
  if (!message.authodeaxbot) {
    await checkAndTimeout(message);
  }
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (!newMessage.authodeaxbot) {
    await checkAndTimeout(newMessage);
  }
});

async function checkAndTimeout(message) {
  try {
    const member = message.member;
    const guildId = message.guild.id;
    const contentLower = message.content.toLowerCase();

    if (allowedUserId.includes(message.author.id)) {
      return;
    }

    if (message.content.toLowerCase().startsWith("a.banword")) {
      return; // a.banword コマンドのメッセージは無視する
    }

    if (bannedWordsMap[guildId]) {
      const bannedWordsForGuild = Object.keys(bannedWordsMap[guildId]);
      if (bannedWordsForGuild.some((word) => contentLower.includes(word))) {
        try {
          // 10分のタイムアウト
          await member.timeout(timeouttime, timeoutreason);

          setTimeout(async () => {
            await message.delete();
          }, 1000);

          // 通知等の処理を追加する場合はここに追記
          const timeout = new MessageEmbed()
            .setTitle(`禁止ワード`)
            .setDescription(
              `送信したメッセージに禁止ワードが含まれていたため、10分間のタイムアウトを有効にしました`
            )
            .setColor("RED")
            .setTimestamp();

          const replyMessage = await message.reply({ embeds: [timeout] });

          setTimeout(async () => {
            try {
              await replyMessage.delete();
            } catch (error) {
              console.error("Error deleting message:", error);
            }
          }, 10000);
        } catch (error) {
          console.log(`管理者であるためメッセージの送信が許可されています`);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "指定メッセージ削除",
      description: "指定されたメッセージを全て削除します",
      options: [
        {
          name: "content",
          type: "STRING",
          description: "メッセージ内容を入力",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "指定メッセージ削除") {
      const content = interaction.options.getString("content");
      const embed = new MessageEmbed()
        .setTitle("メッセージ削除")
        .setDescription(`下記のメッセージ内容を全て削除します`)
        .addField(`メッセージ内容:`, `${content}`)
        .setColor("RANDOM")
        .setTimestamp();
      await interaction.reply({ embeds: [embed] });

      const guild = interaction.guild;

      // サーバー内の全てのチャンネルを取得
      const channels = guild.channels.cache.filter((channel) =>
        channel.isText()
      );

      for (const [channelId, channel] of channels) {
        // チャンネル内のメッセージを取得
        let fetchedMessages;
        try {
          fetchedMessages = await channel.messages.fetch();
        } catch (error) {
          console.error(
            `Failed to fetch messages in channel ${channel.name}:`,
            error
          );
          continue;
        }

        // 一致するメッセージを削除
        const messagesToDelete = fetchedMessages.filter(
          (msg) => msg.content === content
        );
        for (const msg of messagesToDelete.values()) {
          try {
            await msg.delete();
            console.log(
              `Deleted message: "${msg.content}" in channel ${channel.name}`
            );
          } catch (error) {
            console.error(
              `Failed to delete message in channel ${channel.name}:`,
              error
            );
          }
        }
      }

      await interaction.followUp(`メッセージの削除が完了しました`);
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "5000兆円欲しい",
      description: "5000兆円ジェネレーター",
      options: [
        {
          name: "top",
          type: "STRING",
          description: "上部の文字を指定",
        },
        {
          name: "bottom",
          type: "STRING",
          description: "下部の文字を指定",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "5000兆円欲しい") {
      const top = interaction.options.getString("top") || "5000兆円";
      const bottom = interaction.options.getString("bottom") || "欲しい！";
      await interaction.deferReply();
      try {
        const image = await fetch(
          `https://gsapi.cbrx.io/image?top=${top}&bottom=${bottom}&type=png`
        ).then((res) => res.blob());

        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "SUCCESS",
              },
              image: {
                url: "attachment://5000.png",
              },
            },
          ],
          files: [
            new MessageAttachment().setFile(image.stream()).setName("5000.png"),
          ],
        });
      } catch (error) {
        console.error(error); // エラーをコンソールに出力

        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "ERROR",
              },
              description: "もう一度やり直してください",
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "アンケート",
      description: "アンケートを作成します",
      options: [
        {
          name: "title",
          type: "STRING",
          description: "タイトルを入力",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "アンケート") {
      if (!interaction.member.permissions.has("ADMINISTRATOR"))
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      const title = interaction.options.getString("title");

      const enquete = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel("回答する")
          .setCustomId("enquete")
          .setStyle("SECONDARY")
      );

      await interaction.reply({
        embeds: [
          {
            color: "RANDOM",
            title: title,
            timestamp: new Date(),
          },
        ],
        components: [enquete],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    if (interaction.customId === "enquete") {
      if (!interaction.message.embeds[0])
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "回答を追加出来ませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "パネルが存在しません",
            },
          ],
          ephemeral: true,
        });

      const enquete = new Modal()
        .setCustomId(`enquetesend_${interaction.message.id}`)
        .setTitle(interaction.message.embeds[0].title)
        .addComponents(
          new TextInputComponent()
            .setCustomId("text")
            .setLabel("回答")
            .setMaxLength(50)
            .setStyle("SHORT")
            .setRequired(true)
        );

      showModal(enquete, {
        client: client,
        interaction: interaction,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("modalSubmit", async (interaction) => {
  try {
    console.log(interaction.customId);
    const fetchMessage = require("./fetchMessage.js");
    if (interaction.customId.startsWith("enquetesend_")) {
      const data = interaction.customId.split("_");

      const [text] = ["text"].map((id) => interaction.getTextInputValue(id));

      const message = await fetchMessage(interaction.channel, data[1]);
      if (!message)
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "回答を追加出来ませんでした",
              },
              description: "Botの権限を確認してやり直してください",
            },
          ],
          ephemeral: true,
        });

      if (!message.embeds[0])
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "回答を追加出来ませんでした",
              },
              description: "埋め込みが存在しません",
            },
          ],
          ephemeral: true,
        });

      try {
        const edit = new MessageActionRow().addComponents(
          new MessageButton()
            .setLabel("回答する")
            .setCustomId("enquete")
            .setStyle("SECONDARY")
        );

        await message.edit({
          embeds: [
            {
              color: "RANDOM",
              title: message.embeds[0].title,
              description: `${
                message.embeds[0].description || ""
              }\n▷${text} - ${interaction.user.tag}`,
              timestamp: new Date(),
            },
          ],
          components: [edit],
        });

        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "回答を送信しました",
              },
            },
          ],
          ephemeral: true,
        });
      } catch (error) {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "回答出来ませんでした",
              },
              description: "BOTの権限が不足しています",
              fields: [
                {
                  name: "エラーコード",
                  value: `\`\`\`${error}\`\`\``,
                },
              ],
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "おみくじ",
      description: "おみくじを引きます",
      type: 1, // 1はCHAT_INPUT
    });
  } catch (error) {
    console.error(error);
  }
});

const fortunes = [
  "**大吉** - すごく良いことが起こります！",
  "**吉** - いいことが期待できます。",
  "**中吉** - 幸運があなたに微笑みます。",
  "**小吉** - まぁまぁの運勢です。",
  "**末吉** - 小さな幸せがあります。",
  "**凶** - 今日は慎重に行動しましょう。",
  "**大凶** - 避けたほうが良い日です。",
];

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "おみくじ") {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const fortuneResult = fortunes[randomIndex];

      const embed = new MessageEmbed()
        .setColor("#FFD700")
        .setTitle("おみくじの結果")
        .setDescription(fortuneResult)
        .setThumbnail(
          "https://cdn.glitch.global/574f2dc5-bd46-4027-ab0b-5c6ac1fe6376/omikuji_shake.gif?v=1706979073329"
        );

      await interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "チャンネル情報",
      description: "指定されたチャンネルの情報を表示します。",
      options: [
        {
          name: "チャンネル",
          description: "情報を表示するチャンネル",
          type: 7,
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "チャンネル情報") {
      const options = interaction.options;
      const channelOption = options.getChannel("チャンネル");

      if (!channelOption) {
        return interaction.reply({
          content: "チャンネルが指定されていません。",
          ephemeral: true,
        });
      }

      const targetChannel = interaction.guild.channels.cache.get(
        channelOption.id
      );

      if (!targetChannel) {
        return interaction.reply({
          content: "指定されたチャンネルが見つかりません。",
          ephemeral: true,
        });
      }

      const channelTypes = {
        GUILD_TEXT: "テキストチャンネル",
        GUILD_VOICE: "ボイスチャンネル",
        GUILD_CATEGORY: "カテゴリチャンネル",
      };

      // チャンネルの情報を埋め込みで表示
      const channelInfoEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${targetChannel.name} の情報`)
        .addField("チャンネル名", targetChannel.name, true)
        .addField("チャンネルタグ", `<#${targetChannel.id}>`, true)
        .addField("ID", targetChannel.id, true)
        .addField(
          "チャンネルタイプ",
          channelTypes[targetChannel.type] || "不明なチャンネルタイプ",
          true
        )
        .addField(
          "作成日時",
          `${targetChannel.createdAt.toLocaleDateString(
            "ja-JP"
          )} ${targetChannel.createdAt.toLocaleTimeString()}`,
          true
        )
        .addField("NSFW", targetChannel.nsfw ? "はい" : "いいえ", true);

      if (
        targetChannel.type === "GUILD_TEXT" ||
        targetChannel.type === "GUILD_NEWS"
      ) {
        channelInfoEmbed.addField(
          "チャンネルトピック",
          targetChannel.topic || "```なし```"
        );
      }

      interaction.reply({ embeds: [channelInfoEmbed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "マインクラフト",
      description: "マインクラフトサーバーの情報を表示します",
      options: [
        {
          name: "edition",
          type: "STRING",
          description: "バージョンを選択",
          choices: [
            { name: "Java版", value: "je" },
            { name: "統合版", value: "de" },
          ],
          required: true,
        },
        {
          name: "ip",
          type: "STRING",
          description: "サーバーアドレスを指定",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "マインクラフト") {
      const ip = interaction.options.getString("ip");
      const edition = interaction.options.getString("edition");

      await interaction.deferReply();
      try {
        if (edition === "je") {
          const server = await fetch(
            `https://api.mcsrvstat.us/2/${encodeURIComponent(ip)}`
          ).then((res) => res.json());

          if (!server.debug.ping && !server.online)
            return await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  author: {
                    name: "取得できませんでした",
                    icon_url: "https://cdn.taka.cf/images/system/error.png",
                  },
                  description: "無効なホスト名です",
                },
              ],
            });

          if (server.online) {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  title: ip,
                  url: `https://mcsrvstat.us/server/${ip}`,
                  thumbnail: {
                    url: `https://api.mcsrvstat.us/icon/${ip}`,
                  },
                  description: "🟢 オンライン",
                  fields: [
                    {
                      name: "MOTD",
                      value: `\`\`\`${
                        server.motd ? server.motd.clean.join("\n") : "なし"
                      }\`\`\``,
                      inline: true,
                    },
                    {
                      name: "プレイヤー",
                      value: `${server.players.online}/${server.players.max}`,
                      inline: true,
                    },
                    {
                      name: "バージョン",
                      value: server.version,
                      inline: true,
                    },
                    {
                      name: "IPアドレス",
                      value: `${server.ip}:${server.port}`,
                      inline: true,
                    },
                  ],
                  timestamp: new Date(),
                },
              ],
            });
          } else {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  title: ip,
                  url: `https://mcsrvstat.us/server/${ip}`,
                  thumbnail: {
                    url: `https://api.mcsrvstat.us/icon/${ip}`,
                  },
                  description: "🔴 オフライン",
                  timestamp: new Date(),
                },
              ],
            });
          }
        } else {
          const server = await fetch(
            `https://api.mcsrvstat.us/bedrock/2/${encodeURIComponent(ip)}`
          ).then((res) => res.json());

          if (!server.debug.ping && !server.online)
            return await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  author: {
                    name: "取得できませんでした",
                    icon_url: "https://cdn.taka.cf/images/system/error.png",
                  },
                  description: "無効なホスト名です",
                },
              ],
            });

          if (server.online) {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  title: ip,
                  url: `https://mcsrvstat.us/bedrock/${ip}`,
                  thumbnail: {
                    url: `https://api.mcsrvstat.us/icon/${ip}`,
                  },
                  description: "🟢 オンライン",
                  fields: [
                    {
                      name: "MOTD",
                      value: `\`\`\`${
                        server.motd ? server.motd.clean.join("\n") : "なし"
                      }\`\`\``,
                      inline: true,
                    },
                    {
                      name: "プレイヤー",
                      value: `${server.players.online}/${server.players.max}`,
                      inline: true,
                    },
                    {
                      name: "バージョン",
                      value: server.version,
                      inline: true,
                    },
                    {
                      name: "IPアドレス",
                      value: `${server.ip}:${server.port}`,
                      inline: true,
                    },
                    {
                      name: "ソフトウェア",
                      value: server.software,
                      inline: true,
                    },
                  ],
                  timestamp: new Date(),
                },
              ],
            });
          } else {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  title: ip,
                  url: `https://mcsrvstat.us/server/${ip}`,
                  thumbnail: {
                    url: `https://api.mcsrvstat.us/icon/${ip}`,
                  },
                  description: "🔴 オフライン",
                  timestamp: new Date(),
                },
              ],
            });
          }
        }
      } catch (error) {
        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "指定したアドレスが間違っている可能性があります",
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "メッセージをピン留め",
      description: "指定されたメッセージをピン留めします。",
      options: [
        {
          name: "messagetype",
          type: "STRING",
          description:
            "メッセージを作成するかキャンセルするかを選択してください。",
          required: true,
          choices: [
            { name: "メッセージを作成する", value: "makemessage" },
            { name: "メッセージをキャンセルする", value: "cancelmessage" },
          ],
        },
        {
          name: "target_message",
          type: "STRING",
          description: "ピン留めするメッセージのリンクを指定してください。",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

let pinnedMessage = null;
let pinnedMessageContent = "ピン留めするメッセージがありません";

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "メッセージをピン留め") {
      if (!interaction.member.permissions.has("ADMINISTRATOR"))
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      const choice = options.getString("messagetype");
      const content = options.getString("target_message");

      if (choice === "makemessage") {
        if (pinnedMessage) {
          await pinnedMessage.delete();
        }

        const embed = new MessageEmbed()
          .setTitle("ピン留めされたメッセージ")
          .setDescription(pinnedMessageContent)
          .setColor("#3498db");

        if (content) {
          pinnedMessageContent = content;
          embed.setDescription(content);
        }

        pinnedMessage = await interaction.channel.send({ embeds: [embed] });
        await interaction.reply("ピン留めされたメッセージを作成しました.");
      } else if (choice === "cancelmessage") {
        if (pinnedMessage) {
          await pinnedMessage.delete();
          pinnedMessage = null;
          await interaction.reply("ピン留め機能をキャンセルしました.");
        } else {
          await interaction.reply(
            "ピン留めされたメッセージが見つかりませんでした."
          );
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (pinnedMessage && message.content) {
      await pinnedMessage.delete();
      const embed = new MessageEmbed()
        .setTitle("ピン留めされたメッセージ")
        .setDescription(pinnedMessageContent)
        .setColor("#3498db");
      pinnedMessage = await message.channel.send({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "低速モード設定",
      description: "指定されたチャンネルに低速モードを設定します。",
      options: [
        {
          name: "チャンネル",
          description: "低速モードを設定するチャンネル",
          type: 7,
          required: true,
        },
        {
          name: "時間",
          description: "低速モードの時間（秒）",
          type: 4,
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "低速モード設定") {
      if (!interaction.member.permissions.has("ADMINISTRATOR"))
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      const channelOption = interaction.options.getChannel("チャンネル");
      const durationOption = interaction.options.getInteger("時間");

      if (!channelOption || !durationOption) {
        return interaction.reply({
          content: "オプションが不足しています。",
          ephemeral: true,
        });
      }

      const targetChannel = interaction.guild.channels.cache.get(
        channelOption.id
      );

      if (!targetChannel) {
        return interaction.reply({
          content: "指定されたチャンネルが見つかりません。",
          ephemeral: true,
        });
      }

      // メンバーが必要な権限を持っているか確認
      const member = interaction.guild.members.cache.get(interaction.user.id);
      if (
        !member
          .permissionsIn(targetChannel)
          .has(Permissions.FLAGS.MANAGE_CHANNELS)
      ) {
        return interaction.reply({
          content: "指定されたチャンネルの管理権限がありません。",
          ephemeral: true,
        });
      }

      const successembed = {
        color: "RANDOM",
        title: "SUCCESS",
        description: `${targetChannel}の低速モードが${durationOption}秒に設定されました。`,
      };

      // 低速モードを設定
      try {
        await targetChannel.setRateLimitPerUser(durationOption);
        interaction.reply({ embeds: [successembed] });
      } catch (error) {
        console.error(error);
        interaction.reply({
          content: "エラーが発生しました。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "自動応答-on",
      description: "BOTの自動応答をONにします",
    });
  } catch (error) {
    console.error(error);
  }
});

const channelFile = "channel.txt";
let allowedGuilds = [];

try {
  const data = fs.readFileSync(channelFile, "utf8");
  allowedGuilds = data.split("\n").filter(Boolean);
} catch (error) {
  console.error("Error reading file:", error);
}

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "自動応答-on") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      }

      saveInteractionGuildId(interaction.guild.id);

      const embed = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription("自動応答がONになりました")
        .setColor("RANDOM")
        .setTimestamp();

      interaction.reply({
        embeds: [embed],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

function saveInteractionGuildId(guildId) {
  try {
    if (!allowedGuilds.includes(guildId)) {
      allowedGuilds.push(guildId);
      fs.writeFileSync(channelFile, allowedGuilds.join("\n"));

      console.log(`Guild ID ${guildId} has been saved.`);
    }
  } catch (e) {
    console.log(e);
  }
}

function removeInteractionGuildId(guildId) {
  try {
    const index = allowedGuilds.indexOf(guildId);
    if (index !== -1) {
      allowedGuilds.splice(index, 1);
      fs.writeFileSync(channelFile, allowedGuilds.join("\n"));

      console.log(`Guild ID ${guildId} has been removed.`);
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("messageCreate", (message) => {
  try {
    if (message.authodeaxbot || !allowedGuilds.includes(message.guild.id)) {
      return;
    }

    const msg = message.content.toLowerCase();

    if (["よろ"].some((s) => msg.includes(s))) {
      handleGreetings(message);
    } else if (["おはよ"].some((s) => msg.includes(s))) {
      handleGreetings(message);
    } else if (["おやす"].some((s) => msg.includes(s))) {
      handleGreetings(message);
    }
  } catch (e) {
    console.log(e);
  }
});

function handleGreetings(message) {
  try {
    const msg = message.content.toLowerCase();

    if (["よろ"].some((s) => msg.includes(s))) {
      message.channel.send(
        oneOf(
          "よろしく！入ってくれてありがとう！楽しんで！",
          "よろしくね",
          "よろ～",
          "よろしく！",
          "よろしくお願いします！ｷｬ━━━━(ﾟ∀ﾟ)━━━━!!"
        )
      );
    } else if (["おはよ"].some((s) => msg.includes(s))) {
      message.channel.send(
        oneOf(
          "おはようございます！",
          "おはよ～",
          "おはよう！",
          "Goodmorning!!",
          "おはよう！！今日も一日頑張ろう！",
          "おはよう！お前はよ起きろ！！"
        )
      );
    } else if (["おやす"].some((s) => msg.includes(s))) {
      message.channel.send(
        oneOf(
          "おやすみ！いい夢見てね😊💭💗はよ寝ろ！！",
          "おやすみ～",
          "おやすみなさい！！",
          "Goodnight!!",
          "(つ∀-)ｵﾔｽﾐｰ",
          "(^o^)ﾉ ＜ おやすみー"
        )
      );
    }
  } catch (e) {
    console.log(e);
  }
}

function oneOf(fst, ...rest) {
  try {
    const xs = [fst, ...rest];
    const i = Math.floor(Math.random() * xs.length);
    return xs[i];
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    const command = await client.application.commands.create({
      name: "addrole",
      description: "指定したユーザーに指定したロールを付与します",
      options: [
        {
          name: "user",
          description: "ロールを付与するユーザーを指定してください",
          type: "USER",
          required: true,
        },
        {
          name: "role",
          description: "ユーザーの付与するロールを指定してください",
          type: "ROLE",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "addrole")
      return;
    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます。",
        ephemeral: true,
      });
    }

    const userOption = interaction.options.getUser("user");
    const roleOption = interaction.options.getRole("role");

    if (!userOption || !roleOption) {
      return interaction.reply({
        content: "Please specify a user and a role.",
        ephemeral: true,
      });
    }

    const guild = interaction.guild;
    const member = guild.members.cache.get(userOption.id);

    if (!member) {
      return interaction.reply({ content: "User not found.", ephemeral: true });
    }

    try {
      if (member.roles.cache.has(roleOption.id)) {
        const roleMention = `<@&${roleOption.id}>`;
        const userMention = `<@${userOption.id}>`;

        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Error")
          .setDescription(
            `${roleMention} は既に ${userMention}に付与されています`
          );

        return interaction.reply({ embeds: [embed], ephemeral: true });
      }

      await member.roles.add(roleOption);

      const roleMention = `<@&${roleOption.id}>`;
      const userMention = `<@${userOption.id}>`;

      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Success")
        .setDescription(`${roleMention} が ${userMention}に付与されました`);

      interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      interaction.reply({
        content: "An error occurred while adding the role.",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "anti-spam",
      description: "連投スパム対策機能",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "anti-spam") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const serverId = interaction.guild.id;
      saveServerId(serverId);
      const embed1 = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(
          `サーバーID ${serverId} がスパム監視リストに追加されました。`
        )
        .setColor("RED")
        .setTimestamp();
      interaction.reply({ embeds: [embed1], ephemeral: true });
    } else if (interaction.commandName === "unanti-spam") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const serverId = interaction.guild.id;
      const serverIds = loadServerIds();
      const embed2 = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(
          `サーバーID ${serverId} がスパム監視リストから削除されました。`
        )
        .setColor("RED")
        .setTimestamp();
      if (serverIds.includes(serverId)) {
        removeServerId(serverId);
        interaction.reply({ embeds: [embed2], ephemeral: true });
      } else {
        const embed = new MessageEmbed()
          .setColor("#FF0000")
          .setTitle("エラー")
          .setDescription(
            `サーバーID ${serverId} はスパム監視リストに存在しません。`
          );
        interaction.channel.send({ embeds: [embed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "avatar",
      description: "ユーザーのアバターを表示します。",
      options: [
        {
          name: "user",
          type: "USER",
          description: "アバターを表示するユーザー",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "avatar")
      return;

    const user = interaction.options.getUser("user") || interaction.user;
    const member = await interaction.guild.members.fetch(user.id);
    const serverAvatar = member.avatar
      ? member.displayAvatarURL({ size: 2048, dynamic: true })
      : null;

    const embed = new MessageEmbed()
      .setTitle("ユーザーアバター")
      .setDescription(`${user}のアバター`)
      .setColor("RANDOM")
      .setImage(user.displayAvatarURL({ size: 2048, dynamic: true }));

    if (serverAvatar) {
      const sembed = new MessageEmbed()
        .setTitle("サーバーアバター")
        .setDescription(`${user}のサーバーアバター`)
        .setColor("RANDOM")
        .setImage(serverAvatar);

      interaction.channel.send({ embeds: [sembed] });
    }

    interaction.reply({ embeds: [embed] });
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "ban",
      description: "指定されたユーザーをBANします。",
      options: [
        {
          name: "user",
          type: "USER",
          description: "BANしたいユーザーを選択してください。",
          required: true,
        },
        {
          name: "reason",
          type: "STRING",
          description: "BANの理由を入力してください。",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "ban") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = interaction.options.getMember("user");
      const reason =
        interaction.options.getString("reason") || "理由はありません。";

      try {
        await interaction.guild.members.ban(user, { reason });

        const bannedBy = interaction.member.toString();
        const bannedUser = user.toString();

        const embed = new MessageEmbed()
          .setTimestamp()
          .setTitle("BAN")
          .setDescription(`${bannedUser}をBANしました`)
          .addField(`理由:`, `${reason}`)
          .setColor("RED")
          .setAuthor(
            `実行者:${interaction.user.tag}`,
            interaction.user.displayAvatarURL()
          )
          .setThumbnail(user.user.displayAvatarURL({ dynamic: true }));

        interaction.reply({ embeds: [embed] });
      } catch (error) {
        console.error(error);
        interaction.reply({
          content: "BANに失敗しました。管理者にお問い合わせください。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "banlist",
      description: "BANされたユーザーを表示させます",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "banlist") {
      try {
        const bans = await interaction.guild.bans.fetch();

        if (bans.size === 0) {
          interaction.reply("BANされたメンバーはいません。");
          return;
        }

        const banListEmbed = {
          color: "RED",
          title: "BANリスト",
          description: bans.map((ban) => `<@${ban.user.id}>`).join("\n"),
        };

        interaction.reply({ embeds: [banListEmbed], ephemeral: true });
      } catch (error) {
        console.error(error);
        interaction.reply("エラーが発生しました。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "bot退出",
      description: "BOTをサーバーから退出させます ※Developer専用※",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

const allowedUserId = "1178414826184265819";

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "bot退出") {
      try {
        // コマンドを実行したユーザーのIDを取得
        const userId = interaction.user.id;

        // 特定のユーザーであるかを確認
        if (userId === allowedUserId) {
          // コマンドを実行したサーバーからボットを退出
          await interaction.reply("サーバーから退出しました。");
          await interaction.guild.leave();
        } else {
          // 特定のユーザーでない場合はエラーメッセージを返すなどの処理
          await interaction.reply("このコマンドは許可されていません。");
        }
      } catch (error) {
        console.error(error);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "botinfo",
      description: "BOTの情報を表示させます 招待リンク付",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const botinvite = `https://discord.com/api/oauth2/authorize?client_id=1186678650565820508&permissions=8&scope=bot+applications.commands`;

    if (interaction.commandName === "botinfo") {
      const botInfoEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${client.user.username}の情報`)
        .addField("名前", client.user.tag, true)
        .addField("メンション", `<@${client.user.id}>`, true)
        .addField("ID", client.user.id, true)
        .addField("Discord.js バージョン", discordVersion, true)
        .addField("サーバー数", `${client.guilds.cache.size}`, true)
        .addField("ユーザー数", `${client.users.cache.size}`, true)
        .addField("招待リンク", `[こちら](${botinvite})`)
        .addField("ping", `${client.ws.ping}`)
        .setThumbnail(client.user.displayAvatarURL());

      interaction.reply({
        embeds: [botInfoEmbed],
        components: [
          {
            type: "ACTION_ROW",
            components: [
              {
                type: "BUTTON",
                style: "LINK",
                label: "BOTを招待する",
                url: botinvite,
              },
            ],
          },
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "bot-update-channel",
      description: "BOTアップデートを受け取るチャンネルを指定",
      options: [
        {
          name: "updatechannel",
          type: "CHANNEL",
          description: "アップデート通知を受け取るチャンネルを指定",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "bot-update-channel") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const updateChannelId =
        interaction.options.getChannel("updatechannel").id;
      if (!updateChannelId) return;

      fs.appendFileSync("updatechannel.txt", `${updateChannelId}\n`);

      await interaction.reply({
        content: `アップデート通知を受け取るチャンネルを設定しました。`,
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "bot-update-channel-delete",
      description:
        "アップデート通知チャンネルに登録されているチャンネルを削除します",
      options: [
        {
          name: "deletechannel",
          type: "CHANNEL",
          description: "削除するチャンネルを指定",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "bot-update-channel-delete") {
      const deleteChannel = options.getChannel("deletechannel");

      if (!deleteChannel) {
        return interaction.reply({
          content: "削除するチャンネルを指定してください。",
          ephemeral: true,
        });
      }

      try {
        const channelId = deleteChannel.id;
        const channelIds = fs
          .readFileSync("updatechannel.txt", "utf8")
          .trim()
          .split("\n");

        const index = channelIds.indexOf(channelId);
        if (index !== -1) {
          channelIds.splice(index, 1);
          fs.writeFileSync("updatechannel.txt", channelIds.join("\n"));
          interaction.reply({
            content: `チャンネル ${deleteChannel.name} の登録を削除しました。`,
            ephemeral: true,
          });
        } else {
          interaction.reply({
            content: `チャンネル ${deleteChannel.name} は登録されていません。`,
            ephemeral: true,
          });
        }
      } catch (error) {
        console.error("Error deleting channel ID:", error);
        interaction.reply({
          content: "チャンネルの削除中にエラーが発生しました。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "calculate",
      description: "電卓機能",
      options: [
        {
          name: "expression",
          description:
            "計算式を入力してください。(加算: 2 + 2,減算: 5 - 3,乗算: 4 * 6,除算: 10 / 2,剰余: 15 % 4)",
          type: "STRING",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

const math = require("mathjs");

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "calculate") {
      const expression = options.getString("expression");

      try {
        const result = math.evaluate(expression);
        interaction.reply(`計算結果: ${result}`);
      } catch (error) {
        interaction.reply({ content: `無効な形式です`, ephemeral: true });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "chat-log",
      description:
        "指定された数のメッセージを取得し、ファイルとして送信します。",
      options: [
        {
          name: "count",
          type: "INTEGER",
          description: "取得するメッセージの数",
          required: true,
        },
        {
          name: "file-format",
          type: "STRING",
          description: "ファイル形式",
          required: true,
          choices: [
            { name: "TXT", value: "txt" },
            { name: "JSON", value: "json" },
          ],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "chat-log") {
      const count = interaction.options.getInteger("count");
      const fileFormat = interaction.options.getString("file-format");

      if (count < 1 || count > 100) {
        return interaction.reply({
          content: "メッセージの数は1から100の間で指定してください。",
          ephemeral: true,
        });
      }

      const messages = await interaction.channel.messages.fetch({
        limit: count,
      });
      const formattedMessages = formatMessages(messages, fileFormat);

      const fileName = `CHATLOG-bydeaxbot.${fileFormat}`;
      const attachment = new MessageAttachment(
        Buffer.from(formattedMessages),
        fileName
      );

      await interaction.reply({ files: [attachment] });
    }
  } catch (e) {
    console.log(e);
  }
});

function formatMessages(messages, fileFormat) {
  try {
    if (fileFormat === "json") {
      return JSON.stringify(
        messages.map((message) => ({
          id: message.id,
          user: {
            id: message.author.id,
            name: message.author.username,
            bot: message.authodeaxbot,
          },
          content: message.content,
        })),
        null,
        2
      );
    } else if (fileFormat === "txt") {
      return messages
        .map((message) => `${message.author.tag}:\n${message.content}\n`)
        .join("\n");
    } else {
      return "Invalid file format specified.";
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "clear",
      description: "チャンネルのメッセージを削除します。",
      options: [
        {
          name: "count",
          type: "INTEGER",
          description: "削除するメッセージの数（1〜100）",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "clear") return;

    const count = interaction.options.getInteger("count");
    const channel = interaction.channel;

    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます",
        ephemeral: true,
      });
    }

    if (count < 1 || count > 100) {
      return interaction.reply({
        content: "削除するメッセージの数は1〜100の範囲で指定してください。",
        ephemeral: true,
      });
    }

    let messages = await channel.messages.fetch({ limit: count });
    let deleted = await channel.bulkDelete(messages, true);
    return interaction.reply({
      embeds: [
        {
          title: "clear",
          description: `<@${interaction.user.id}>がチャンネルログを削除しました。削除したメッセージ数: ${deleted.size}`,
        },
      ],
    });
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "countmessages",
      description: "チャンネル内のメッセージ数を出力します",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "countmessages") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const channel = interaction.channel;
      if (!channel) return;

      let messageCount = 0;
      let lastMessageId;

      do {
        const messages = await channel.messages.fetch({
          limit: 100,
          before: lastMessageId,
        });
        const currentBatchCount = messages.size;

        if (currentBatchCount > 0) {
          messageCount += currentBatchCount;
          lastMessageId = messages.last().id;
        } else {
          break; // メッセージがもうない場合は終了
        }
      } while (messageCount < 500); // 5000まで取得

      interaction.reply({
        embeds: [
          {
            title: "MESSAGE COUNT",
            description: `このチャンネル内のメッセージ数は${messageCount}です`,
          },
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "create-channel",
      description: "指定された名前のチャンネルを作成します",
      options: [
        {
          name: "name",
          type: "STRING",
          description: "作成するチャンネルの名前",
          required: true,
        },
        {
          name: "type",
          type: "STRING",
          description: "チャンネルのタイプを指定してください",
          required: true,
          choices: [
            { name: "カテゴリー", value: "CATEGORY" },
            { name: "テキストチャンネル", value: "TEXT" },
            { name: "ボイスチャンネル", value: "VOICE" },
            { name: "アナウンスチャンネル", value: "ANNOUNCE" },
            { name: "ステージチャンネル", value: "STAGE" },
          ],
        },
        {
          name: "category",
          type: "CHANNEL",
          description:
            "カテゴリーを選択します（選択しない場合はカテゴリーなし）",
          channel_types: [4],
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "create-channel") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const channelName = interaction.options.getString("name");
      const channelType = interaction.options.getString("type");
      const selectedCategory = interaction.options.getChannel("category");

      try {
        let newChannel;

        if (channelType === "CATEGORY") {
          newChannel = await interaction.guild.channels.create(channelName, {
            type: "GUILD_CATEGORY",
          });
          // カテゴリーチャンネルの場合、通常のチャンネルも作成
          await interaction.guild.channels.create("一般", {
            type: "GUILD_TEXT",
            parent: newChannel.id,
          });
        } else {
          const options = {
            type: channelType === "TEXT" ? "GUILD_TEXT" : "GUILD_VOICE",
            parent: selectedCategory ? selectedCategory.id : null,
          };

          newChannel = await interaction.guild.channels.create(
            channelName,
            options
          );
        }

        interaction.reply(
          `チャンネルまたはカテゴリー "${newChannel.name}" が作成されました。`
        );
      } catch (error) {
        console.error(error);
        interaction.reply(
          "チャンネルまたはカテゴリーの作成中にエラーが発生しました。"
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "channel-count",
      description: "指定されたカテゴリーのチャンネル数を表示します",
      options: [
        {
          type: "CHANNEL",
          name: "カテゴリ",
          description: "チャンネルをカウントするカテゴリーを選択",
          channel_types: [4],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "channel-count") {
      const category = options.getChannel("カテゴリ");

      if (category && category.type === "GUILD_CATEGORY") {
        const channelCount = category.children.size;

        const embed = new MessageEmbed()
          .setColor("#0099ff")
          .setTitle("チャンネル数")
          .setDescription(
            `カテゴリ「${category.name}」には ${channelCount} チャンネルがあります。`
          )
          .setTimestamp();

        await interaction.reply({ embeds: [embed] });
      } else {
        await interaction.reply("指定されたカテゴリが見つかりませんでした。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "create-role",
      description: "指定された名前のロールを作成します。",
      options: [
        {
          name: "name",
          type: "STRING",
          description: "作成するロールの名前",
          required: true,
        },
        {
          name: "color",
          type: "STRING",
          description: "ロールの色（16進数形式）",
          choices: [
            { name: "赤色", value: "E74C3C" },
            { name: "青色", value: "3498DB" },
            { name: "緑色", value: "2ECC71" },
            { name: "オレンジ色", value: "FF5733" },
            { name: "黒色", value: "0A0A0A" },
            { name: "白色", value: "F6F1F2" },
          ],
          required: false,
        },
        {
          name: "permissions",
          type: "STRING",
          description: "ロールの権限（数値形式）",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "create-role") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const roleName = interaction.options.getString("name");
      const roleColor = interaction.options.getString("color");
      const rawPermissions = interaction.options.getString("permissions");

      const guild = interaction.guild;

      const color = roleColor ? parseInt(roleColor.replace("#", ""), 16) : null;
      const permissions = rawPermissions
        ? rawPermissions.split(",").map((p) => BigInt(p.trim()))
        : [];

      try {
        const role = await interaction.guild.roles.create({
          name: roleName,
          color: color,
          permissions: permissions.reduce((sum, p) => sum | p, 0n),
        });

        const embed = new MessageEmbed()
          .setColor("GREEN")
          .setTitle("SUCCESS")
          .setDescription(`ロール: ${role.name}が作成されました`)
          .addField("メンション", `<@&${role.id}>`, true)
          .addField("ID", role.id, true)
          .addField(
            "色",
            color
              ? `#${color.toString(16).toUpperCase().padStart(6, "0")}`
              : "なし",
            true
          )
          .addField(
            "権限",
            permissions.length > 0 ? permissions.join(", ") : "なし",
            true
          );

        await interaction.reply({
          embeds: [embed],
          components: [
            newbutton([
              {
                id: `rolepm`,
                label: "ロールの権限コード一覧を表示",
                style: "SUCCESS",
              },
            ]),
          ],
        });
      } catch (error) {
        console.error(error);
        const embed = new MessageEmbed()
          .setColor("RED")
          .setDescription("ロールの作成中にエラーが発生しました。");
        await interaction.reply({ embeds: [embed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "deletechannel",
      description: "サーバーの全チャンネルを削除します",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "deletechannel") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const confirmationEmbed = new MessageEmbed()
        .setTitle("警告")
        .setDescription(
          "本当にサーバーの全チャンネルを削除しますか？この操作は取り消せません。"
        )
        .setColor("RED");

      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("confirm")
          .setLabel("確認")
          .setStyle("SUCCESS"),

        new MessageButton()
          .setCustomId("confirmcancel")
          .setLabel("キャンセル")
          .setStyle("DANGER")
      );

      const confirmationMessage = await interaction.reply({
        embeds: [confirmationEmbed],
        components: [row],
        fetchReply: true,
      });

      const filter = (buttonInteraction) => {
        buttonInteraction.deferUpdate();
        return (
          buttonInteraction.customId === "confirm" ||
          buttonInteraction.customId === "comfirmcancel"
        );
      };

      const collector = confirmationMessage.createMessageComponentCollector({
        filter,
        time: 15000,
      });

      collector.on("collect", async (buttonInteraction) => {
        if (buttonInteraction.customId === "confirm") {
          interaction.guild.channels.cache.forEach((channel) =>
            channel.delete()
          );
          interaction.followUp({
            content: "サーバーの全チャンネルを削除しました。",
          });
        } else {
          interaction.followUp({ content: "操作がキャンセルされました。" });
        }
        collector.stop();
      });

      collector.on("end", (collected, reason) => {
        if (reason === "time") {
          interaction.followUp({ content: "操作がタイムアウトしました。" });
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});

function newButton(buttons) {
  try {
    return [
      {
        type: 1,
        components: buttons.map((button) => ({
          type: 2,
          style:
            button.style === "SUCCESS" || button.style === "DANGER"
              ? button.style
              : 1,
          custom_id: button.id,
          label: button.label,
        })),
      },
    ];
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    const command = await client.application.commands.create({
      name: "deleterole",
      description: "指定したユーザーから指定したロールを削除します",
      options: [
        {
          name: "user",
          description: "ロールを削除するユーザーを指定してください",
          type: "USER",
          required: true,
        },
        {
          name: "role",
          description: "削除するロールを指定してください",
          type: "ROLE",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "deleterole")
      return;
    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます",
        ephemeral: true,
      });
    }
    const userOption = interaction.options.get("user");
    const roleOption = interaction.options.get("role");

    if (!userOption || !roleOption) {
      return interaction.reply("Please provide both user and role options.");
    }

    const user = userOption.user;
    const role = roleOption.role;

    try {
      const member = await interaction.guild.members.fetch(user.id);

      if (!member.roles.cache.has(role.id)) {
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Error")
          .setDescription(`${role} は ${user}に付与されていません`);

        return interaction.reply({ embeds: [embed], ephemeral: true });
      }

      await member.roles.remove(role);

      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Success")
        .setDescription(`${role} が ${user}から削除されました`);

      interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error("Failed to remove role:", error);
      interaction.reply("Failed to remove the role.");
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "editusername",
      description: "ユーザーのサーバーニックネームを変更します",
      options: [
        {
          name: "user",
          type: "USER",
          description: "ニックネームを変更するユーザーを指定してください",
          required: true,
        },
        {
          name: "editname",
          type: "STRING",
          description: "変更する名前を入力してください",
        },
        {
          name: "reset",
          type: "BOOLEAN",
          description: "ニックネームをリセットします",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const { commandName, options, guildId } = interaction;
    if (commandName === "editusername") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = options.getUser("user");
      const editname = options.getString("editname");
      const reset = options.getBoolean("reset");

      const guild = client.guilds.cache.get(guildId);
      if (!guild) {
        return interaction.reply({
          content: "Error finding the guild",
          ephemeral: true,
        });
      }

      const member = guild.members.cache.get(user.id);
      if (!member) {
        return interaction.reply({
          content: "User not found in the guild",
          ephemeral: true,
        });
      }

      try {
        let embed;

        if (reset) {
          await member.setNickname(null);
          embed = new MessageEmbed()
            .setTimestamp()
            .setColor("RANDOM")
            .setTitle("サーバーニックネームリセット")
            .setDescription(`${user}のサーバーニックネームをリセットしました`)
            .setAuthor(
              `実行者:${interaction.user.tag}`,
              interaction.user.displayAvatarURL()
            );
        } else {
          await member.setNickname(editname);
          embed = new MessageEmbed()
            .setTimestamp()
            .setColor("RANDOM")
            .setTitle("サーバーニックネーム変更")
            .setDescription(
              `${user}のサーバーニックネームを${editname}に変更しました`
            )
            .setAuthor(
              `実行者:${interaction.user.tag}`,
              interaction.user.displayAvatarURL()
            );
        }

        await interaction.reply({ embeds: [embed] });
      } catch (error) {
        console.error(error);
        interaction.reply({
          content: "Error changing nickname",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "embed",
      description: "埋め込みを作成します",
      options: [
        {
          name: "title",
          type: "STRING",
          description: "タイトルを指定してください",
          required: true,
        },
        {
          name: "description",
          type: "STRING",
          description: "説明を指定してください",
          required: true,
        },
        {
          name: "color",
          type: "STRING",
          description: "カラーを指定してください",
          required: false,
          choices: [
            { name: "赤色", value: "RED" },
            { name: "青色", value: "BLUE" },
            { name: "緑色", value: "GREEN" },
            { name: "黄色", value: "YELLOW" },
            { name: "黒色", value: "BLACK" },
          ],
        },
        {
          type: "ATTACHMENT",
          name: "image",
          description: "画像を指定してください",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "embed") return;

    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const color = interaction.options.getString("color") || "RANDOM";
    const image = interaction.options.getAttachment("image");

    const embed = new MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setColor(color);

    if (image) {
      embed.setImage(image.url);
    }

    interaction.reply({ embeds: [embed] });
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "endvote",
      description: "投票を集計します",
      options: [
        {
          name: "channel_id",
          type: "STRING",
          description: "投票を開始したチャンネルのIDを入力してください",
          required: true,
        },
        {
          name: "message_id",
          type: "STRING",
          description: "投票メッセージのメッセージIDを入力してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "vote",
      description: "投票を作成します ",
      options: [
        {
          name: "title",
          type: "STRING",
          description: "タイトルを指定してください",
          required: true,
        },
        {
          name: "choice1",
          type: "STRING",
          description: "選択肢1を指定してください",
          required: true,
        },
        {
          name: "choice2",
          type: "STRING",
          description: "選択肢2を指定してください",
          required: true,
        },
        {
          name: "choice3",
          type: "STRING",
          description: "選択肢3を指定してください",
          required: false,
        },
        {
          name: "choice4",
          type: "STRING",
          description: "選択肢4を指定してください",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

const emojis = ["🇦", "🇧", "🇨", "🇩"];

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "vote") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const title = options.getString("title");
      const choice1 = options.getString("choice1");
      const choice2 = options.getString("choice2");
      const choice3 = options.getString("choice3");
      const choice4 = options.getString("choice4");

      const choices = [choice1, choice2, choice3, choice4].filter(Boolean);

      if (!title) return interaction.reply("タイトルを指定してください");
      if (choices.length < 2 || choices.length > 4)
        return interaction.reply("選択肢は2から4つを指定してください");

      const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(choices.map((c, i) => `${emojis[i]} ${c}`).join("\n"));

      const poll = await interaction.reply({
        embeds: [embed],
        fetchReply: true,
      });
      emojis.slice(0, choices.length).forEach((emoji) => poll.react(emoji));

      embed.setFooter({
        text: `集計コマンド: /endvote ${interaction.channel.id} ${poll.id}`,
      });

      await poll.edit({ embeds: [embed] });
      console.log(choices.map((c) => `投票開始: ${title} ${c}`));
    } else if (commandName === "endvote") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const channelId = options.getString("channel_id");
      const messageId = options.getString("message_id");

      const channel = await interaction.guild.channels.fetch(channelId);
      const vote = await channel.messages.fetch(messageId);

      if (vote.author.id !== client.user.id)
        return interaction.reply("ボットが作成した投票ではありません");
      if (!vote.embeds[0]) return interaction.reply("無効な投票メッセージです");

      let result = "投票結果";
      const choices = vote.embeds[0].description.split("\n");
      for (let i = 0; i < vote.embeds[0].description.split("\n").length; i++) {
        const reaction = vote.reactions.cache.get(emojis[i]);
        result = `${result}\n${choices[i]}：${
          reaction ? reaction.count - 1 : 0
        }票`;
      }

      await interaction.reply({
        embeds: [
          new MessageEmbed()
            .setTitle(vote.embeds[0].title)
            .setDescription(result),
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

function convertCurrency(amount, currency) {
  try {
    let rate;

    switch (currency) {
      case "USD":
        rate = 1.2;
        break;
      case "EUR":
        rate = 0.8;
        break;
      case "JPY":
        rate = 130;
        break;
      default:
        return "無効な通貨です";
    }

    const convertedAmount = amount * rate;

    return convertedAmount.toFixed(2);
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "exchange",
      description: "通貨換算機能",
      options: [
        {
          name: "amount",
          description: "換算する金額",
          type: "NUMBER",
          required: true,
        },
        {
          name: "currency",
          description: "換算先の通貨",
          type: "STRING",
          required: true,
          choices: [
            {
              name: "USD",
              value: "USD",
            },
            {
              name: "EUR",
              value: "EUR",
            },
            {
              name: "JPY",
              value: "JPY",
            },
            // 追加の通貨をここに追記
          ],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "exchange") {
      const amount = options.getNumber("amount");
      const currency = options.getString("currency");

      const convertedAmount = convertCurrency(amount, currency);

      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("通貨換算結果")
        .setDescription(`換算先の通貨: ${currency}`)
        .addFields(
          { name: "元の金額", value: amount.toString() },
          { name: "換算後の金額", value: convertedAmount.toString() }
        );

      interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    const command = await client.application.commands.create({
      name: "dm-request",
      description: "指定したユーザーにDMを送信します(悪用厳禁)",
      options: [
        {
          name: "user",
          type: "USER",
          description: "DMを送信するユーザーを選択してください。",
          required: true,
        },
        {
          name: "name",
          type: "STRING",
          description: "あなたの名前を入力してください。",
          required: true,
        },
        {
          name: "message",
          type: "STRING",
          description: "送信するメッセージを入力してください。",
          required: true,
        },
      ],
    });

    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isCommand() || !interaction.guild) return;

      if (interaction.commandName === "dm-request") {
        const user = interaction.options.getUser("user");
        const name = interaction.options.getString("name");
        const message = interaction.options.getString("message");
        try {
          const dmChannel = await user.createDM();

          const embed = {
            title: "お問い合わせ",
            color: "#0099ff",
            fields: [
              {
                name: "ユーザー",
                value: name,
              },

              {
                name: "お問い合わせ内容",
                value: message,
              },
            ],
            timestamp: new Date(),
          };

          await dmChannel.send({ embeds: [embed] });
          await interaction.reply({
            content: `${user.username}さんにDMを送信しました`,
            ephemeral: true,
          });
        } catch (error) {
          console.error(error);
          await interaction.reply({
            content: `${user.username}さんにDMを送信できませんでした`,
            ephemeral: true,
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "giveaway",
      description: "プレゼント企画を開始します",
      options: [
        {
          type: "STRING",
          name: "prize",
          description: "景品名",
          required: true,
        },
        {
          type: "STRING",
          name: "duration",
          description: "当選発表時間(例:1m(1分),1h(1時間),24h(1日))",
          required: true,
        },
        {
          type: "STRING",
          name: "winners",
          description: "当選人数",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "giveaway") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }

      const prize = interaction.options.getString("prize");
      const duration = interaction.options.getString("duration");
      const winnersCount = interaction.options.getString("winners");
      const durationMs = duration.endsWith("m")
        ? parseInt(duration) * 60000
        : parseInt(duration) * 3600000;
      const endTime = Date.now() + durationMs;

      const endDate = new Date(endTime);
      const year = endDate.getFullYear();
      const month = endDate.getMonth() + 1;
      const day = endDate.getDate();
      const hours = endDate.getHours();
      const minutes = endDate.getMinutes();
      const formattedEndTime = `${year}年${month}月${day}日 ${hours}:${minutes
        .toString()
        .padStart(2, "0")}`;

      const embed = new MessageEmbed()
        .setTitle(prize)
        .setDescription(`現在の参加人数: 0`)
        .addField(`主催者`, `${interaction.user}`)
        .addField(`景品名`, `**${prize}**`)
        .addField(
          `終了:`,
          `<t:${Math.floor(endTime / 1000)}:R> (${formattedEndTime})`
        )
        .addField(`当選人数:`, `${winnersCount}`)
        .setColor("GREEN")
        .setTimestamp();

      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("giveaway_enter")
          .setLabel("参加する")
          .setStyle("PRIMARY"),
        new MessageButton()
          .setCustomId("giveaway_leave")
          .setLabel("参加をやめる")
          .setStyle("SECONDARY")
      );

      const giveawayMessage = await interaction.channel.send({
        embeds: [embed],
        components: [row],
      });

      const giveaways = readGiveaways();
      giveaways[giveawayMessage.id] = {
        guildId: interaction.guild.id,
        channelId: interaction.channel.id,
        endTime: endTime,
        winnersCount: winnersCount,
        participants: [],
      };
      writeGiveaways(giveaways);

      // Debugging log to ensure data is saved
      console.log("giveaway情報を登録しました:", giveaways);
      await interaction.reply({
        content: `giveawayを開始しました(ID:${giveawayMessage.id})`,
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "gban",
      description: "指定したユーザーのグローバルBANを実行します(Developer専用)",
      options: [
        {
          name: "id",
          type: "STRING",
          description: "ユーザーIDを入力",
          required: true,
        },
        {
          name: "reason",
          type: "STRING",
          description: "理由を入力",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "gban") {
      const allowedUserId = "1178414826184265819";
      if (interaction.user.id !== allowedUserId)
        return interaction.reply({
          content: "コマンドの実行権限がありません",
          ephemeral: true,
        });
      const gbanId = interaction.options.getString("id");
      const reason = interaction.options.getString("reason");

      client.guilds.cache.forEach((g) => {
        // Botが参加しているすべてのサーバーで実行
        try {
          g.members.ban(gbanId, { reason }); // メンバーをBAN
          console.log(g.name + "でのGBANに成功しました"); // 成功したらコンソールに出す
        } catch (e) {
          console.log(g.name + "でのGBANの執行に失敗しました。\n" + e); // エラーが出たとき
        }
      });
      const embed = new MesageEmbed()
        .setTitle("GBAN")
        .setDescription(`${gbanId}のグローバルBANを実行しました`)
        .setColor("RANDOM")
        .setTimestamp();
      await interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "gif-search",
      description: "gifを検索ワードから検索します",
      options: [
        {
          name: "name",
          type: "STRING",
          description: "検索ワードを入力",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "gif-search") {
      const name = interaction.options.getString("name");
      const fetch = require("node-fetch");
      dotenv.config();
      require("dotenv").config();
      await interaction.deferReply();
      try {
        const data = await fetch(
          `https://g.tenor.com/v1/search?q=${name}&key=${process.env.GIF_KEY}&limit=1&media_filter=minimal`
        ).then((res) => res.json());

        const image = await fetch(data.results[0].media[0].gif.url).then(
          (res) => res.blob()
        );

        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "GIFを取得しました",
                icon_url: "https://cdn.taka.cf/images/system/success.png",
              },
              image: {
                url: "attachment://result.gif",
              },
            },
          ],
          files: [
            new MessageAttachment()
              .setFile(image.stream())
              .setName("result.gif"),
          ],
        });
      } catch {
        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "違うワードで試してください",
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "google-image-search",
      description: "Google画像検索",
      options: [
        {
          type: "STRING",
          name: "word",
          description: "入力してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) {
      return;
    }
    const banword = ["ちんこ", "penis", "まんこ", "アナル"];
    if (interaction.commandName === "google-image-search") {
      const word = interaction.options.getString("word");
      if (banword.includes(word)) {
        await interaction.reply({
          content: "禁止されている検索ワードです。",
          ephemeral: true,
        });
        return;
      }

      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY2}&cx=${process.env.CSE2}&q=${word}&searchType=image`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
          throw new Error("No image results found.");
        }

        const embed = new MessageEmbed()
          .setColor("BLUE")
          .setTitle(`${word}の画像検索結果`)
          .setImage(data.items[0].link)
          .setFooter("Powered by Google Custom Search API");

        await interaction.reply({ embeds: [embed] });
      } catch (error) {
        console.error(
          "Error fetching or processing image search results:",
          error
        );
        await interaction.reply({
          content: "画像の検索結果の取得中にエラーが発生しました。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "google-search",
      description: "Google検索",
      options: [
        {
          type: "STRING",
          name: "word",
          description: "入力してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) {
      return;
    }
    if (interaction.commandName === "google-search") {
      const fetch = require("node-fetch");
      const word = interaction.options.getString("word");
      const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CSE}&q=${word}`
      )
        .then((res) => res.json())
        .catch(() => {});
      await interaction.reply({
        embeds: [
          {
            color: "BLUE",
            title: `${word}の検索結果`,
            fields: [
              {
                name: data.items[0].title,
                value: data.items[0].link + "\n" + data.items[0].snippet,
              },

              {
                name: data.items[1].title,
                value: data.items[1].link + "\n" + data.items[1].snippet,
              },
              {
                name: data.items[2].title,
                value: data.items[2].link + "\n" + data.items[2].snippet,
              },
              {
                name: data.items[3].title,
                value: data.items[3].link + "\n" + data.items[3].snippet,
              },
              {
                name: data.items[4].title,
                value: data.items[4].link + "\n" + data.items[4].snippet,
              },
              ,
            ],
          },
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "help",
      description: "helpを表示します",
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === "help") {
      sendPagination(interaction);
    }
  } catch (e) {
    console.log(e);
  }
});

async function sendPagination(interaction) {
  try {
    const pages = [
      {
        title: `deaxbot help`,
        content: `> P.1 **管理:PREFIXコマンド**\n> P.2 **サーバー関連:PREFIXコマンド**\n> P.3 **その他:PREFIXコマンド**\n> P.4 **ユーザー管理**\n> P.5 **情報表示**\n> P.6 **SETUP**\n> P.7 **サーバー管理**\n> P.8 **ツール**\n> P.9 **その他**\n製作者: <@1350063666850037794>\n\nサポートサーバー\nhttps://discord.gg/5tSSdenskW`,
      },
      {
        title: "管理:PREFIXコマンド",
        content: "ページ1",
        fields: [
          { name: "BAN機能", value: "```r.ban @user```" },
          { name: "kick機能", value: "```r.kick @user```" },
          {
            name: "タイムアウト機能",
            value: "```r.timeout @user ◯日,時間,分,秒 理由```",
          },
          { name: "タイムアウト解除機能", value: "```r.untimeout @user```" },
          {
            name: "投票機能",
            value: "```r.vote タイトル　選択肢　で投票パネルを設置```",
          },
        ],
      },
      {
        title: "サーバー関連:PREFIXコマンド",
        content: "ページ2",
        fields: [
          { name: "BANユーザー確認", value: "```r.banlist```" },
          { name: "チャンネルログを削除", value: "```r.nuke```" },
          {
            name: "チャンネルメッセージを削除",
            value: "```r.clear メッセージ数```",
          },
          {
            name: "メッセージ詳細を表示",
            value: "```メッセージリンクをチャンネルに貼り付け```",
          },
          {
            name: "入退室ログ送信チャンネル登録",
            value: "```r.welcomelog チャンネルID```",
          },
          {
            name: "入退室ログ送信チャンネル削除",
            value: "```r.deletelog サーバーID チャンネルID```",
          },
        ],
      },
      {
        title: "その他:PREFIXコマンド",
        content: "ページ3",
        fields: [
          { name: "おみくじ機能画像版", value: "```r.omi.g```" },
          { name: "日付表示機能", value: "```r.day```" },
          { name: "QRコード作成機能", value: "```r.qr カスタム文字```" },
          { name: "ユーザーアバター確認", value: "```r.avatar @user```" },
          { name: "Make it a quote風画像生成", value: "```reply @deaxbot```" },
          {
            name: "NSFW Neko画像生成",
            value: "```r.neko type(例:neko,hentai,paizuri)```",
          },
        ],
      },
      {
        title: "ユーザー管理",
        content: `ページ4\n\n</kick:1186679511677423697>\n指定したユーザーをサーバーからキックします\n\n</ban:1186679512822448239>\n指定したユーザーをサーバーからBANします\n\n</addrole:1186679775905976451>\n指定したユーザーに指定したロールを付与します\n\n</deleterole:1186679777063608340>\n指定したユーザーから指定したロールを削除します\n\n</editusername:1191337914882342942>\n指定したユーザーのサーバーニックネームを設定します\n\n</timeout:1188444677452611659>\n指定したユーザーをタイムアウトします\n\n</untimeout:1188451624109228132>\n指定したユーザーのタイムアウトを解除します\n\n</unban:1186679685220929698>\n指定したユーザーIDのユーザーのBANを解除します`,
      },
      {
        title: "情報表示",
        content: `ページ5\n\n</チャンネル情報:1202606212177338439>\n指定したチャンネルの情報を表示します\n\n</banlist:1202574395550335026>\nサーバーからBANされたユーザーを表示します\n\n</botinfo:1202616614139203726>\nBOTの詳細情報を表示します\n\n</invite:1186679774282788975>\nBOTの招待リンクを表示します\n\n</role-info:1203346616874967040>\n指定したロールの詳細情報を表示します\n\n</server:1186679688723177483>\nサーバーの詳細情報を表示します\n\n</user:1186679686512779314>\n指定したユーザーの詳細情報を表示します\n\n</avatar:1186679597627092994>\n指定したユーザーのアバターを表示します`,
      },
      {
        title: "SETUP",
        content: `ページ6\n\n</メッセージをピン留め:1203310740413616208>\n指定したメッセージを一番下に表示します\n\n</低速モード設定:1202576953782177823>\n指定されたチャンネルに指定した時間低速を設定します\n\n</create-channel:1190022588622196888>\n指定された名前のチャンネルを作成します\n\n</create-role:1202891245475602433>\n指定された名前のロールを作成します\n\n</vote:1203333248827265086>\n投票を作成します\n\n</endvote:1203335310180880424>\n投票を集計します\n\n</panel:1186679864082825308>\n対応状況パネルを設置します\n\n</rolepanel:1192792883225444372>\n役職パネルを設置します\n\n</shop-create:1195020185913012256>\n自販機を作成します\n\n</slot-create:1195751086439547020>\n指定したユーザーのスロットチャンネルを作成します\n\n</ticket:1195034548971503720>\nチケットパネルを作成します\n\n</verify:1186679599984283719>\n認証パネルを作成します\n\n</verification-custom:1204007524010037278>\n複数の認証形式の中から選択して認証パネルを設置します`,
      },
      {
        title: "サーバー管理",
        content: `ページ7\n\n</clear:1186679515389370439>\nチャンネルのメッセージを削除します(1-100)\n\n</nuke:1186679514189791403>\nチャンネルのメッセージをすべて削除します\n\n</deletechannel:1199558874542379030>\nサーバーのすべてのチャンネルを削除します。注意して実行してください\n\n</welcomelog-setting:1206779221134024764>\n入退室ログを送信するチャンネルを登録します\n\n</welcomelog-delete:1206950699049422868>\n登録されているチャンネルを削除します。\n\n</禁止ワード:1208697893314101248>\n禁止ワードの登録を行います\n\n</禁止ワード削除:1208706336418832445>\n登録されている禁止ワードを指定して削除します\n\n</禁止ワードリセット:1208855620946755694>\n登録されている禁止ワードを全て削除します\n\n</禁止ワードリスト:1208700370134630450>\n登録されている禁止ワードのリストを表示します\n\n</自動応答-on:1213143834868060180>\nBOTの自動応答をONにします\n\n</自動応答-off:1213143836000395295>\nBOTの自動応答をOFFにします`,
      },
      {
        title: "ツール",
        content: `ページ8\n\n</chat-log:1203302078609367070>\n指定された数のメッセージを取得してファイルに記入します(1-100)\n\n</calculate:1186679860991639582>\n電卓機能\n\n</countmessages:1186679862270894150>\nチャンネルのメッセージ数を表示します\n\n</exchange:1186679858839945257>\n通貨を換算します\n\n</dm-request:1205950721544032296>\n指定したユーザーにメッセージを送信します。(悪用厳禁)\n\n</google-image-search:1202647059719655505>\n指定したワードからgoogle画像検索を行います\n\n</google-search:1202646924453224450>\n指定したワードからgoogle検索を行います\n\n</make-file:1189990519485513889>\n指定した文字を記入したファイルを生成します(拡張子選択可)\n\n</news:1202635559298797689>\nニュースを表示します\n\n</newssearch:1202636650404909056>\nニュースを検索して表示します\n\n</qrcode:1202625813405630525>\n指定されたテキストからQRコードを生成します\n\n</review:1196789239208235129>\nユーザーのレビューを送信します\n\n</url-button:1203265872559611985>\n指定されたURLのボタンを作成します`,
      },
      {
        title: "その他",
        content: `ページ9\n\n</embed:1186679510305865908>\nカスタムした埋め込みメッセージを作成します\n\n</おみくじ:1203380393470861333>\nおみくじを引きます\n\n</おみくじパネル:1203384318068662302>\nおみくじパネルを設置します\n\n</mention:1186679692019912744>\n指定したユーザーを指定した数だけメンションします(悪用厳禁)\n\n</message:1198515145366843513>\n指定したチャンネルに指定したメッセージを送信します\n\n</messagecreate:1186679690753220649>\n指定したメッセージを指定した回数送信します\n\n</nitro-generator:1191356997854056480>\n未確認NITROギフトリンクを生成します\n\n</paypay-generator:1189965132118380554>\n未確認paypayリンクを生成します\n\n</nsfw-neko:1206305201137385546>\nNekoAPIを使用した画像検索機能\n\n</ping:1186679602370842645>\npingを表示します\n\n</timer:1202880966717210695>\nタイマー機能`,
      },
      // Add more pages as needed
    ];

    let currentPage = 0;

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId(`previous`)
        .setLabel("前のページに戻る")
        .setStyle("SECONDARY"),
      new MessageButton()
        .setCustomId(`next`)
        .setLabel("次のページ")
        .setStyle("SECONDARY")
    );

    let embed = createEmbed(pages[currentPage]);

    await interaction.reply({ embeds: [embed], components: [row] });

    const filter = (i) => {
      return i.customId === "previous" || i.customId === "next";
    };

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
    });

    collector.on("collect", async (i) => {
      if (i.customId === "previous") {
        currentPage = (currentPage - 1 + pages.length) % pages.length;
      } else if (i.customId === "next") {
        currentPage = (currentPage + 1) % pages.length;
      }

      if (i.user.id !== interaction.user.id) {
        await i.reply({ content: "選択できません", ephemeral: true });
        return;
      }

      embed = createEmbed(pages[currentPage]);
      await i.update({ embeds: [embed], components: [row] });
    });

    collector.on("end", () => {
      interaction.editReply({ components: [] });
    });
  } catch (e) {
    console.log(e);
  }
}

function createEmbed(page) {
  try {
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(page.title)
      .setDescription(page.content);

    if (page.fields) {
      page.fields.forEach((field) => {
        embed.addField(field.name, field.value);
      });
    }

    return embed;
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "invite",
      description: "BOTの招待リンクを表示します",
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "invite") {
      const embed = new MessageEmbed()
        .setTitle("招待リンク")
        .setDescription("下記のボタンからdeaxbotをサーバーに招待できます。")
        .setColor("RANDOM")
        .setTimestamp();

      const inviteLink =
        "https://discord.com/api/oauth2/authorize?client_id=1186678650565820508&permissions=8&scope=bot+applications.commands";

      await interaction.reply({
        embeds: [embed],
        components: [
          {
            type: "ACTION_ROW",
            components: [
              {
                type: "BUTTON",
                style: "LINK",
                label: "BOTを招待する",
                url: inviteLink,
              },
            ],
          },
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "kick",
      description: "指定したユーザーをキックします。",
      options: [
        {
          name: "target",
          description: "キックするユーザーを指定してください。",
          type: "USER",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "kick") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = interaction.options.getUser("target");
      const member = interaction.guild.members.cache.get(user.id);

      if (!member)
        return interaction.reply("指定されたユーザーが見つかりませんでした。");

      try {
        await member.kick();
        const kickEmbed = new MessageEmbed()
          .setTimestamp()
          .setTitle("KICK")
          .setDescription(`${member.user.tag} をKICKしました`)
          .setColor("RED")
          .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
          .setAuthor(`実行者:${interaction.user.tag}`);
        return interaction.reply({ embeds: [kickEmbed] });
      } catch (error) {
        console.error(error);
        return interaction.reply("キック中にエラーが発生しました。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "make-file",
      description: "指定した文字が記入してあるファイルを生成します",
      options: [
        {
          name: "content",
          type: "STRING",
          description: "ファイルに記載するテキストを入力してください",
          required: true,
        },
        {
          name: "extension",
          type: "STRING",
          description: "ファイル形式を選択してください(拡張子)",
          required: true,
          choices: [
            { name: "Text ファイル (.txt)", value: "txt" },
            { name: "Lua ファイル (.lua)", value: "lua" },
            { name: "Python ファイル (.py)", value: "py" },
            { name: "JavaScript ファイル (.js)", value: "js" },
          ],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "make-file") {
      const content = options.getString("content");
      const extension = options.getString("extension");

      if (!content || !extension) {
        return interaction.reply({
          content: "テキストを入力してください",
          ephemeral: true,
        });
      }

      if (!["txt", "lua", "py", "js"].includes(extension.toLowerCase())) {
        return interaction.reply({
          content: "拡張子を選択してください",
          ephemeral: true,
        });
      }

      try {
        const fileName = `index.${extension}`;
        await fs.writeFile(fileName, content);
        const fileBuffer = await fs.readFile(fileName);

        const embedSuccess = new MessageEmbed()
          .setTimestamp()
          .setColor("RANDOM")
          .setTitle("ファイル作成")
          .setDescription(`ファイルの生成に成功しました`)
          .setAuthor(
            `実行者:${interaction.user.tag}`,
            interaction.user.displayAvatarURL()
          );

        await interaction.reply({
          embeds: [embedSuccess],
          files: [{ attachment: fileBuffer, name: fileName }],
          ephemeral: true,
        });
      } catch (error) {
        console.error(`Failed to create or send file: ${error.message}`);
        interaction.reply({
          content: "Failed to create or send file.",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "mention",
      description: "指定したユーザーをメンションします",
      options: [
        {
          name: "user",
          description: "メンションするユーザーを指定してください。",
          type: "USER",
          required: true,
        },
        {
          name: "count",
          type: "INTEGER",
          description: "メンションを送信する回数を指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "mention") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = interaction.options.getUser("user");
      const count = interaction.options.getInteger("count");

      if (count < 1) {
        return await interaction.reply("Count must be at least 1!");
      }

      const embed = new MessageEmbed()
        .setTitle("メンション情報")
        .setDescription(`${user.toString()}が${count}回メンションされます`);

      await interaction.reply({ embeds: [embed] });

      for (let i = 1; i <= count; i++) {
        await interaction.channel.send(`${user.toString()}`);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "message",
      description: "指定したチャンネルに指定したメッセージを送信します",
      options: [
        {
          name: "content",
          type: "STRING",
          description: "送信するメッセージを入力してください",
          required: true,
        },
        {
          name: "channelid",
          type: "STRING",
          description: "送信するチャンネルのIDを指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const { commandName, options } = interaction;
    if (commandName === "message") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const content = options.getString("content");
      const channelId = options.getString("channelid");

      const channel = client.channels.cache.get(channelId);
      if (!channel) {
        return interaction.reply({
          content: "Invalid channel ID",
          ephemeral: true,
        });
      }

      channel.send(content);
      interaction.reply({
        content: "Message sent successfully!",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "messagecreate",
      description: "指定したメッセージを指定した回数分送信します",
      options: [
        {
          name: "text",
          type: "STRING",
          description: "送信するメッセージ",
          required: true,
        },
        {
          name: "count",
          type: "INTEGER",
          description: "メッセージを送信する回数を指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

const processingChannels = {};

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "messagecreate") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }

      const guildId = interaction.guild.id;
      const channelId = interaction.channel.id;

      if (
        processingChannels[guildId] &&
        processingChannels[guildId] !== channelId
      ) {
        return interaction.reply({
          content: "このサーバーでは他のチャンネルでコマンドが実行中です",
          ephemeral: true,
        });
      }

      processingChannels[guildId] = channelId;

      const texts = interaction.options.getString("text");
      const count = interaction.options.getInteger("count");

      // @everyone や @here が含まれているかをチェック
      if (texts.includes("@everyone") || texts.includes("@here")) {
        delete processingChannels[guildId];
        return await interaction.reply({
          content: "@everyone や @here を含むメッセージは送信できません。",
          ephemeral: true,
        });
      }

      if (count < 1) {
        delete processingChannels[guildId];
        return await interaction.reply("必ず1以上を指定してください");
      }

      if (count > 100) {
        delete processingChannels[guildId];
        return await interaction.reply("最大指定数は100までです。");
      }

      const embed = new MessageEmbed()
        .setTitle("メッセージ情報")
        .setDescription(`${texts}が${count}回送信されます`);

      await interaction.reply({ embeds: [embed] });

      for (let i = 0; i < count; i++) {
        await interaction.channel.send(`${texts}`);
      }

      delete processingChannels[guildId];
    }
  } catch (e) {
    console.log(e);
    delete processingChannels[interaction.guild.id];
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "embedmessage-lock",
      description: "指定した埋め込みメッセージを一番下に固定",
      options: [
        {
          name: "title",
          type: "STRING",
          description: "タイトル",
          required: true,
        },
        {
          name: "description",
          type: "STRING",
          description: "説明",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "embedmessage-lock") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const embedTitle = interaction.options.getString("title");
      const embedDescription = interaction.options.getString("description");

      embedContent = { title: embedTitle, description: embedDescription };
      channel = interaction.channel;
      const guildId = interaction.guild.id;

      const embed = {
        title: embedTitle,
        color: 0x0099ff,
      };

      if (embedDescription) {
        const embed = {
          description: embedDescription,
        };
      }

      const webhook = await channel.createWebhook(webhookName, {
        avatar: webhookAvatar,
      });
      const sentMessage = await webhook.send({ embeds: [embed] });
      messageId = sentMessage.id;

      const data = readDataFromFile();
      data[guildId] = {
        channelId: channel.id,
        messageId,
        content: `${embedTitle};${embedDescription}`,
      };
      writeDataToFile(data);
      if (embedIntervals[guildId]) clearInterval(embedIntervals[guildId]);
      embedIntervals[guildId] = setInterval(
        () => updateEmbedMessage(guildId),
        10000
      );
      await interaction.reply({
        content: "埋め込みメッセージの固定を実行しました",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "message-lock",
      description: "指定したメッセージを一番下に固定",
      options: [
        {
          name: "content",
          type: "STRING",
          description: "固定するメッセージ",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "message-lock") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      content = interaction.options.getString("content");
      channel = interaction.channel;
      const guildId = interaction.guild.id;

      const webhook = await channel.createWebhook(webhookName, {
        avatar: webhookAvatar,
      });
      const sentMessage = await webhook.send(content);
      messageId = sentMessage.id;

      const data = readDataFromFile();
      data[guildId] = { channelId: channel.id, messageId, content };
      writeDataToFile(data);

      if (intervals[guildId]) clearInterval(intervals[guildId]);
      intervals[guildId] = setInterval(() => updateMessage(guildId), 10000);
      await interaction.reply({
        content: "メッセージの固定を実行しました",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "membercount-delete",
      description: "メンバーカウントチャンネルを削除します",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "membercount",
      description: "メンバーカウントチャンネルを作成します",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("guildMemberAdd", (member) => {
  try {
    updateVoiceChannelNameAndPosition(member.guild);
  } catch (e) {
    console.log(e);
  }
});

client.on("guildMemberRemove", (member) => {
  try {
    updateVoiceChannelNameAndPosition(member.guild);
  } catch (e) {
    console.log(e);
  }
});

async function createVoiceChannel(guild) {
  try {
    const memberCount = guild.memberCount;

    const voiceChannel = await guild.channels.create(
      `MemberCount: ${memberCount}`,
      {
        type: "GUILD_VOICE",
        permissionOverwrites: [
          {
            id: guild.roles.everyone.id,
            deny: ["CONNECT"],
          },
        ],
      }
    );

    await voiceChannel.setPosition(0);

    console.log(
      `ボイスチャンネル「${voiceChannel.name}」が作成され、一番上に配置されました。`
    );
  } catch (e) {
    console.log(e);
  }
}

async function updateVoiceChannelNameAndPosition(guild) {
  try {
    const memberCount = guild.memberCount;

    const voiceChannel = guild.channels.cache.find(
      (channel) =>
        channel.type === "GUILD_VOICE" &&
        channel.name.startsWith("MemberCount:")
    );

    if (voiceChannel) {
      await voiceChannel.setName(`MemberCount: ${memberCount}`);
      await voiceChannel.setPosition(0);

      console.log(
        `ボイスチャンネル「${voiceChannel.name}」の名前が更新され、一番上に配置されました。`
      );
    }
  } catch (e) {
    console.log(e);
  }
}

async function deleteVoiceChannel(guild) {
  try {
    const voiceChannel = guild.channels.cache.find(
      (channel) =>
        channel.type === "GUILD_VOICE" &&
        channel.name.startsWith("MemberCount:")
    );

    if (voiceChannel) {
      await voiceChannel.delete();
      console.log(`ボイスチャンネル「${voiceChannel.name}」が削除されました。`);
    } else {
      console.log("該当するボイスチャンネルが見つかりませんでした。");
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "membercount") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      createVoiceChannel(interaction.guild);

      const embed = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(
          `メンバーカウントが作成されました\nボイスチャンネルへの接続権限だけが削除されている状態なので必要に応じて権限設定を行って下さい`
        )
        .setColor("RANDOM")
        .setTimestamp();
      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "membercount-delete") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      deleteVoiceChannel(interaction.guild);
      const embed = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(`メンバーカウントが削除されました`)
        .setColor("RANDOM")
        .setTimestamp();
      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "news",
      description: "ニュースを表示します",
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) {
      return;
    }
    if (interaction.commandName === "news") {
      const fetch = require("node-fetch");
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.news}`
      )
        .then((res) => res.json())
        .catch(() => {});
      await interaction.reply({
        embeds: [
          {
            color: "BLUE",
            timestamp: new Date(),
            fields: [
              {
                name: data.articles[0].title,
                value:
                  data.articles[0].url + "\n" + data.articles[0].description,
              },
              {
                name: data.articles[1].title,
                value:
                  data.articles[1].url + "\n" + data.articles[1].description,
              },
              {
                name: data.articles[2].title,
                value:
                  data.articles[2].url + "\n" + data.articles[2].description,
              },
            ],
          },
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "newssearch",
      description: "ニュースを検索します。",
      options: [
        {
          type: "STRING",
          name: "word",
          description: "入力しよう",
          max_length: 90,
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) {
      return;
    }
    if (interaction.commandName === "newssearch") {
      try {
        const word = interaction.options.getString("word");
        const data = await fetch(
          `https://newsapi.org/v2/everything?q=${word}&apiKey=${process.env.news}`
        )
          .then((res) => res.json())
          .catch(() => {});
        const embed = new Discord.MessageEmbed()
          .addFields([
            {
              name: data.articles[0].title,
              value: data.articles[0].url + "\n" + data.articles[0].description,
            },
            {
              name: data.articles[1].title,
              value: data.articles[0].url + "\n" + data.articles[1].description,
            },
            {
              name: data.articles[2].title,
              value: data.articles[0].url + "\n" + data.articles[3].description,
            },
          ])
          .setColor("BLUE");
        await interaction.reply({
          embeds: [embed],
        });
      } catch (err) {
        await interaction.reply({
          content: "検索中にエラーが発生しました",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "nitro-generator",
      description: "未確認ニトロギフトリンクを生成します",
      options: [
        {
          name: "user",
          type: "USER",
          description: "送信するユーザーを指定してください",
          required: true,
        },
        {
          name: "count",
          type: "INTEGER",
          description: "生成する数を指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const { commandName, options } = interaction;
    if (commandName === "nitro-generator") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = options.getUser("user");
      const count = options.getInteger("count");

      if (!user || !count || count < 1) {
        return interaction.reply({
          content:
            "Invalid parameters. Please provide a valid user and count (1 or more).",
          ephemeral: true,
        });
      }

      if (count >= 10) {
        return interaction.reply({
          content: "Count must be less than 10.",
          ephemeral: true,
        });
      }

      for (let i = 0; i < count || count === -1; i++) {
        const randomString = generateRandomString(16);
        const nitroLink = `https://discord.com/gifts/${randomString}`;

        try {
          await user.send(`Nitro Link: ${nitroLink}`);
        } catch (error) {
          console.error(`Failed to send DM to ${user.tag}: ${error.message}`);
          interaction.reply({
            content: `Failed to send PayPay link to ${user.tag}.`,
            ephemeral: true,
          });
        }
      }

      interaction.reply({
        content: `${user.tag}に${
          count === -1 ? "unlimited" : count
        }件のNitroリンクが送信されました`,
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

function generateRandomString(length) {
  try {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  } catch (e) {
    console.log(e);
  }
}

client.on("ready", async () => {
  try {
    const command = await client.application.commands.create({
      name: "nsfw-neko",
      description: "NekoAPIを使用した画像生成機能",
      options: [
        {
          type: "STRING",
          name: "type",
          description: "タイプを入力してください",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "nsfw-neko")
      return;
    const imageType = interaction.options.getString("type") || "neko";

    const nekobotApiUrl = `https://nekobot.xyz/api/image?type=${imageType}`;

    try {
      const response = await axios.get(nekobotApiUrl);
      const imageUrl = response.data.message;

      const embed = {
        title: `SUCCESS ${imageType}`,
        image: {
          url: imageUrl,
        },
        timestamp: new Date(),
      };

      interaction.reply({ embeds: [embed] });
    } catch (error) {
      const types = [
        "hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle, boobs, hboobs, yaoi",
      ];
      const embed2 = new MessageEmbed()
        .setTitle("error")
        .setDescription(
          `画像タイプを取得できませんでした\n\n**使用可能なタイプ**\n${types}`
        )
        .setColor("RED")
        .setTimestamp();
      interaction.reply({
        embeds: [embed2],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "nuke",
      description: "チャンネルログを全て削除します。",
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "nuke") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      await interaction.reply({
        content: "チャンネルを削除中...",
        ephemeral: true,
      });

      const channel = interaction.channel;
      const newChannel = await channel.clone();
      await channel.delete();

      const logEmbed = new MessageEmbed()
        .setColor("#ff0000")
        .setAuthor(
          "deaxbot",
          "https://images-ext-1.discordapp.net/external/e17T8BdgsVm12VGFQwEqJ-TeDQesCqkHpQA7Oa9MCG0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1088129741745311834/d486b816b9bc5d54db9ac99de12f5a21.webp?width=606&height=606"
        )
        .setTitle("nuke")
        .setDescription(
          `<@${interaction.user.id}>がメッセージログを削除しました。`
        )
        .setImage(
          "https://cdn.discordapp.com/attachments/1125145598199353374/1134129974358581339/1579672513_gifmagazine.gif"
        );
      const inviteButton = new MessageButton()
        .setStyle("LINK")
        .setLabel("サーバーにBOTを導入する")
        .setURL(
          "https://discord.com/oauth2/authorize?client_id=1098536632161947658&permissions=8&scope=bot%20applications.commands"
        );

      const actionRow = new MessageActionRow().addComponents(inviteButton);

      await newChannel.send({ embeds: [logEmbed], components: [actionRow] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "panel",
      description: "対応状況パネルを設置",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "panel") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const embed = new MessageEmbed()
        .setTitle("対応状況")
        .setDescription("現在対応可能です")
        .setImage(
          "https://media.discordapp.net/attachments/1133014806966849671/1177633578478223461/1700840113611.png?ex=657337bc&is=6560c2bc&hm=9351a9c177a1d9c9dede6f6a&=&width=680&height=680"
        )
        .setColor("GREEN");
      interaction.reply({
        embeds: [embed],
        components: [newbutton([{ id: "switch", emoji: "🔔" }])],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }

    if (interaction.customId == "switch") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      let content, color, image;
      const description = interaction.message.embeds[0].description;

      if (description == "現在対応可能です") {
        content = "現在対応不可能です";
        color = "RED";
        image =
          "https://media.discordapp.net/attachments/1133014806966849671/1177633171978858496/mark_batsu_illust_898.png?ex=6573375b&is=6560c25b&hm=65e2dec3f79560994a747f60&=&width=1066&height=1066";
      } else if (description == "現在対応不可能です") {
        content = "現在対応可能です";
        color = "GREEN";
        image =
          "https://media.discordapp.net/attachments/1133014806966849671/1177633578478223461/1700840113611.png?ex=657337bc&is=6560c2bc&hm=9351a9c177a1d9c9dede6f6a&=&width=680&height=680";
      }

      const embed = new MessageEmbed()
        .setTitle("対応状況")
        .setDescription(content)
        .setImage(image)
        .setColor(color);

      const update = new MessageEmbed()
        .setTitle("対応状況")
        .setDescription(
          "対応状況が変更されました <#1177635882770108596>を確認してください。"
        )
        .setColor(color);

      // Replace 'CHANNEL_ID' with the actual channel ID where you want to send the message
      const channel = interaction.client.channels.cache.get(
        "1133014806501273661"
      );

      if (channel && channel.isText()) {
        await channel.send({ embeds: [update] });
      } else {
        console.error("Invalid channel or channel is not a text channel.");
      }

      await interaction.message.edit({
        embeds: [embed],
        components: [newbutton([{ id: "switch", emoji: "🔔" }])],
      });
      await interaction.deferUpdate();
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "paypay-generator",
      description: "未確認paypayリンクを生成します",
      options: [
        {
          name: "user",
          type: "USER",
          description: "送信するユーザーを指定してください",
          required: true,
        },
        {
          name: "count",
          type: "INTEGER",
          description: "生成する数を指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const { commandName, options } = interaction;
    if (commandName === "paypay-generator") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = options.getUser("user");
      let count = options.getInteger("count");

      if (!user || !count || count < 1) {
        return interaction.reply({
          content:
            "Invalid parameters. Please provide a valid user and count (1 or more).",
          ephemeral: true,
        });
      }

      if (count >= 10) {
        return interaction.reply({
          content: "Count must be less than 10.",
          ephemeral: true,
        });
      }

      try {
        for (let i = 0; i < count; i++) {
          const randomString = generateRandomStrings(16);
          const paypayLink = `https://pay.paypay.ne.jp/${randomString}`;

          await user.send(`PayPay Link: ${paypayLink}`);
        }

        interaction.reply({
          content: `${user.tag} に ${count} 件の PayPay リンクが送信されました`,
          ephemeral: true,
        });
        console.log(`paypayリンクを${user.tag}に正常に送信しました`);
      } catch (error) {
        console.error(`Failed to send DM to ${user.tag}: ${error.message}`);
        interaction.reply({
          content: `Failed to send PayPay links to ${user.tag}.`,
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
    interaction.reply({ content: `エラーが発生しました`, ephemeral: true });
  }
});

function generateRandomStrings(length) {
  try {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "package",
      description: "パッケージを検索します",
      options: [
        {
          name: "type",
          type: "STRING",
          description: "検索するパッケージマネージャー",
          choices: [
            { name: "NPM", value: "npm" },
            { name: "PYPI", value: "pypi" },
          ],
          required: true,
        },
        {
          name: "name",
          type: "STRING",
          description: "検索キーワード",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "package") {
      const type = interaction.options.getString("type");
      const name = interaction.options.getString("name");

      await interaction.deferReply();
      try {
        if (type === "npm") {
          const res = await fetch(
            `https://api.npms.io/v2/search?q=${name}`
          ).then((res) => res.json());

          const pkg = res.results[0].package;
          await interaction.editReply({
            embeds: [
              {
                color: "RANDOM",
                title: `NPM: ${pkg.name}`,
                url: pkg.links.npm,
                description: pkg.description,
                thumbnail: {
                  url: "https://cdn.taka.cf/images/npm.png",
                },
                fields: [
                  {
                    name: "作者",
                    value: pkg.author ? pkg.author.name : "なし",
                    inline: true,
                  },
                  {
                    name: "バージョン",
                    value: pkg.version,
                    inline: true,
                  },
                  {
                    name: "リポジトリ",
                    value: pkg.links.repository ? pkg.links.repository : "なし",
                    inline: true,
                  },
                  {
                    name: "キーワード",
                    value: pkg.keywords ? pkg.keywords.join(", ") : "なし",
                    inline: true,
                  },
                ],
              },
            ],
          });
        } else if (type === "pypi") {
          const pkg = await fetch(`https://pypi.org/pypi/${name}/json`).then(
            (res) => res.json()
          );

          await interaction.editReply({
            embeds: [
              {
                color: "RANDOM",
                title: `PYPI: ${pkg.info.name}`,
                url: pkg.info.package_url,
                description: pkg.info.summary,
                thumbnail: {
                  url: "https://cdn.taka.cf/images/pypi.png",
                },
                fields: [
                  {
                    name: "作者",
                    value: pkg.info.author ? pkg.info.author : "なし",
                    inline: true,
                  },
                  {
                    name: "バージョン",
                    value: pkg.info.version,
                    inline: true,
                  },
                  {
                    name: "リポジトリ",
                    value: pkg.info.project_urls.Home
                      ? pkg.info.project_urls.Home
                      : "なし",
                    inline: true,
                  },
                  {
                    name: "ライセンス",
                    value: pkg.info.license ? pkg.info.license : "なし",
                    inline: true,
                  },
                  {
                    name: "キーワード",
                    value: pkg.info.keywords ? pkg.info.keywords : "なし",
                    inline: true,
                  },
                ],
              },
            ],
          });
        }
      } catch {
        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "検索ワードを変えてやり直してください",
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "ping",
      description: "pingを表示します",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const user = interaction.options.getUser("user") || interaction.user;
    if (interaction.commandName === "ping") {
      const embed = new MessageEmbed()
        .setTitle("ping")
        .setDescription(`${user}のping ${interaction.client.ws.ping}ms`)
        .setAuthor(
          "deaxBot",
          "https://images-ext-1.discordapp.net/external/e17T8BdgsVm12VGFQwEqJ-TeDQesCqkHpQA7Oa9MCG0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1088129741745311834/d486b816b9bc5d54db9ac99de12f5a21.webp?width=606&height=606"
        )
        .setColor("RANDOM")
        .setTimestamp();
      await interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "qrcode",
      description: "指定されたテキストからQRコードを生成します。",
      options: [
        {
          name: "テキスト",
          description: "QRコードに変換するテキスト",
          type: 3, // 3はSTRING型
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "qrcode") {
      const textOption = interaction.options.getString("テキスト");

      if (!textOption) {
        return interaction.reply({
          content: "テキストを指定してください。",
          ephemeral: true,
        });
      }

      try {
        await QRCode.toFile("qr.png", `${textOption}`);
        const file = new MessageAttachment("./qr.png");
        interaction.reply({ files: [file] });
      } catch (error) {
        console.error(error);
        interaction.reply({
          content: "QRコードの生成中にエラーが発生しました。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

const QRCode = require("qrcode");

client.on("messageCreate", async (message) => {
  try {
    if (message.authodeaxbot) return;
    if (message.content.startsWith("r.qr")) {
      const qr = message.content.split(" ");
      if (!qr) return message.reply("キーワードを入力してください");
      QRCode.toFile("qr.png", `${qr}`);
      message.reply({ files: ["./qr.png"] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "review",
      description: "レビューを送信します",
      options: [
        {
          name: "title",
          type: "STRING",
          description: "タイトルを指定してください",
          required: true,
        },
        {
          name: "star",
          type: "STRING",
          description: "評価を指定してください",
          required: true,
          choices: [
            { name: "☆☆☆☆☆", value: "☆☆☆☆☆" },
            { name: "★☆☆☆☆", value: "★☆☆☆☆" },
            { name: "★★☆☆☆", value: "★★☆☆☆" },
            { name: "★★★☆☆", value: "★★★☆☆" },
            { name: "★★★★☆", value: "★★★★☆" },
            { name: "★★★★★", value: "★★★★★" },
          ],
        },
        {
          name: "username",
          type: "STRING",
          description: "匿名かを選択してください",
          required: true,
          choices: [
            { name: "匿名", value: "匿名" },
            { name: "公表", value: "ユーザー" },
          ],
        },
        {
          name: "description",
          type: "STRING",
          description: "説明を指定してください",
          required: false,
        },
        {
          type: "ATTACHMENT",
          name: "image",
          description: "画像を指定してください",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "review")
      return;

    const userTag = interaction.user.tag;
    const userAvatar = interaction.user.displayAvatarURL();
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const star = interaction.options.getString("star");
    const username = interaction.options.getString("username") || "匿名";
    const image = interaction.options.getAttachment("image");

    const embed = new MessageEmbed()
      .setTitle(title)
      .addField("評価", `${star}`)
      .addField("評価ユーザー", `${username} (${userTag})`)
      .setColor("RANDOM")
      .setThumbnail(userAvatar);

    if (image) {
      embed.setImage(image.url);
    }

    if (description) {
      embed.setDescription(description);
    }

    interaction.reply({ embeds: [embed] });
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "role-all",
      description: "指定したロールをサーバーの全メンバーに付与します",
      options: [
        {
          name: "role",
          description: "ユーザーに付与するロールを指定してください",
          type: "ROLE",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "role-all")
      return;
    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます。",
        ephemeral: true,
      });
    }

    const role = interaction.options.getRole("role");
    if (!role) {
      return interaction.reply("ロールが取得できません");
    }

    if (interaction.guild.me.roles.highest.comparePositionTo(role) <= 0)
      return interaction.reply({
        content:
          "ロール順位が不適切です\nBOTの最高位のロール順位を上げてください",
        ephemeral: true,
      });

    await interaction.deferReply();

    const members = await interaction.guild.members.fetch();
    const totalMembers = members.size;
    let completedMembers = 0;

    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = completedMembers / totalMembers;
      const estimatedTotalTime = elapsed / progress;
      const remainingTime = estimatedTotalTime - elapsed;
      interaction.editReply(
        `処理を実行しています...${completedMembers}/${totalMembers}メンバー 残り時間: ${Math.ceil(
          remainingTime / 1000
        )} seconds.`
      );
    };

    const promises = [];

    members.forEach((member) => {
      if (!member.roles.cache.has(role.id)) {
        const promise = member.roles
          .add(role)
          .then(() => {
            completedMembers++;
            updateProgress();
            console.log(
              `ロールを付与しました:${member.user.tag}:${member.user.id}`
            );
          })
          .catch(console.error);
        promises.push(promise);
      } else {
        completedMembers++;
      }
    });

    Promise.all(promises)
      .then(() => {
        const embed = new MessageEmbed()
          .setTitle("SUCCESS")
          .setDescription(`全てのメンバーに<@&${role.id}>を付与しました`)
          .setColor("RANDOM")
          .setTimestamp();
        interaction.editReply({
          embeds: [embed],
        });
      })
      .catch((error) => {
        console.error(error);
        interaction.editReply("エラーが発生しました");
      });
  } catch (e) {
    console.log(e);
    interaction.reply("エラーが発生しました");
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "removerole-all",
      description: "指定したロールをサーバーの全メンバーから削除します",
      options: [
        {
          name: "role",
          description: "ユーザーから削除するロールを指定してください",
          type: "ROLE",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (
      !interaction.isCommand() ||
      interaction.commandName !== "removerole-all"
    )
      return;

    const role = interaction.options.getRole("role");

    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます",
        ephemeral: true,
      });
    }

    if (!role) {
      return interaction.reply("ロールが取得できません");
    }

    if (interaction.guild.me.roles.highest.comparePositionTo(role) <= 0) {
      return interaction.reply({
        content:
          "ロール順位が不適切です\nBOTの最高位のロール順位を上げてください",
        ephemeral: true,
      });
    }

    const members = await interaction.guild.members.fetch();
    const totalMembers = members.size;
    let completedMembers = 0;

    const startTime = Date.now();

    await interaction.deferReply();

    // 進捗更新関数
    const updateProgress = async () => {
      const elapsed = Date.now() - startTime;
      const progress = completedMembers / totalMembers;
      const estimatedTotalTime = elapsed / (progress || 1); // progressが0の時の対策
      const remainingTime = estimatedTotalTime - elapsed;

      await interaction.editReply(
        `処理を実行しています...${completedMembers}/${totalMembers}メンバー 残り時間: ${Math.ceil(
          remainingTime / 1000
        )} 秒.`
      );
    };

    const promises = [];

    members.forEach((member) => {
      if (member.roles.cache.has(role.id)) {
        const promise = member.roles
          .remove(role)
          .then(async () => {
            completedMembers++;
            await updateProgress(); // 各メンバー処理後に進捗を更新
            console.log(
              `ロールを削除しました:${member.user.tag}:${member.user.id}`
            );
          })
          .catch(console.error);
        promises.push(promise);
      } else {
        completedMembers++;
      }
    });

    // 全てのプロミスが完了するまで待機
    await Promise.all(promises);

    // 完了時のメッセージを送信
    const embed2 = new MessageEmbed()
      .setTitle("SUCCESS")
      .setDescription(`全てのメンバーから<@&${role.id}>を削除しました`)
      .setColor("RANDOM")
      .setTimestamp();
    await interaction.editReply({
      embeds: [embed2],
    });
  } catch (e) {
    console.log(e);
    interaction.editReply("エラーが発生しました");
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "role-info",
      description: "指定されたロールの情報を表示します",
      options: [
        {
          name: "role",
          type: "ROLE",
          description: "情報を表示したいロール",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const { commandName, options } = interaction;
    if (commandName === "role-info") {
      const role = options.getRole("role");

      if (!role) return interaction.reply("指定されたロールが見つかりません");

      const permissions = role.permissions.toArray();
      const permissionNames = permissions.map((permission) =>
        translatePermission(permission)
      );

      const createdAt = role.createdAt;
      const createdAtString = `${createdAt.getFullYear()}/${
        createdAt.getMonth() + 1
      }/${createdAt.getDate()} 　　　　　${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;
      const daysAgo = Math.floor(
        (Date.now() - createdAt) / (1000 * 60 * 60 * 24)
      );

      const embed = new MessageEmbed()
        .setColor(role.color || "BLUE")
        .setTitle(`ロール情報:${role.name}`)
        .addField("ID", `${role.id}`, true)
        .addField("メンション", `<@&${role.id}>`, true)
        .addField("メンバー数", `${role.members.size}`, true)
        .addField("ポジション", `${role.position}`, true)
        .addField("メンション可否", role.mentionable ? "可能" : "不可能", true)
        .addField(
          "表示形式",
          role.hoist ? "個別に表示させる" : "混合表示",
          true
        )
        .addField("作成日時", `${createdAtString} (${daysAgo}日前)`, true)
        .addField(
          "ロールカラー",
          `\`#${role.color.toString(16).padStart(6, "0")}\``,
          true
        )
        .addField("権限", permissionNames.join(", "), true);
      interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

function translatePermission(permission) {
  try {
    const permissionsMap = {
      CREATE_INSTANT_INVITE: "`招待の作成`",
      KICK_MEMBERS: "`メンバーのキック`",
      BAN_MEMBERS: "`メンバーのBAN`",
      ADMINISTRATOR: "`管理者`",
      MANAGE_CHANNELS: "`チャンネルの管理`",
      MANAGE_GUILD: "`サーバーの管理`",
      ADD_REACTIONS: "`リアクションの追加`",
      VIEW_AUDIT_LOG: "`監査ログの表示`",
      PRIORITY_SPEAKER: "`優先発言者`",
      STREAM: "`ストリーム`",
      VIEW_CHANNEL: "`チャンネルの閲覧`",
      SEND_MESSAGES: "`メッセージの送信`",
      SEND_TTS_MESSAGES: "`TTSメッセージの送信`",
      MANAGE_MESSAGES: "`メッセージの管理`",
      EMBED_LINKS: "`埋め込みリンク`",
      ATTACH_FILES: "`ファイルの添付`",
      READ_MESSAGE_HISTORY: "`メッセージ履歴の表示`",
      MENTION_EVERYONE: "`全員メンション`",
      USE_EXTERNAL_EMOJIS: "`外部絵文字の使用`",
      VIEW_GUILD_INSIGHTS: "`サーバーインサイトの表示`",
      CONNECT: "`接続`",
      SPEAK: "`発言`",
      MUTE_MEMBERS: "`メンバーのミュート`",
      DEAFEN_MEMBERS: "`メンバーのデフェン`",
      MOVE_MEMBERS: "`メンバーの移動`",
      USE_VAD: "`音声検出の使用`",
      CHANGE_NICKNAME: "`ニックネームの変更`",
      MANAGE_NICKNAMES: "`ニックネームの管理`",
      MANAGE_ROLES: "`役職の管理`",
      MANAGE_WEBHOOKS: "`Webhooksの管理`",
      MANAGE_EMOJIS_AND_STICKERS: "`絵文字とスタンプの管理`",
      USE_APPLICATION_COMMANDS: "`アプリケーションコマンドの使用`",
      REQUEST_TO_SPEAK: "`発言リクエストの送信`",
      MANAGE_EVENTS: "`イベントの管理`",
      MANAGE_THREADS: "`スレッドの管理`",
      USE_PUBLIC_THREADS: "`パブリックスレッドの使用`",
      CREATE_PUBLIC_THREADS: "`パブリックスレッドの作成`",
      USE_PRIVATE_THREADS: "`プライベートスレッドの使用`",
      CREATE_PRIVATE_THREADS: "`プライベートスレッドの作成`",
      USE_EXTERNAL_STICKERS: "`外部ステッカーの使用`",
      SEND_MESSAGES_IN_THREADS: "`スレッド内でのメッセージ送信`",
      START_EMBEDDED_ACTIVITIES: "`埋め込みアクティビティの開始`",
      MODERATE_MEMBERS: "`メンバーのモデレーション`",
      VIEW_CREATOR_MONETIZATION_ANALYTICS: "`クリエイターの収益分析の表示`",
      USE_SOUNDBOARD: "`サウンドボードの使用`",
    };

    return permissionsMap[permission] || `\`${permission}\``;
  } catch (e) {
    console.log(e);
  }
}

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "rolepanel",
      description: "ロールパネルを設置",
      options: [
        {
          type: "ROLE",
          name: "ロール1",
          description: "付与するロールを指定",
          required: true,
        },
        {
          type: "ROLE",
          name: "ロール2",
          description: "付与するロールを指定",
        },
        {
          type: "ROLE",
          name: "ロール3",
          description: "付与するロールを指定",
        },
        {
          type: "ROLE",
          name: "ロール4",
          description: "付与するロールを指定",
        },
        {
          type: "ROLE",
          name: "ロール5",
          description: "付与するロールを指定",
        },
        {
          type: "ROLE",
          name: "ロール6",
          description: "付与するロールを指定",
        },
        {
          type: "STRING",
          name: "タイトル",
          description: "パネルのタイトル",
        },
        {
          type: "STRING",
          name: "概要",
          description: "パネルの概要",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

function getRandomColor() {
  try {
    const colors = ["PRIMARY", "SECONDARY", "SUCCESS", "DANGER"];
    return colors[Math.floor(Math.random() * colors.length)];
  } catch (e) {
    console.log(e);
  }
}

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "rolepanel")
      return;
    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます",
        ephemeral: true,
      });
    }
    const rolesToManage = [];
    const buttons = [];

    for (let i = 1; i <= 5; i++) {
      const roleOption = interaction.options.getRole(`ロール${i}`);
      if (roleOption) {
        rolesToManage.push(roleOption);
        buttons.push(
          new MessageButton()
            .setCustomId(`manageRole_${roleOption.id}`)
            .setLabel(`${roleOption.name}`)
            .setStyle(getRandomColor())
        );
      }
    }

    if (rolesToManage.length === 0) {
      await interaction.reply({
        content: `有効なロールが指定されていません。`,
        ephemeral: true,
      });
      return;
    }

    const title = interaction.options.getString("タイトル") || "ロールパネル";
    const description =
      interaction.options.getString("概要") || "クリックしてロールを受け取る";

    const row = new MessageActionRow().addComponents(...buttons);

    const member = await interaction.guild.members
      .fetch(interaction.user.id)
      .catch(console.error);

    if (member) {
      rolesToManage.forEach((roleToManage) => {
        if (member.roles.cache.has(roleToManage.id)) {
          row.components
            .find((comp) => comp.customId === `manageRole_${roleToManage.id}`)
            .setStyle("DANGER");
        }
      });
    }

    const embed = new MessageEmbed()
      .setTitle(title)
      .setDescription(description)
      .setColor("BLUE");

    await interaction.reply({
      content: "以下のボタンをクリックしてロールを受け取ってください。",
      embeds: [embed],
      components: [row],
    });
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isButton()) {
      const roleId = interaction.customId.split("_")[1];
      const roleToManage = interaction.guild.roles.cache.get(roleId);
      const member = await interaction.guild.members
        .fetch(interaction.user.id)
        .catch(console.error);
      if (interaction.customId.startsWith("manageRole_")) {
        if (roleToManage && member) {
          if (member.roles.cache.has(roleToManage.id)) {
            await member.roles.remove(roleToManage.id);
            await interaction.reply({
              content: `ロール "${roleToManage.name}" を取り消しました。`,
              ephemeral: true,
            });
          } else {
            await member.roles.add(roleToManage.id);
            await interaction.reply({
              content: `ロール "${roleToManage.name}" を受け取りました。`,
              ephemeral: true,
            });
          }
        } else {
          await interaction.reply({
            content: `指定されたロールが存在しないか、ユーザーのロール情報を取得できませんでした。`,
            ephemeral: true,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "server",
      description: "サーバーの詳細を表示",
      options: [],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "server")
      return;

    const guild = await client.guilds.fetch(interaction.guildId);
    const ownerTag = interaction.guild.owner;
    const roles = guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map((role) => role.toString());
    const members = guild.members.cache;
    const channels = guild.channels.cache;
    const emojis = guild.emojis.cache;

    const serverEmbed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(guild.name)
      .setDescription(`サーバー詳細情報`)
      .setThumbnail(guild.iconURL())
      .addFields(
        { name: "サーバーID", value: `${guild.id}`, inline: true },
        {
          name: "作成日",
          value: `${guild.createdAt.toLocaleDateString("ja-JP")}`,
          inline: true,
        },
        { name: "メンバー数", value: `${guild.memberCount}`, inline: true },
        { name: "役職数", value: `${roles.length}`, inline: true },
        {
          name: "テキストチャンネル数",
          value: `${
            channels.filter((channel) => channel.type === "GUILD_TEXT").size
          }`,
          inline: true,
        },
        {
          name: "ボイスチャンネル数",
          value: `${
            channels.filter((channel) => channel.type === "GUILD_VOICE").size
          }`,
          inline: true,
        },
        { name: "絵文字数", value: `${emojis.size}`, inline: true }
      );

    interaction.reply({ embeds: [serverEmbed] });
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "servermute",
      description: "指定されたユーザーをサーバーミュートします",
      options: [
        {
          name: "user",
          type: "USER",
          description: "ミュートしたいユーザーを選択してください。",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "servermute")
      return;

    const user = interaction.options.getUser("user");

    if (!user) {
      return interaction.reply({
        content: "ユーザーが指定されていません。",
        ephemeral: true,
      });
    }

    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({
        content: "指定されたユーザーはこのサーバーにいません。",
        ephemeral: true,
      });
    }

    try {
      await member.voice.setMute(true);
      const muteembed = new MessageEmbed()
        .setTitle("サーバーミュート")
        .setDescription(`<@${user.id}> のサーバーミュートを実行しました。`)
        .setTimestamp()
        .setColor("RANDOM");
      await interaction.reply({ embeds: [muteembed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "ユーザーをサーバーミュートできませんでした。",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "serverunmute",
      description: "指定されたユーザーのサーバーミュートを解除します",
      options: [
        {
          name: "user",
          type: "USER",
          description: "ミュートを解除したいユーザーを選択してください。",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "serverunmute")
      return;

    const user = interaction.options.getUser("user");

    if (!user) {
      return interaction.reply({
        content: "ユーザーが指定されていません。",
        ephemeral: true,
      });
    }

    const member = interaction.guild.members.cache.get(user.id);

    if (!member) {
      return interaction.reply({
        content: "指定されたユーザーはこのサーバーにいません。",
        ephemeral: true,
      });
    }

    try {
      await member.voice.setMute(false);
      const unmuteembed = new MessageEmbed()
        .setTitle("サーバーミュート解除")
        .setDescription(`<@${user.id}> のサーバーミュート解除を実行しました。`)
        .setTimestamp()
        .setColor("RANDOM");
      await interaction.reply({ embeds: [unmuteembed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "ユーザーのサーバーミュートを解除できませんでした。",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "script",
      description: "プログラムを実行します",
      options: [
        {
          name: "lang",
          type: "STRING",
          description: "プログラミング言語を選択",
          choices: [
            { name: "JavaScript", value: "JavaScript" },
            { name: "Python", value: "Python" },
            { name: "Bash", value: "Bash" },
          ],
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.commandName === "script") {
      interaction.reply({
        content: `この機能は停止されています`,
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.commandName === "!script") {
      const lang = interaction.options.getString("lang");

      const modal = new Modal()
        .setCustomId(`script_${lang}`)
        .setTitle("コードを実行")

        .addComponents(
          new TextInputComponent()
            .setCustomId("code")
            .setLabel(`${lang}を実行`)
            .setPlaceholder("実行するコードを入力")
            .setMaxLength(500)
            .setRequired(true)
            .setStyle("LONG")
        );

      showModal(modal, {
        client: client,
        interaction: interaction,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId.startsWith("script_")) {
      const data = interaction.customId.split("_");
      const code = interaction.fields.getTextInputValue("code");

      const lang = {
        JavaScript: {
          type: "js",
          compiler: "nodejs-16.14.0",
        },
        Python: {
          type: "py",
          compiler: "cpython-3.10.2",
        },
        Bash: {
          type: "bash",
          compiler: "bash",
        },
      };

      const controller = new AbortController();
      setTimeout(async () => {
        controller.abort();
      }, 3000);

      await interaction.deferReply();
      try {
        const res = await fetch("https://wandbox.org/api/compile.json", {
          method: "POST",
          header: {
            "content-type": "application/json",
          },
          signal: controller.signal,
          body: JSON.stringify({
            code: code,
            compiler: lang[data[1]].compiler,
          }),
        }).then((res) => res.json());

        if (res.status === "0") {
          try {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  author: {
                    name: "実行しました",
                    icon_url: "https://cdn.taka.cf/images/system/success.png",
                  },
                  description: `**コード**\n\`\`\`${
                    lang[data[1]].type
                  }\n${code}\`\`\`\n**結果**\n\`\`\`${
                    res.program_output || "なし"
                  }\`\`\``,
                  footer: {
                    text: `${data[1]}`,
                  },
                },
              ],
            });
          } catch {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  author: {
                    name: "実行しました",
                    icon_url: "https://cdn.taka.cf/images/system/success.png",
                  },
                  description: `**コード**\n\`\`\`${
                    lang[data[1]].type
                  }\n${code}\`\`\`\n**結果**\n結果が長すぎた為添付ファイルに出力しました`,
                  footer: {
                    text: `${data[1]}`,
                  },
                },
              ],
              files: [
                new AttachmentBuilder()
                  .setFile(Buffer.from(res.program_output, "UTF-8"))
                  .setName("data.txt"),
              ],
            });
          }
        } else {
          try {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  author: {
                    name: "実行できませんでした",
                    icon_url: "https://cdn.taka.cf/images/system/error.png",
                  },
                  description: `**コード**\n\`\`\`${
                    lang[data[1]].type
                  }\n${code}\`\`\`\n**エラー**\n\`\`\`${
                    res.program_error
                  }\`\`\``,
                  footer: {
                    text: `${data[1]}`,
                  },
                },
              ],
            });
          } catch {
            await interaction.editReply({
              embeds: [
                {
                  color: "RANDOM",
                  author: {
                    name: "実行できませんでした",
                    icon_url: "https://cdn.taka.cf/images/system/error.png",
                  },
                  description: `**コード**\n\`\`\`${
                    lang[data[1]].type
                  }\n${code}\`\`\`\n**エラー**\nエラーが長すぎる為添付ファイルに出力しました`,
                  footer: {
                    text: `${data[1]}`,
                  },
                },
              ],
              files: [
                new AttachmentBuilder()
                  .setFile(Buffer.from(res.program_error, "UTF-8"))
                  .setName("error.txt"),
              ],
            });
          }
        }
      } catch {
        await interaction.editReply({
          embeds: [
            {
              author: {
                name: "正常に実行できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              color: "RANDOM",
              description: "実行がタイムアウトしました",
              footer: {
                text: `${data[1]}`,
              },
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "shop-create-daikou",
      description: "代行用自販機を設置します",
      options: [
        {
          type: "STRING",
          name: "商品1-名前",
          description: "商品1の名前",
          required: true,
        },
        {
          type: "NUMBER",
          name: "商品1-値段",
          description: "商品1の値段",
          required: true,
        },
        {
          type: "STRING",
          name: "タイトル",
          description: "パネルのタイトル",
        },
        {
          type: "STRING",
          name: "概要",
          description: "パネルの概要",
        },
        {
          type: "ATTACHMENT",
          name: "画像",
          description: "パネルに乗せる画像",
        },
        {
          type: "CHANNEL",
          name: "カテゴリ",
          description: "チケットを作成するカテゴリ",
          channel_types: [4],
        },
        {
          type: "ROLE",
          name: "ロール",
          description: "チケット作成時にメンションするロール",
        },
        {
          type: "STRING",
          name: "商品2-名前",
          description: "商品2の名前",
        },
        {
          type: "NUMBER",
          name: "商品2-値段",
          description: "商品2の値段",
        },
        {
          type: "STRING",
          name: "商品3-名前",
          description: "商品3の名前",
        },
        {
          type: "NUMBER",
          name: "商品3-値段",
          description: "商品3の値段",
        },
        {
          type: "STRING",
          name: "商品4-名前",
          description: "商品4の名前",
        },
        {
          type: "NUMBER",
          name: "商品4-値段",
          description: "商品4の値段",
        },
        {
          type: "STRING",
          name: "商品5-名前",
          description: "商品5の名前",
        },
        {
          type: "NUMBER",
          name: "商品5-値段",
          description: "商品5の値段",
        },
        {
          type: "STRING",
          name: "商品6-名前",
          description: "商品6の名前",
        },
        {
          type: "NUMBER",
          name: "商品6-値段",
          description: "商品6の値段",
        },
        {
          type: "STRING",
          name: "商品7-名前",
          description: "商品7の名前",
        },
        {
          type: "NUMBER",
          name: "商品7-値段",
          description: "商品7の値段",
        },
        {
          type: "STRING",
          name: "商品8-名前",
          description: "商品8の名前",
        },
        {
          type: "NUMBER",
          name: "商品8-値段",
          description: "商品8の値段",
        },
        {
          type: "STRING",
          name: "商品9-名前",
          description: "商品9の名前",
        },
        {
          type: "NUMBER",
          name: "商品9-値段",
          description: "商品9の値段",
        },
        {
          type: "STRING",
          name: "商品10-名前",
          description: "商品10の名前",
        },
        {
          type: "NUMBER",
          name: "商品10-値段",
          description: "商品10の値段",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "shop-create-daikou") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      let title = interaction.options.getString("タイトル"),
        description = interaction.options.getString("概要"),
        image = interaction.options.getAttachment("画像"),
        category = interaction.options.getChannel("カテゴリ") || "undefined",
        role = interaction.options.getRole("ロール") || "undefined";
      let name1 = interaction.options.getString("商品1-名前"),
        value1 = interaction.options.getNumber("商品1-値段"),
        name2 = interaction.options.getString("商品2-名前"),
        value2 = interaction.options.getNumber("商品2-値段"),
        name3 = interaction.options.getString("商品3-名前"),
        value3 = interaction.options.getNumber("商品3-値段"),
        name4 = interaction.options.getString("商品4-名前"),
        value4 = interaction.options.getNumber("商品4-値段"),
        name5 = interaction.options.getString("商品5-名前"),
        value5 = interaction.options.getNumber("商品5-値段"),
        name6 = interaction.options.getString("商品6-名前"),
        value6 = interaction.options.getNumber("商品6-値段"),
        name7 = interaction.options.getString("商品7-名前"),
        value7 = interaction.options.getNumber("商品7-値段"),
        name8 = interaction.options.getString("商品8-名前"),
        value8 = interaction.options.getNumber("商品8-値段"),
        name9 = interaction.options.getString("商品9-名前"),
        value9 = interaction.options.getNumber("商品9-値段"),
        name10 = interaction.options.getString("商品10-名前"),
        value10 = interaction.options.getNumber("商品10-値段");
      if (title == null) title = "購入パネル";
      if (description == null) description = "下のボタンを押すと購入できます。";

      const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("RANDOM");
      if (image) embed.setImage(image.url);
      if (name1 && value1) embed.addField(`1.${name1}`, `> ${value1}円`);
      if (name2 && value2) embed.addField(`2.${name2}`, `> ${value2}円`);
      if (name3 && value3) embed.addField(`3.${name3}`, `> ${value3}円`);
      if (name4 && value4) embed.addField(`4.${name4}`, `> ${value4}円`);
      if (name5 && value5) embed.addField(`5.${name5}`, `> ${value5}円`);
      if (name6 && value6) embed.addField(`6.${name6}`, `> ${value6}円`);
      if (name7 && value7) embed.addField(`7.${name7}`, `> ${value7}円`);
      if (name8 && value8) embed.addField(`8.${name8}`, `> ${value8}円`);
      if (name9 && value9) embed.addField(`9.${name9}`, `> ${value9}円`);
      if (name10 && value10) embed.addField(`10.${name10}`, `> ${value10}円`);
      interaction.reply({
        embeds: [embed],
        components: [
          newbutton([
            {
              id: `daikou2-${category.id}-${role.id}`,
              label: "購入",
              style: "SUCCESS",
            },
          ]),
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    if (interaction.customId.startsWith("daikou2")) {
      const customId = `${
        interaction.customId
      }-${interaction.message.embeds[0].fields
        .map((field) => field.name.charAt(0))
        .join("/")}`;
      const modal = new Modal()
        .setCustomId(customId)
        .setTitle("購入情報入力フォーム")
        .addComponents(
          new TextInputComponent()
            .setCustomId("number")
            .setLabel("依頼内容")
            .setStyle("LONG")
            .setPlaceholder("依頼内容を入力してください")
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("quantity")
            .setLabel("注文数")
            .setStyle("SHORT")
            .setPlaceholder("数字で入力してください")
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("paypay")
            .setLabel("送金リンク")
            .setStyle("LONG")
            .setPlaceholder(
              "[PayPay] 受け取り依頼が届きました。下記リンクより、受け取りを完了してください。\n\nhttps://pay.paypay.ne.jp/0123456789abcdef"
            )
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("address")
            .setLabel("メールアドレス")
            .setStyle("LONG")
            .setPlaceholder("example@gmail.com")
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("password")
            .setLabel("パスワード")
            .setStyle("LONG")
            .setPlaceholder("abcdef12345")
            .setRequired(true)
        );
      showModal(modal, {
        client: client,
        interaction: interaction,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("modalSubmit", async (interaction) => {
  try {
    console.log(interaction.customId);
    if (interaction.customId.startsWith("daikou2-")) {
      const [number, quantity, paypay, address, password] = [
        "number",
        "quantity",
        "paypay",
        "address",
        "password",
      ].map((id) => interaction.getTextInputValue(id));
      let link;
      const value = paypay.split(/\r\n|\n/g);
      for (let i in value) {
        if (value[i].match(/^https?:\/\/[^   ]/i)) {
          link = value[i];
        }
      }
      if (link == undefined)
        return interaction.reply({
          content: "PayPayの送金リンクが検出されませんでした",
          ephemeral: true,
        });
      if (address == undefined)
        return interaction.reply({
          content: "メールアドレスが入力されませんでした",
          ephemeral: true,
        });
      if (password == undefined)
        return interaction.reply({
          content: "パスワードが入力されませんでした",
          ephemeral: true,
        });
      const category = interaction.customId.split("-")[1];
      const role = interaction.customId.split("-")[2];
      const numbers = interaction.customId.split("-")[3].split("/");

      let newChannel;

      const overwrites = [
        {
          id: interaction.user.id,
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        },
      ];

      if (role !== "undefined") {
        overwrites.push({
          id: role,
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        });
      }

      if (category === "undefined") {
        newChannel = await interaction.guild.channels.create(
          `🎫｜${interaction.user.username}`,
          {
            type: "GUILD_TEXT",
            topic: interaction.user.id,
            permissionOverwrites: overwrites,
          }
        );
      } else {
        newChannel = await interaction.guild.channels.create(
          `🎫｜${interaction.user.username}`,
          {
            type: "GUILD_TEXT",
            parent: category,
            topic: interaction.user.id,
            permissionOverwrites: overwrites,
          }
        );
      }
      interaction.reply({
        content: `${newChannel.toString()}を作成しました。`,
        ephemeral: true,
      });
      const info_embed = new MessageEmbed()
        .setTitle("スタッフの対応をお待ちください")
        .addField("依頼内容:", `>>> ${number}`)
        .addField("個数:", `>>> ${quantity}`)
        .addField("送金リンク:", `>>> ${link}`)
        .addField("メールアドレス:", `>>> ${address}`)
        .addField("パスワード:", `>>> ${password}`)
        .setColor("RANDOM");
      const del_embed = new MessageEmbed()
        .setDescription("チケットを削除したい場合は下のボタンを押してください")
        .setColor("RANDOM");
      newChannel.send({
        content: `<@${interaction.user.id}>`,
        embeds: [info_embed, del_embed],
        components: [
          newbutton([
            { id: "ifdelete", label: "チケットを削除", style: "DANGER" },
          ]),
        ],
      });
      if (role != "undefined") {
        const msg = await newChannel.send(`<@&${role.toString()}>`);
        setTimeout(function () {
          msg.delete();
        }, 3000);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "shop-create",
      description: "自販機を設置します",
      options: [
        {
          type: "STRING",
          name: "商品1-名前",
          description: "商品1の名前",
          required: true,
        },
        {
          type: "NUMBER",
          name: "商品1-値段",
          description: "商品1の値段",
          required: true,
        },
        {
          type: "STRING",
          name: "タイトル",
          description: "パネルのタイトル",
        },
        {
          type: "STRING",
          name: "概要",
          description: "パネルの概要",
        },
        {
          type: "ATTACHMENT",
          name: "画像",
          description: "パネルに乗せる画像",
        },
        {
          type: "CHANNEL",
          name: "カテゴリ",
          description: "チケットを作成するカテゴリ",
          channel_types: [4],
        },
        {
          type: "ROLE",
          name: "ロール",
          description: "チケット作成時にメンションするロール",
        },
        {
          type: "STRING",
          name: "商品2-名前",
          description: "商品2の名前",
        },
        {
          type: "NUMBER",
          name: "商品2-値段",
          description: "商品2の値段",
        },
        {
          type: "STRING",
          name: "商品3-名前",
          description: "商品3の名前",
        },
        {
          type: "NUMBER",
          name: "商品3-値段",
          description: "商品3の値段",
        },
        {
          type: "STRING",
          name: "商品4-名前",
          description: "商品4の名前",
        },
        {
          type: "NUMBER",
          name: "商品4-値段",
          description: "商品4の値段",
        },
        {
          type: "STRING",
          name: "商品5-名前",
          description: "商品5の名前",
        },
        {
          type: "NUMBER",
          name: "商品5-値段",
          description: "商品5の値段",
        },
        {
          type: "STRING",
          name: "商品6-名前",
          description: "商品6の名前",
        },
        {
          type: "NUMBER",
          name: "商品6-値段",
          description: "商品6の値段",
        },
        {
          type: "STRING",
          name: "商品7-名前",
          description: "商品7の名前",
        },
        {
          type: "NUMBER",
          name: "商品7-値段",
          description: "商品7の値段",
        },
        {
          type: "STRING",
          name: "商品8-名前",
          description: "商品8の名前",
        },
        {
          type: "NUMBER",
          name: "商品8-値段",
          description: "商品8の値段",
        },
        {
          type: "STRING",
          name: "商品9-名前",
          description: "商品9の名前",
        },
        {
          type: "NUMBER",
          name: "商品9-値段",
          description: "商品9の値段",
        },
        {
          type: "STRING",
          name: "商品10-名前",
          description: "商品10の名前",
        },
        {
          type: "NUMBER",
          name: "商品10-値段",
          description: "商品10の値段",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "shop-create") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      let title = interaction.options.getString("タイトル") || "購入パネル",
        description =
          interaction.options.getString("概要") ||
          "下のボタンを押すと購入できます。",
        image = interaction.options.getAttachment("画像"),
        category = interaction.options.getChannel("カテゴリ") || "undefined",
        role = interaction.options.getRole("ロール") || "undefined";

      let name1 = interaction.options.getString("商品1-名前"),
        value1 = interaction.options.getNumber("商品1-値段"),
        name2 = interaction.options.getString("商品2-名前"),
        value2 = interaction.options.getNumber("商品2-値段"),
        name3 = interaction.options.getString("商品3-名前"),
        value3 = interaction.options.getNumber("商品3-値段"),
        name4 = interaction.options.getString("商品4-名前"),
        value4 = interaction.options.getNumber("商品4-値段"),
        name5 = interaction.options.getString("商品5-名前"),
        value5 = interaction.options.getNumber("商品5-値段"),
        name6 = interaction.options.getString("商品6-名前"),
        value6 = interaction.options.getNumber("商品6-値段"),
        name7 = interaction.options.getString("商品7-名前"),
        value7 = interaction.options.getNumber("商品7-値段"),
        name8 = interaction.options.getString("商品8-名前"),
        value8 = interaction.options.getNumber("商品8-値段"),
        name9 = interaction.options.getString("商品9-名前"),
        value9 = interaction.options.getNumber("商品9-値段"),
        name10 = interaction.options.getString("商品10-名前"),
        value10 = interaction.options.getNumber("商品10-値段");

      const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("RANDOM");

      if (image) embed.setImage(image.url);
      if (name1 && value1) embed.addField(`1.${name1}`, `> ${value1}円`);
      if (name2 && value2) embed.addField(`2.${name2}`, `> ${value2}円`);
      if (name3 && value3) embed.addField(`3.${name3}`, `> ${value3}円`);
      if (name4 && value4) embed.addField(`4.${name4}`, `> ${value4}円`);
      if (name5 && value5) embed.addField(`5.${name5}`, `> ${value5}円`);
      if (name6 && value6) embed.addField(`6.${name6}`, `> ${value6}円`);
      if (name7 && value7) embed.addField(`7.${name7}`, `> ${value7}円`);
      if (name8 && value8) embed.addField(`8.${name8}`, `> ${value8}円`);
      if (name9 && value9) embed.addField(`9.${name9}`, `> ${value9}円`);
      if (name10 && value10) embed.addField(`10.${name10}`, `> ${value10}円`);

      interaction.reply({
        embeds: [embed],
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId(`vending-${category.id}-${role.id}`)
              .setLabel("購入")
              .setStyle("SUCCESS")
          ),
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    if (interaction.customId.startsWith("vending")) {
      const customId = `${
        interaction.customId
      }-${interaction.message.embeds[0].fields
        .map((field) => field.name.charAt(0))
        .join("/")}`;
      const modal = new Modal()
        .setCustomId(customId)
        .setTitle("購入情報入力フォーム")
        .addComponents(
          new TextInputComponent()
            .setCustomId("number")
            .setLabel("商品番号")
            .setStyle("SHORT")
            .setPlaceholder("数字で入力してください")
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("quantity")
            .setLabel("個数")
            .setStyle("SHORT")
            .setPlaceholder("数字で入力してください")
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("paypay")
            .setLabel("送金リンク")
            .setStyle("LONG")
            .setPlaceholder(
              "[PayPay] 受け取り依頼が届きました。下記リンクより、受け取りを完了してください。\n\nhttps://pay.paypay.ne.jp/0123456789abcdef"
            )
            .setRequired(true),
          new TextInputComponent()
            .setCustomId("paypassword")
            .setLabel("PayPayリンクパスワード")
            .setStyle("LONG")
            .setPlaceholder(
              "1234:(パスワードを設定している場合は入力してください)"
            )
            .setRequired(false)
        );
      showModal(modal, {
        client: client,
        interaction: interaction,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("modalSubmit", async (interaction) => {
  try {
    console.log(interaction.customId);
    if (interaction.customId.startsWith("vending-")) {
      const [number, quantity, paypay, paypassword] = [
        "number",
        "quantity",
        "paypay",
        "paypassword",
      ].map((id) => interaction.getTextInputValue(id));
      let link;
      const value = paypay.split(/\r\n|\n/g);
      const paypayUrlPattern =
        /^(https:\/\/pay\.paypay\.ne\.jp\/[a-zA-Z0-9]+|https:\/\/www\.paypay\.ne\.jp\/app\/p2p\/[a-zA-Z0-9]+\?pid=SMS&link_key=[a-zA-Z0-9]+)$/i;

      for (let i in value) {
        if (value[i].match(paypayUrlPattern)) {
          link = value[i];
        }
      }

      if (link === undefined) {
        return interaction.reply({
          content: "PayPayの送金リンクが検出されませんでした",
          ephemeral: true,
        });
      }

      const category = interaction.customId.split("-")[1];
      const role = interaction.customId.split("-")[2];
      const numbers = interaction.customId.split("-")[3].split("/");

      if (!numbers.includes(number))
        return interaction.reply({
          content: "登録されていない商品番号です",
          ephemeral: true,
        });

      const extractVerificationCode = (url) => {
        const parsedUrl = new URL(url);
        const pathSegments = parsedUrl.pathname.split("/");

        if (pathSegments.length > 1) {
          return pathSegments[pathSegments.length - 1];
        }

        const queryParams = parsedUrl.searchParams;
        if (queryParams.has("link_key")) {
          return queryParams.get("link_key");
        }

        return null;
      };

      const verificationCode = extractVerificationCode(link);
      const clientUuid = uuid.v4();
      const baseUrl = "https://www.paypay.ne.jp/app/v2/p2p-api/getP2PLinkInfo";
      const queryParams = new URLSearchParams({
        verificationCode: verificationCode,
        client_uuid: clientUuid,
      });

      const pathHeaderValue = `/app/v2/p2p-api/getP2PLinkInfo?${queryParams.toString()}`;
      const refererUrl = `https://www.paypay.ne.jp/app/p2p/${verificationCode}?pid=SMS&link_key=${verificationCode}`;

      const headers = {
        authority: "www.paypay.ne.jp",
        method: "GET",
        path: pathHeaderValue,
        scheme: "https",
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "ja;q=0.9",
        Referer: refererUrl,
        "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Brave";v="126"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      };

      const response = await axios.get(baseUrl, {
        headers: headers,
        params: queryParams,
      });

      const data = response.data;
      const payload = data.payload || {};
      const pendingP2PInfo = payload.pendingP2PInfo || {};

      const amount = pendingP2PInfo.amount || 0;
      const expiredAt = pendingP2PInfo.expiredAt;
      const isSetPasscode = pendingP2PInfo.isSetPasscode || false;

      const dataInfo = payload.message?.data || {};
      const transactionStatus =
        dataInfo.status === "COMPLETED"
          ? "受け取り済み"
          : dataInfo.status === "CANCELLED"
          ? "キャンセル"
          : dataInfo.status === "PENDING"
          ? "未受け取り"
          : "UNKNOWN";

      const currentTime = DateTime.utc();
      const expiredTime = expiredAt
        ? DateTime.fromISO(expiredAt, { zone: "utc" })
        : null;
      const isExpired = expiredTime ? expiredTime < currentTime : false;

      if (transactionStatus !== "未受け取り" || isExpired) {
        return interaction.reply({
          content: `このリンクは ${
            transactionStatus === "受け取り済み"
              ? "すでに受け取り済み"
              : "期限切れ"
          } です。`,
          ephemeral: true,
        });
      }

      if (isSetPasscode && (!paypassword || paypassword.length > 4)) {
        return interaction.reply({
          content:
            paypassword && paypassword.length > 3
              ? "パスワードが間違っています。"
              : "パスワードがかかっています。パスワードを入力してください。",
          ephemeral: true,
        });
      }

      let newChannel;

      const overwrites = [
        {
          id: interaction.user.id,
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        },
      ];

      if (role !== "undefined") {
        overwrites.push({
          id: role,
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        });
      }

      if (category === "undefined") {
        newChannel = await interaction.guild.channels.create(
          `🎫｜${interaction.user.username}`,
          {
            type: "GUILD_TEXT",
            topic: interaction.user.id,
            permissionOverwrites: overwrites,
          }
        );
      } else {
        newChannel = await interaction.guild.channels.create(
          `🎫｜${interaction.user.username}`,
          {
            type: "GUILD_TEXT",
            parent: category,
            topic: interaction.user.id,
            permissionOverwrites: overwrites,
          }
        );
      }
      interaction.reply({
        content: `${newChannel.toString()}を作成しました。`,
        ephemeral: true,
      });
      console.log(`チャンネル ${newChannel.name} が作成されました。`);
      console.log(`金額: ${amount}`);

      const info_embed = new MessageEmbed()
        .setTitle("スタッフの対応をお待ちください")
        .addField("商品番号:", `>>> ${number}`)
        .addField("個数:", `>>> ${quantity}`)
        .addField("送金リンク:", `>>> ${link}`)
        .addField("送金金額:", `>>> ${amount}`)
        .setColor("RANDOM");

      if (paypassword) {
        info_embed.addField("PayPayパスワード:", `>>> ${paypassword}`);
      }

      const del_embed = new MessageEmbed()
        .setDescription("チケットを削除したい場合は下のボタンを押してください")
        .setColor("RANDOM");
      newChannel.send({
        content: `<@${interaction.user.id}>`,
        embeds: [info_embed, del_embed],
        components: [
          newbutton([
            { id: "ifdelete", label: "チケットを削除", style: "DANGER" },
            { id: "log", label: "ログを保存", style: "SECONDARY" },
          ]),
        ],
      });
      if (role != "undefined") {
        const msg = await newChannel.send(`<@&${role.toString()}>`);
        setTimeout(function () {
          msg.delete();
        }, 3000);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    if (interaction.customId == "ifdelete") {
      if (!interaction.isButton()) return;
      const messages = await interaction.channel.messages.fetch({ limit: 100 });
      const fileFormat = "txt";
      const formattedMessages = ticketMessages(messages, fileFormat);
      const name = interaction.channel.name;
      const guild = interaction.guild.name;
      const fileName = `${guild}-${name}.${fileFormat}`;
      const attachment = new MessageAttachment(
        Buffer.from(formattedMessages),
        fileName
      );
      const ch = "1242199850104262687";
      const ch2 = await interaction.client.channels.fetch(ch);
      ch2.send({ files: [attachment] });
      interaction.reply({
        ephemeral: true,
        embeds: [
          new MessageEmbed()
            .setTitle("チケットを閉じる")
            .setDescription(`本当にチケットを閉じますか？`)
            .setColor("RANDOM"),
        ],
        components: [
          {
            type: "ACTION_ROW",
            components: [
              {
                type: "BUTTON",
                customId: "delete",
                label: "閉じる",
                style: "SUCCESS",
              },
              {
                type: "BUTTON",
                customId: "cancel",
                label: "キャンセル",
                style: "DANGER",
              },
            ],
          },
        ],
      });
    }
    if (interaction.customId == "cancel") {
      const embed = new MessageEmbed()
        .setTitle("キャンセル")
        .setDescription(`チケットの削除をキャンセルしました`)
        .setColor("RANDOM");
      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
    if (interaction.customId == "log") {
      const embed = new MessageEmbed()
        .setTitle("ファイル形式を選択してください")
        .setColor("RANDOM");
      interaction.reply({
        embeds: [embed],
        components: [
          {
            type: "ACTION_ROW",
            components: [
              {
                type: "BUTTON",
                customId: "txt",
                label: "txt形式",
                style: "SECONDARY",
              },
              {
                type: "BUTTON",
                customId: "html",
                label: "html形式",
                style: "SECONDARY",
              },
            ],
          },
        ],
        ephemeral: true,
      });
    }
    if (interaction.customId == "delete") {
      const embed = new MessageEmbed()
        .setTitle("チケットを閉じる")
        .setDescription(`チケットを閉じます`)
        .setColor("RANDOM");
      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
      setTimeout(function () {
        interaction.channel.delete();
      }, 3000);
    }
    if (interaction.customId == "txt") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const messages = await interaction.channel.messages.fetch({ limit: 100 });
      const fileFormat = "txt";
      const formattedMessages = ticketMessages(messages, fileFormat);
      const name = interaction.channel.name;
      const fileName = `${name}.${fileFormat}`;
      const attachment = new MessageAttachment(
        Buffer.from(formattedMessages),
        fileName
      );
      await interaction.reply({ files: [attachment], ephemeral: true });
    }
  } catch (e) {
    console.log(e);
  }
});

function ticketMessages(messages, fileFormat) {
  try {
    if (fileFormat === "txt") {
      return messages
        .map((message) => `${message.author.tag}:\n${message.content}\n`)
        .join("\n");
    } else {
      return "Invalid file format specified.";
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === "html") {
    if (!interaction.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます",
        ephemeral: true,
      });
    }
    try {
      const fetchAllMessages = async (channel) => {
        let messages = [];
        let lastMessageId;
        let fetchedMessages;

        do {
          fetchedMessages = await channel.messages.fetch({
            limit: 100,
            before: lastMessageId,
          });
          if (fetchedMessages.size > 0) {
            messages = messages.concat([...fetchedMessages.values()]);
            lastMessageId = fetchedMessages.last().id;
          }
        } while (fetchedMessages.size >= 100);

        return messages;
      };
      const messages = await fetchAllMessages(interaction.channel);
      const guild = interaction.guild;
      const userName = interaction.channel.name;
      const serverName = guild.name;
      const serverIcon = guild.iconURL({ format: "png", size: 96 });
      const ticketChannelName = interaction.channel.name;
      const ticketUserName = ticketChannelName.split("-")[1];

      let htmlContent = `<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${userName}</title>
    <style>
        body {
            background-color: #2C2F33;
            color: white;
            font-family: Arial, sans-serif;
        }
        .message {
            background-color: #23272A;
            border-radius: 10px;
            padding: 10px;
            margin: 10px 0;
            display: flex;
            align-items: flex-start;
        }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .content {
            max-width: 80%;
        }
        .username {
            font-weight: bold;
            color: #7289DA;
        }
        .timestamp {
            font-size: 0.8em;
            color: #72767D;
            margin-left: 10px;
        }
        .embed {
            background-color: #2C2F33;
            border-left: 4px solid #57F287;
            padding: 10px;
            border-radius: 5px;
            margin-top: 5px;
        }
        .embed-title {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .embed-description {
            margin-bottom: 5px;
        }
        .embed-field {
            margin-bottom: 5px;
        }
        .embed-field-name {
            font-weight: bold;
            color: #99AAB5;
        }
        .embed-field-value {
            color: #99AAB5;
        }
        .embed-author,
        .embed-footer {
            color: #99AAB5;
            font-size: 0.9em;
        }
        .embed-thumbnail,
        .embed-image {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
            margin-top: 10px;
        }
        .button {
            background-color: #F04747;
            color: white;
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        .attachment {
            margin-top: 10px;
        }
        .image {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
            margin-top: 10px;
        }
        .file-name {
            color: #00BFFF;
            text-decoration: none;
        }
        .file-size {
            color: #99AAB5;
            font-size: 0.9em;
        }
        .url {
            color: #1E90FF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="${serverIcon}" alt="Server Icon" class="server-icon">
        <h1 class="server-name">${serverName}</h1>
        <h1 class="ticket-name">${userName}</h1>
    </div>
    <div>`;

      messages.reverse().forEach((msg) => {
        const avatarUrl = msg.author.displayAvatarURL({
          format: "png",
          size: 64,
        });
        let messageContent = msg.content;
        messageContent = messageContent.replace(
          /(https?:\/\/[^\s]+)/g,
          '<a href="$1" class="url" target="_blank">$1</a>'
        );

        htmlContent += `
<div class="message">
    <img src="${avatarUrl}" class="avatar" alt="Avatar"/>
    <div class="content">
        <span class="username">${msg.author.tag}</span>
        <span class="timestamp">${msg.createdAt.toLocaleString()}</span>
        <div>${messageContent}</div>`;
        msg.attachments.forEach((attachment) => {
          if (attachment.height) {
            htmlContent += `
        <div class="attachment">
            <img src="${attachment.url}" class="image" alt="Image"/>
        </div>`;
          } else {
            htmlContent += `
        <div class="attachment">
            <a href="${attachment.url}" class="file-name" target="_blank">${
              attachment.name || "File"
            }</a>
            <div class="file-size">${
              attachment.size
                ? (attachment.size / 1024).toFixed(2) + " KB"
                : "Unknown size"
            }</div>
        </div>`;
          }
        });

        if (msg.embeds.length > 0) {
          msg.embeds.forEach((embed) => {
            htmlContent += `
        <div class="embed">`;

            // Author
            if (embed.author) {
              htmlContent += `
            <div class="embed-author">
                ${
                  embed.author.name
                    ? `<strong>${embed.author.name}</strong>`
                    : ""
                }
                ${
                  embed.author.iconURL
                    ? `<img src="${embed.author.iconURL}" alt="Author Icon" class="avatar"/>`
                    : ""
                }
                ${
                  embed.author.url
                    ? `<br><a href="${embed.author.url}" class="url" target="_blank">${embed.author.url}</a>`
                    : ""
                }
            </div>`;
            }
            if (embed.thumbnail && embed.thumbnail.url) {
              htmlContent += `
            <img src="${embed.thumbnail.url}" class="embed-thumbnail" alt="Thumbnail"/>`;
            }
            if (embed.image && embed.image.url) {
              htmlContent += `
            <img src="${embed.image.url}" class="embed-image" alt="Image"/>`;
            }
            if (embed.title) {
              htmlContent += `
            <div class="embed-title">${embed.title}</div>`;
            }
            if (embed.description) {
              htmlContent += `
            <div class="embed-description">${embed.description}</div>`;
            }
            if (embed.fields.length > 0) {
              embed.fields.forEach((field) => {
                htmlContent += `
            <div class="embed-field">
                <div class="embed-field-name">${field.name}</div>
                <div class="embed-field-value">${field.value}</div>
            </div>`;
              });
            }
            if (embed.footer) {
              htmlContent += `
            <div class="embed-footer">
                ${embed.footer.text ? embed.footer.text : ""}
                ${
                  embed.footer.iconURL
                    ? `<img src="${embed.footer.iconURL}" alt="Footer Icon" class="avatar"/>`
                    : ""
                }
            </div>`;
            }
            if (embed.timestamp) {
              htmlContent += `
            <div class="embed-footer">
                <span>${new Date(embed.timestamp).toLocaleString()}</span>
            </div>`;
            }

            htmlContent += `
        </div>`;
          });
        }

        if (msg.components.length > 0) {
          msg.components.forEach((component) => {
            component.components.forEach((button) => {
              htmlContent += `
            <button class="button">${button.label}</button>`;
            });
          });
        }

        htmlContent += `
    </div>
</div>
<hr/>`;
      });

      htmlContent += `
    </div>
</body>
</html>`;

      const filePath = `./${userName}.html`;
      fs.writeFileSync(filePath, htmlContent);

      await interaction.reply({
        files: [filePath],
        ephemeral: true,
      });

      fs.unlinkSync(filePath);
    } catch (error) {
      console.error("Error fetching or sending channel log:", error);
      await interaction.reply({
        content: "チャンネルログの取得に失敗しました。",
        ephemeral: true,
      });
    }
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "shorturl",
      description: "URLを短縮します",
      options: [
        {
          name: "url",
          type: "STRING",
          description: "短縮するURL",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const isUrl = require("./isUrl.js");
    if (interaction.commandName === "shorturl") {
      const url = interaction.options.getString("url");

      if (!isUrl(url))
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "短縮URLにできませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "URLを指定する必要があります",
            },
          ],
          ephemeral: true,
        });

      const data = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURI(url)}`
      ).then((res) => res.json());

      if (data.errorcode)
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "短縮URLにできませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "URLが無効です",
            },
          ],
          ephemeral: true,
        });

      await interaction.reply(data.shorturl);
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "slot-create",
      description: "ユーザーを指定してslotを作成します",
      options: [
        {
          type: "USER",
          name: "ユーザー",
          description: "SLOTの使用者を指定",
          required: true,
        },
        {
          type: "CHANNEL",
          name: "カテゴリ",
          description: "スロットを作成するカテゴリを指定",
          channel_types: [4],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "slot-create") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const user = interaction.options.getUser("ユーザー");
      const category = interaction.options.getChannel("カテゴリ");
      if (category) {
        const newChannel = await interaction.guild.channels.create(
          `🎰｜${user.globalName ?? user.username}様`,
          {
            type: "GUILD_TEXT",
            parent: category.id,
            permissionOverwrites: [
              {
                id: user.id,
                allow: [
                  Permissions.FLAGS.MENTION_EVERYONE,
                  Permissions.FLAGS.SEND_MESSAGES,
                ],
              },
              {
                id: interaction.guild.roles.everyone,
                allow: [Permissions.FLAGS.VIEW_CHANNEL],
                deny: [Permissions.FLAGS.SEND_MESSAGES],
              },
            ],
          }
        );
        interaction.reply({
          content: `${newChannel.toString()}を作成しました。\n閲覧権限がeveryoneに付与されているので必要に応じて変更してください。`,
          ephemeral: true,
        });
      } else {
        const newCategory = await interaction.guild.channels.create("SLOTS", {
          type: "GUILD_CATEGORY",
        });
        const rule = await interaction.guild.channels.create(
          `🎰｜スロットルール`,
          {
            type: "GUILD_TEXT",
            parent: newCategory.id,
            permissionOverwrites: [
              {
                id: interaction.guild.roles.everyone,
                deny: [Permissions.FLAGS.SEND_MESSAGES],
              },
            ],
          }
        );
        const newChannel = await interaction.guild.channels.create(
          `🎰｜${user.globalName ?? user.username}様`,
          {
            type: "GUILD_TEXT",
            parent: newCategory.id,
            permissionOverwrites: [
              {
                id: user.id,
                allow: [
                  Permissions.FLAGS.MENTION_EVERYONE,
                  Permissions.FLAGS.SEND_MESSAGES,
                ],
              },
              {
                id: interaction.guild.roles.everyone,
                allow: [Permissions.FLAGS.VIEW_CHANNEL],
                deny: [Permissions.FLAGS.SEND_MESSAGES],
              },
            ],
          }
        );
        interaction.reply({
          content: `スロットカテゴリ、${rule.toString()}、${newChannel.toString()}を作成しました。\n閲覧権限がeveryoneに付与されているので必要に応じて変更してください。`,
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
    try {
      await client.application.commands.create({
        name: "sb",
        description: "サーチBANチェックを行います",
        options: [
          {
            name: "username",
            type: "STRING",
            description: "Twitterのユーザーネームを入力して下さい",
            required: true,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  });

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "sb") {
      const API_URL2 = "https://as.hisubway.online";
      const twitterUsername = interaction.options.getString("username");

      if (!twitterUsername) {
        return interaction.reply("Twitterのユーザー名を入力してください。");
      }

      // 一度「ロード中」と表示
      await interaction.deferReply();

      const response = await axios.get(`${API_URL2}/?username=${twitterUsername}`);
      const data = response.data;

      if (data && data.profile && data.tests) {
        const { profile, tests, region } = data;

        const embed = new MessageEmbed()
          .setTitle(`${twitterUsername}`)
          .setURL(`https://x.com/${twitterUsername}`)
          .setColor(profile.exists ? "GREEN" : "RED")
          .addFields(
            { name: `${twitterUsername} exists`, value: profile.exists ? ":white_check_mark:" : ":x:" },
            { name: "Ghost Ban", value: tests.ghost ? ":white_check_mark:" : ":x:" },
            { name: "ゴーストBAN", value: "リプライの一覧にツイートが表示されなくなります。スレッドBANとも呼ばれます。" },
            { name: "Reply Deboosting", value: tests.more_replies ? ":white_check_mark:" : ":x:" },
            { name: "リプライデブースティング", value: "リプライが「返信をさらに表示」を押さないと表示されないようになります。" },
            { name: "Search Ban", value: tests.search ? ":white_check_mark:" : ":x:" },
            { name: "サーチBAN", value: "クオリティーフィルターのオンオフに関わらず、ツイートが検索結果に表示されなくなります。" },
            { name: "Search Suggestion Ban", value: tests.typeahead ? ":white_check_mark:" : ":x:" },
            { name: "検索候補BAN", value: "検索画面で、検索候補から対象のアカウントが表示されなくなります。" },
            { name: "Region", value: region || "不明" }
          )
          .setFooter("シャドウバンチェック完了");

        await interaction.editReply({ embeds: [embed] });
      } else {
        await interaction.editReply("データが取得できませんでした。");
      }
    }
  } catch (e) {
    console.log(e);
    await interaction.editReply("エラーが発生しました。");
  }
});  

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "ticket",
      description: "チケットパネルを設置します",
      options: [
        {
          type: "STRING",
          name: "タイトル",
          description: "パネルのタイトル",
        },
        {
          type: "STRING",
          name: "概要",
          description: "パネルの概要",
        },
        {
          type: "ATTACHMENT",
          name: "画像",
          description: "パネルに乗せる画像",
        },
        {
          type: "CHANNEL",
          name: "カテゴリ",
          description: "チケットを作成するカテゴリ",
          channel_types: [4],
        },
        {
          type: "ROLE",
          name: "ロール",
          description: "チケット作成時にメンションするロール",
        },
        {
          type: "STRING",
          name: "最初に送るメッセージ",
          description: "チケット作成時に最初に送るメッセージ",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "ticket") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      let title = interaction.options.getString("タイトル"),
        description = interaction.options.getString("概要"),
        image = interaction.options.getAttachment("画像"),
        category = interaction.options.getChannel("カテゴリ") || "undefined",
        role = interaction.options.getRole("ロール") || "undefined",
        welcome =
          interaction.options.getString("最初に送るメッセージ") || "undefined";
      if (title == null) title = "お問い合わせ";
      if (description == null)
        description =
          "サポートとのチケットを発行します。チケット作成後チャンネルにて問い合わせ内容をご記入ください";

      const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("RANDOM");
      if (image) embed.setImage(image.url);
      interaction.reply({
        embeds: [embed],
        components: [
          newbutton([
            {
              id: `ticket-${category.id}-${role.id}-${welcome}`,
              label: "🎫チケット発行",
              style: "SUCCESS",
            },
          ]),
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("ticket")) {
      const category = interaction.customId.split("-")[1];
      const role = interaction.customId.split("-")[2];
      const welcome = interaction.customId.split("-")[3];

      const existingChannel = interaction.guild.channels.cache.find(
        (channel) =>
          channel.name === `🎫｜${interaction.user.username}` &&
          (category === "undefined" || channel.parentId === category)
      );

      if (existingChannel) {
        const errorembed = new MessageEmbed()
          .setTitle("error")
          .setDescription(`既にチケットを作成しています`)
          .setColor("RED")
          .setTimestamp();
        return interaction.reply({ embeds: [errorembed], ephemeral: true });
      }

      let newChannel;
      const overwrite = [
        {
          id: interaction.user.id,
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        },
        {
          id: interaction.guild.roles.everyone,
          deny: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        },
      ];
      if (role !== "undefined") {
        overwrite.push({
          id: role,
          allow: [
            Permissions.FLAGS.VIEW_CHANNEL,
            Permissions.FLAGS.SEND_MESSAGES,
          ],
        });
      }
      if (category == "undefined") {
        newChannel = await interaction.guild.channels.create(
          `🎫｜${interaction.user.username}`,
          {
            type: "GUILD_TEXT",
            topic: interaction.user.id,
            permissionOverwrites: overwrite,
          }
        );
      } else {
        newChannel = await interaction.guild.channels.create(
          `🎫｜${interaction.user.username}`,
          {
            type: "GUILD_TEXT",
            parent: category,
            topic: interaction.user.id,
            permissionOverwrites: overwrite,
          }
        );
      }
      interaction.reply({
        content: `${newChannel.toString()}を作成しました`,
        ephemeral: true,
      });
      const del_embed = new MessageEmbed()
        .setDescription("チケットを削除したい場合は下のボタンを押してください")
        .setColor("RANDOM");
      const embeds = [del_embed];
      if (welcome != "undefined") {
        const info_embed = new MessageEmbed()
          .setDescription(welcome)
          .setColor("RANDOM");
        embeds.unshift(info_embed);
      }
      newChannel.send({
        content: `<@${interaction.user.id}>`,
        embeds: embeds,
        components: [
          newbutton([
            { id: "ifdelete", label: "チケットを削除", style: "DANGER" },
          ]),
          newbutton([
            { id: "log", label: "チケットログを保存", style: "SECONDARY" },
          ]),
        ],
      });
      if (role != "undefined") {
        const msg = await newChannel.send(`<@&${role.toString()}>`);
        setTimeout(function () {
          msg.delete();
        }, 3000);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "timeout",
      description: "指定したユーザーをタイムアウトします。",
      options: [
        {
          name: "user",
          description: "ユーザー名またはメンション",
          type: "USER",
          required: true,
        },
        {
          name: "duration",
          description: "タイムアウトの期間 (分)",
          type: "INTEGER",
          required: false,
          choices: [
            { name: "10秒", value: 10.0 },
            { name: "30秒", value: 30.0 },
            { name: "1分", value: 1 },
            { name: "2分", value: 2 },
            { name: "3分", value: 3 },
            { name: "4分", value: 4 },
            { name: "5分", value: 5 },
            { name: "10分", value: 10 },
            { name: "20分", value: 20 },
            { name: "30分", value: 30 },
            { name: "40分", value: 40 },
            { name: "50分", value: 50 },
            { name: "1時間", value: 60 },
            { name: "1日", value: 24 },
            { name: "2日", value: 48 },
            { name: "3日", value: 72 },
            { name: "4日", value: 96 },
            { name: "5日", value: 120 },
            { name: "6日", value: 144 },
            { name: "1週間", value: 10080 },
            { name: "10日", value: 1000 },
            { name: "15日", value: 1500 },
            { name: "20日", value: 2000 },
            { name: "25日", value: 2500 },
            { name: "28日", value: 2800 },
          ],
        },
        {
          name: "reason",
          description: "タイムアウトの理由",
          type: "STRING",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "timeout") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const targetUser = interaction.options.getUser("user", true);
      const timeoutDuration = interaction.options.getInteger("duration", false);
      const timeoutReason = interaction.options.getString("reason", false);

      const targetMember = interaction.guild.members.cache.get(targetUser.id);

      if (!targetMember) {
        await interaction.reply("指定されたユーザーが見つかりません。");
        return;
      }

      let timeoutMilliseconds = 0;

      switch (timeoutDuration) {
        case 10.0:
          timeoutMilliseconds = 10 * 1000;
          break;
        case 30.0:
          timeoutMilliseconds = 30 * 1000;
          break;
          timeoutMilliseconds = 50 * 1000;
          break;
        case 1:
          timeoutMilliseconds = 1 * 60 * 1000;
          break;
        case 2:
          timeoutMilliseconds = 2 * 60 * 1000;
          break;
        case 3:
          timeoutMilliseconds = 3 * 60 * 1000;
          break;
        case 4:
          timeoutMilliseconds = 4 * 60 * 1000;
          break;
        case 5:
          timeoutMilliseconds = 5 * 60 * 1000;
          break;
        case 10:
          timeoutMilliseconds = 10 * 60 * 1000;
          break;
        case 20:
          timeoutMilliseconds = 20 * 60 * 1000;
          break;
        case 30:
          timeoutMilliseconds = 30 * 60 * 1000;
          break;
        case 40:
          timeoutMilliseconds = 40 * 60 * 1000;
          break;
        case 50:
          timeoutMilliseconds = 50 * 60 * 1000;
          break;
        case 60:
          timeoutMilliseconds = 60 * 60 * 1000;
          break;
        case 24:
          timeoutMilliseconds = 24 * 60 * 60 * 1000;
          break;
        case 48:
          timeoutMilliseconds = 48 * 60 * 60 * 1000;
          break;
        case 72:
          timeoutMilliseconds = 72 * 60 * 60 * 1000;
          break;
        case 96:
          timeoutMilliseconds = 96 * 60 * 60 * 1000;
          break;
        case 120:
          timeoutMilliseconds = 120 * 60 * 60 * 1000;
          break;
        case 144:
          timeoutMilliseconds = 144 * 60 * 60 * 1000;
          break;
        case 10080:
          timeoutMilliseconds = 7 * 24 * 60 * 60 * 1000;
          break;
        case 1000:
          timeoutMilliseconds = 10 * 24 * 60 * 60 * 1000;
          break;
        case 1500:
          timeoutMilliseconds = 15 * 24 * 60 * 60 * 1000;
          break;
        case 2000:
          timeoutMilliseconds = 20 * 24 * 60 * 60 * 1000;
          break;
        case 2500:
          timeoutMilliseconds = 25 * 24 * 60 * 60 * 1000;
          break;
        case 2800:
          timeoutMilliseconds = 28 * 24 * 60 * 60 * 1000;
          break;
        default:
          await interaction.reply("無効なタイムアウト時間です。");
          return;
      }

      await targetMember.timeout(timeoutMilliseconds, timeoutReason || "なし");

      const embed = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("タイムアウト")
        .setDescription(`${targetMember.user} をタイムアウトしました。`)
        .addField("理由", timeoutReason || "なし")
        .setThumbnail(targetMember.user.displayAvatarURL())
        .setAuthor(
          `実行者:${interaction.user.tag}`,
          interaction.user.displayAvatarURL()
        );

      await interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "timer",
      description: "指定した時間後に通知します。",
      options: [
        {
          name: "time",
          type: "STRING",
          description: "タイマーに設定する時間 (例: 1時間, 10分, 30秒)",
          required: true,
        },
        {
          name: "memo",
          type: "STRING",
          description: "メモの内容",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

const memos = new Map();

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) {
      return;
    }
    const { commandName } = interaction;
    if (commandName === "timer") {
      const time = interaction.options.getString("time");
      const content = interaction.options.getString("memo");
      const duration = parseJapaneseDuration(time);

      if (!duration) {
        const embed = new MessageEmbed()
          .setColor("RED")
          .setDescription("無効な時間フォーマットです。例: 1時間、10分、30秒");
        await interaction.reply({ embeds: [embed] });
        return;
      }

      setTimeout(async () => {
        const embed = new MessageEmbed()
          .setColor("GREEN")
          .setTitle("時間が経過しました⏳")
          .addField("セットされた時間", time, true)
          .addField("メモ欄", `${content}`);
        await interaction.followUp({
          content: `<@${interaction.user.id}>`,
          embeds: [embed],
        });
      }, duration);

      const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("タイマーがセットされました⏳")
        .addField("セットされた時間", time, true)
        .addField("メモ欄", `${content}`);
      await interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

function parseJapaneseDuration(japaneseTime) {
  try {
    const regex = /(\d+)\s*(秒|分|時間|h|m|s)/g;
    const matches = Array.from(japaneseTime.matchAll(regex));
    if (matches.length === 0) return null;

    let totalMilliseconds = 0;
    matches.forEach((match) => {
      const value = parseInt(match[1]);
      const unit = match[2].toLowerCase();

      if (unit === "秒" || unit === "s") {
        totalMilliseconds += value * 1000;
      } else if (unit === "分" || unit === "m") {
        totalMilliseconds += value * 60 * 1000;
      } else if (unit === "時間" || unit === "h") {
        totalMilliseconds += value * 60 * 60 * 1000;
      }
    });

    return totalMilliseconds;
  } catch (e) {
    console.log(e);
  }
}

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "translate",
      description: "テキストを翻訳します",
      options: [
        {
          name: "text",
          type: "STRING",
          description: "翻訳するテキスト",
          required: true,
        },
        {
          name: "lang",
          type: "STRING",
          description: "言語を選択してください",
          choices: [
            { name: "日本語", value: "ja" },
            { name: "英語", value: "en" },
            { name: "韓国語", value: "ko" },
            { name: "中国語", value: "zh" },
            { name: "ロシア語", value: "ru" },
            { name: "フランス語", value: "fr" },
            { name: "ドイツ語", value: "de" },
          ],
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    const translate = require("./translate.js");
    if (interaction.commandName === "translate") {
      const text = interaction.options.getString("text");
      const lang = interaction.options.getString("lang");

      if (text > 2000)
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "翻訳できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "翻訳文字数は、2000文字以下です",
              footer: {
                text: "Google Translate",
                icon_url: "https://cdn.taka.cf/images/translate.png",
              },
            },
          ],
          ephemeral: true,
        });

      try {
        const data = await translate(text, "auto", lang);

        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              title: "翻訳結果",
              description: data.text,
              footer: {
                text: `Google Translate [${data.source}]->[${lang}]`,
                icon_url: "https://cdn.taka.cf/images/translate.png",
              },
            },
          ],
        });
      } catch {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "翻訳できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "翻訳文字を変えて、もう一度実行してください",
              footer: {
                text: "Google Translate",
                icon_url: "https://cdn.taka.cf/images/translate.png",
              },
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "twitter",
      description: "ツイートを検索します",
      options: [
        {
          name: "word",
          type: "STRING",
          description:
            "検索ワードを入力 検索ワードに`id:ユーザー名`を指定することで特定のユーザーのツイートを取得できます",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "twitter") {
      const word = interaction.options.getString("word");

      await interaction.deferReply();
      try {
        const data = await fetch(
          `https://search.yahoo.co.jp/realtime/api/v1/pagination?p=${word}`
        ).then((res) => res.json());

        if (!data.timeline.entry[0])
          return await interaction.editReply({
            embeds: [
              {
                color: "RANDOM",
                author: {
                  name: "取得できませんでした",
                  icon_url: "https://cdn.taka.cf/images/system/error.png",
                },
                description: "検索結果が存在しませんでした",
              },
            ],
          });

        data.timeline.entry.length = 5;

        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: `${word}の検索結果`,
              },
              description: data.timeline.entry
                .map(
                  (data) =>
                    `[**${data.name}(@${data.screenName})**](${
                      data.url
                    }) - ${new Date(
                      data.createdAt * 1000
                    ).toLocaleString()}\n${data.displayText
                      .replace(/\tSTART\t/g, "")
                      .replace(/\tEND\t/g, "")}`
                )
                .join("\n\n"),
            },
          ],
        });
      } catch {
        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "検索ワードを変えて、もう一度実行してください",
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "unban",
      description: "ユーザーのBANを解除します。",
      options: [
        {
          name: "user_id",
          type: 3,
          description: "BANを解除するユーザーのID",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "unban") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const userId = options.getString("user_id");

      try {
        const user = await client.users.fetch(userId);

        await interaction.guild.members.unban(userId);

        const embed = new MessageEmbed()
          .setTitle("BAN解除")
          .addField("unban", "ユーザーのBANが解除されました")
          .addField("解除されたユーザー", `${user.username}`)
          .addField("ユーザーID", `${userId}`)
          .setColor("#00ff00");

        interaction.reply({ embeds: [embed] });
      } catch (error) {
        console.error(error);

        const user = await client.users.fetch(userId);

        const embed = new MessageEmbed()
          .setTitle("error")
          .setDescription(
            `ユーザー: ${user.username} のBAN解除に失敗しました。ユーザーはBANされていない可能性があります。`
          )
          .addField("ユーザーID", `${userId}`)
          .setColor("#ff0000");

        interaction.reply({ embeds: [embed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "untimeout",
      description: "指定したユーザーのタイムアウトを解除します。",
      options: [
        {
          name: "user",
          description: "ユーザー名またはメンション",
          type: "USER",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "untimeout") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const targetUser = interaction.options.getUser("user", true);
      const targetMember = interaction.guild.members.cache.get(targetUser.id);

      if (!targetMember) {
        await interaction.reply("指定されたユーザーが見つかりません。");
        return;
      }

      if (!targetMember.isCommunicationDisabled()) {
        const embedError = new MessageEmbed()
          .setTimestamp()
          .setColor("#FF0000")
          .setTitle("error")
          .setDescription(
            `${targetMember.user} は現在タイムアウトされていません。`
          )
          .setAuthor(
            `実行者:${interaction.user.tag}`,
            interaction.user.displayAvatarURL()
          );

        await interaction.reply({ embeds: [embedError] });
        return;
      }

      await targetMember.timeout(0);

      const embedSuccess = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("タイムアウト解除")
        .setDescription(`${targetMember.user} のタイムアウトを解除しました。`)
        .setThumbnail(targetMember.user.displayAvatarURL())
        .setAuthor(
          `実行者:${interaction.user.tag}`,
          interaction.user.displayAvatarURL()
        );

      await interaction.reply({ embeds: [embedSuccess] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "url-button",
      description: "指定されたリンクのボタンを作成します。",
      options: [
        {
          name: "link",
          type: "STRING",
          description: "ボタンがリンクするURL",
          required: true,
        },
        {
          name: "label",
          type: "STRING",
          description: "ボタンのラベル",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "url-button") {
      const link =
        interaction.options.getString("link") || "https://example.com";
      const label = interaction.options.getString("label") || "リンクはこちら";

      const row = new MessageActionRow().addComponents(
        new MessageButton().setStyle("LINK").setLabel(label).setURL(link)
      );

      await interaction.reply({ components: [row] });
      console.log(`リンクボタン作成 ${label}:${link}`);
    }
  } catch (e) {
    console.log(e);
    interaction.reply({ content: `無効なURLです`, ephemeral: true });
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "user",
      description: "ユーザーの情報を表示します",
      options: [
        {
          name: "ユーザー",
          description: "情報を表示するユーザーを選択してください",
          type: "USER",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand() || interaction.commandName !== "user") return;

    const user = interaction.options.getUser("ユーザー") || interaction.user;

    const targetMember = interaction.guild.members.cache.get(user.id);

    let ActivityContent = "";
    let customstatuscontent = "";

    if (
      targetMember &&
      targetMember.presence &&
      targetMember.presence.activities.length > 0
    ) {
      const playingActivity = targetMember.presence.activities.find(
        (activity) => activity.type === "PLAYING"
      );

      if (playingActivity) {
        ActivityContent = `${playingActivity.name}`;
      }
    } else {
      const customStatus = targetMember.presence.activities.find(
        (activity) => activity.type === "CUSTOM_STATUS"
      );
      const statusMessage = customStatus
        ? customStatus.state
        : "取得できませんでした";

      customstatuscontent = `${statusMessage}`;
    }

    const platform = require("./platform.js");

    const member = interaction.guild.members.cache.get(user.id);

    if (member && member.presence) {
      const status = member.presence.status;
      let statusEmoji, statusMessage;

      if (status === "online") {
        statusEmoji = "🟢";
        statusMessage = "オンライン";
      } else if (status === "dnd") {
        statusEmoji = "🔴";
        statusMessage = "取り込み中";
      } else if (status === "idle") {
        statusEmoji = "🌙";
        statusMessage = "退席中";
      } else {
        statusEmoji = "⚫";
        statusMessage = "オフライン";
      }

      const embed = new MessageEmbed()
        .setTitle(`${user.username} の情報`)
        .setColor("RANDOM")
        .addField("ユーザー名", user.tag, true)
        .addField("Discriminator", `#${user.discriminator}`, true)
        .addField("ユーザーID", user.id, true)
        .addField("Bot", usedeaxbot ? "はい" : "いいえ", true)
        .addField("ユーザーメンション", `<@${user.id}>`, true)
        .addField(
          "プラットフォーム",
          interaction.member.presence?.status
            ? `${platform(interaction.member.presence) || ""}`
            : "取得できませんでした",
          true
        )
        .addField("ステータス", `${statusEmoji} ${statusMessage}`, true)
        .addField(
          "カスタムステータス・ゲームのプレイ",
          `${ActivityContent}` || `${customstatuscontent}` || `ステータスなし`,
          true
        )
        .addField(
          "アカウント作成日時",
          `${user.createdAt.toLocaleDateString(
            "ja-JP"
          )} ${user.createdAt.toLocaleTimeString()}`,
          true
        )
        .setThumbnail(user.displayAvatarURL({ dynamic: true }));

      interaction.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "verification-custom",
      description: "複数の認証パターンを選択し認証パネルを作成します",
      options: [
        {
          name: "type",
          type: "STRING",
          description: "認証パターンを選択",
          choices: [
            { name: "通常", value: "normal" },
            { name: "計算", value: "math" },
            { name: "画像", value: "image" },
          ],
          required: true,
        },
        {
          type: "ROLE",
          name: "role",
          description: "付与するロールを指定",
          required: true,
        },
        {
          type: "STRING",
          name: "タイトル",
          description: "パネルのタイトル",
        },
        {
          type: "STRING",
          name: "概要",
          description: "パネルの概要",
        },
        {
          type: "STRING",
          name: "ボタンラベル",
          description: "ボタンに表示する文字を指定",
        },
        {
          type: "ATTACHMENT",
          name: "画像",
          description: "画像を指定",
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.commandName === "verification-custom") {
      const type = interaction.options.getString("type");
      const role = interaction.options.getRole("role");
      let title = interaction.options.getString("タイトル"),
        description = interaction.options.getString("概要");
      buttonLabel = interaction.options.getString("ボタンラベル");
      image = interaction.options.getAttachment("画像");
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }

      if (interaction.guild.me.roles.highest.comparePositionTo(role) <= 0)
        return interaction.reply({
          content:
            "ロール順位が不適切です\nBOTの最高位のロール順位を上げてください",
          ephemeral: true,
        });

      try {
        if (title == null) title = "認証パネル";
        if (description == null)
          description = "下のボタンを押して認証してください";
        if (buttonLabel == null) buttonLabel = "verify✅";
        const embed = new MessageEmbed()
          .setTitle(title)
          .setDescription(description)
          .setColor("RANDOM");
        if (image) {
          embed.setImage(image.url);
        }
        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId(`${type}_${role.id}`)
            .setStyle("PRIMARY")
            .setLabel(buttonLabel)
        );

        await interaction.deferReply();

        await interaction.followUp({
          embeds: [embed],
          components: [row],
        });
      } catch (error) {
        console.error(error);
        await interaction.followUp({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "認証機能の作成に失敗しました",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "BOTの権限等を確認してもう一度実行してください",
              fields: [
                {
                  name: "エラーコード",
                  value: `\`\`\`${error}\`\`\``,
                },
              ],
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    if (interaction.customId.startsWith("normal_")) {
      const data = interaction.customId.split("_");

      if (interaction.member.roles.cache.has(data[1]))
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "既に認証済みです",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
            },
          ],
          ephemeral: true,
        });

      try {
        await interaction.member.roles.add(data[1]);

        const user = interaction.user;
        const embed = new MessageEmbed()
          .setTitle("SUCCESS")
          .setDescription(`${user}の認証が完了しました`)
          .setTimestamp()
          .setThumbnail(user.displayAvatarURL({ dynamic: true }));

        await interaction.reply({
          embeds: [embed],
          ephemeral: true,
        });
      } catch (error) {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "認証に失敗しました",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description:
                "BOTの権限が不足しているか、付与するロールがBOTより上の可能性があります",
              fields: [
                {
                  name: "エラーコード",
                  value: `\`\`\`${error}\`\`\``,
                },
              ],
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    if (interaction.customId.startsWith("image_")) {
      const { createCanvas, loadImage } = require("canvas");
      const fetch = require("node-fetch");
      const random = require("./random.js");
      const data = interaction.customId.split("_");

      const keys = Array.from({ length: 8 }, () => ({
        text: Math.random().toString(36).substring(2, 8),
      }));

      await interaction.deferReply({ ephemeral: true });

      const key = random(keys);
      const imageUrl =
        "https://cdn.glitch.global/7b406769-f239-46bf-93f9-0ed2ec35c6c7/29_20240721092101.png?v=1721521902857";

      let image;
      try {
        image = await loadImage(imageUrl);
      } catch (error) {
        console.error("画像の読み込みに失敗しました:", error);
        return await interaction.editReply({
          content: "画像の読み込みに失敗しました。再試行してください。",
          ephemeral: true,
        });
      }

      const canvas = createCanvas(image.width, image.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0, image.width, image.height);

      ctx.transform(1, 0.2, 0.1, 1, 0, 0);

      const fonts = [
        "bold 200px sans-serif",
        "italic 200px serif",
        "bold 150px monospace",
      ];
      ctx.fillStyle = "black";
      ctx.textAlign = "center";

      key.text.split("").forEach((char, index) => {
        ctx.font = fonts[Math.floor(Math.random() * fonts.length)];
        ctx.fillText(
          char,
          canvas.width / 2 + index * 40 - 80,
          canvas.height / 2 + 20
        );
      });

      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`;
        ctx.lineWidth = 6 + Math.random() * 3;
        ctx.stroke();
      }

      const attachment = new MessageAttachment(canvas.toBuffer(), "code.png");

      await interaction.editReply({
        embeds: [
          {
            color: "RANDOM",
            title: "画像認証",
            description:
              "画像にある文字を選択してください\n※画像が表示されるまで時間がかかる場合があります",
            image: {
              url: "attachment://code.png",
            },
          },
        ],
        files: [attachment],
        components: [
          new MessageActionRow().addComponents(
            new MessageSelectMenu()
              .setCustomId(
                `imagerole_${data[1]}_${key.text}_${interaction.user.id}`
              )
              .setPlaceholder("正しいものを選択")
              .setMinValues(1)
              .setMaxValues(1)
              .addOptions(
                keys.map((key) => ({
                  label: key.text,
                  value: key.text,
                }))
              )
          ),
        ],
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isSelectMenu()) return;
    if (interaction.customId.startsWith("imagerole_")) {
      const data = interaction.customId.split("_");
      const key = interaction.values[0];

      if (interaction.member.roles.cache.has(data[1])) {
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "既に認証済みです",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
            },
          ],
          ephemeral: true,
        });
      }

      if (key !== data[2]) {
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "選択した値が間違っています",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "画像に表示される文字を選択してください",
            },
          ],
          ephemeral: true,
        });
      }

      try {
        await interaction.member.roles.add(data[1]);

        const user = interaction.user;
        const embed = new MessageEmbed()
          .setTitle("SUCCESS")
          .setDescription(`${user}の認証が完了しました`)
          .setTimestamp()
          .setThumbnail(user.displayAvatarURL({ dynamic: true }));

        await interaction.reply({
          embeds: [embed],
          ephemeral: true,
        });
      } catch (error) {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "認証に失敗しました",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description:
                "BOTの権限が不足しているか、付与するロールがBOTより上の可能性があります",
              fields: [
                {
                  name: "エラーコード",
                  value: `\`\`\`${error}\`\`\``,
                },
              ],
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    if (interaction.customId.startsWith("math_")) {
      const data = interaction.customId.split("_");

      const count_1 = Math.floor(Math.random() * 15) + 1;
      const count_2 = Math.floor(Math.random() * 15) + 1;

      const check = new Modal()
        .setCustomId(`mathrole_${data[1]}_${count_1 + count_2}`)
        .setTitle("認証")

        .addComponents(
          new TextInputComponent()
            .setCustomId("code")
            .setLabel(`${count_1}+${count_2}の答えを入力してください`)
            .setMaxLength(5)
            .setPlaceholder("半角で入力してください")
            .setRequired(true)
            .setStyle("SHORT")
        );

      showModal(check, {
        client: client,
        interaction: interaction,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId.startsWith("mathrole_")) {
      const data = interaction.customId.split("_");
      const code = interaction.fields.getTextInputValue("code");

      if (interaction.member.roles.cache.has(data[1]))
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "既に認証済みです",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
            },
          ],
          ephemeral: true,
        });

      if (isNaN(code))
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "認証コードが間違っています",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "答えの数字を半角で入力してください",
            },
          ],
          ephemeral: true,
        });

      if (code !== data[2])
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "入力コードが間違っています",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description:
                "認証時に表示される画面に書かれている通りに認証してください",
            },
          ],
          ephemeral: true,
        });

      try {
        await interaction.member.roles.add(data[1]);

        const user = interaction.user;
        const embed = new MessageEmbed()
          .setTitle("SUCCESS")
          .setDescription(`${user}の認証が完了しました`)
          .setTimestamp()
          .setThumbnail(user.displayAvatarURL({ dynamic: true }));

        await interaction.reply({
          embeds: [embed],
          ephemeral: true,
        });
      } catch (error) {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "認証に失敗しました",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description:
                "BOTの権限が不足しているか、付与するロールがBOTより上の可能性があります",
              fields: [
                {
                  name: "エラーコード",
                  value: `\`\`\`${error}\`\`\``,
                },
              ],
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  await client.application.commands.create({
    name: "verify",
    description: "認証パネルを設置します",
    options: [
      {
        type: "ROLE",
        name: "ロール",
        description: "付与するロールを指定",
        required: true,
      },
      {
        type: "STRING",
        name: "タイトル",
        description: "パネルのタイトル",
      },
      {
        type: "STRING",
        name: "概要",
        description: "パネルの概要",
      },
      {
        type: "STRING",
        name: "ボタンラベル",
        description: "ボタンに表示する文字を指定",
      },
      {
        type: "ATTACHMENT",
        name: "画像",
        description: "画像を指定",
      },
    ],
  });
});

let collector;

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "verify") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      }
      const role = interaction.options.getRole("ロール");
      let title = interaction.options.getString("タイトル"),
        description = interaction.options.getString("概要");
      buttonLabel = interaction.options.getString("ボタンラベル");
      image = interaction.options.getAttachment("画像");
      if (interaction.guild.me.roles.highest.comparePositionTo(role) <= 0)
        return interaction.reply({
          content:
            "ロール順位が不適切です\nBOTの最高位のロール順位を上げてください",
          ephemeral: true,
        });
      if (title == null) title = "認証パネル";
      if (description == null)
        description = "下のボタンを押して認証してください";
      if (buttonLabel == null) buttonLabel = "verify✅";
      const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("RANDOM");
      if (image) {
        embed.setImage(image.url);
      }
      interaction.reply({
        embeds: [embed],
        components: [
          newbutton([{ id: `verify-${role.id}`, label: buttonLabel }]),
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

function newButton(buttons) {
  return [
    {
      type: 1,
      components: buttons.map((button) => ({
        type: 2,
        style: 1,
        custom_id: button.id,
        label: button.label,
      })),
    },
  ];
}

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    if (interaction.customId.startsWith("verify")) {
      const role = interaction.customId.split("-")[1];
      const user = interaction.user;

      try {
        await interaction.member.roles.add(role);
        const embed = new MessageEmbed()
          .setTitle("SUCCESS")
          .setDescription(`${user}の認証が完了しました`)
          .setTimestamp()
          .setThumbnail(user.displayAvatarURL({ dynamic: true }));
        await interaction.reply({ embeds: [embed], ephemeral: true });
      } catch (error) {
        if (error.code === 50013) {
          // Missing Permissions エラーコード
          const embed = new MessageEmbed()
            .setTitle("ERROR")
            .setDescription(
              "権限が不足しているため、ロールを追加できませんでした。"
            )
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL({ dynamic: true }));
          await interaction.reply({ embeds: [embed], ephemeral: true });
        } else {
          console.error("Unexpected error:", error);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "web-screenshot",
      description: "指定されたURLのスクリーンショットを表示します",
      options: [
        {
          name: "url",
          type: "STRING",
          description: "URLを入力して下さい",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "web-screenshot") {
      const isUrl = require("./isUrl.js");
      if (interaction.commandName === "webshot") {
        const url = interaction.options.getString("url");

        if (!isUrl(url))
          return await interaction.reply({
            embeds: [
              {
                color: "RANDOM",
                description: "URLを指定する必要があります",
              },
            ],
            ephemeral: true,
          });

        await interaction.deferReply();
        try {
          const data = await fetch("https://securl.nu/jx/get_page_jx.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `url=${url}&waitTime=1&browserWidth=1000&browserHeight=1000`,
          }).then((res) => res.json());

          const image = await fetch(`https://securl.nu${data.img}`).then(
            (res) => res.blob()
          );

          await interaction.editReply({
            embeds: [
              {
                color: "RANDOM",
                image: {
                  url: "attachment://screenshot.png",
                },
              },
            ],
            files: [
              new MessageAttachment()
                .setFile(image.stream())
                .setName("screenshot.png"),
            ],
          });
        } catch {
          await interaction.editReply({
            embeds: [
              {
                color: "RANDOM",
                description: "URLを変えてやり直してください",
              },
            ],
            ephemeral: true,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "wikipedia",
      description: "wikipediaで検索し、表示します",
      options: [
        {
          name: "word",
          type: "STRING",
          description: "検索ワードを入力",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "wikipedia") {
      const word = interaction.options.getString("word");

      try {
        const data = await fetch(
          `https://ja.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            word
          )}`
        ).then((res) => res.json());

        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              title: data.title,
              url: data.content_urls.desktop.page,
              description: data.extract,
            },
          ],
        });
      } catch {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "検索ワードを変えて、もう一度実行してください",
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "warning",
      description: "ユーザーに警告を行います",
      options: [
        {
          name: "user",
          type: "USER",
          description: "ユーザーを選択",
          required: true,
        },
        {
          name: "reason",
          type: "STRING",
          description: "警告理由",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "warning") {
      const fetchMember = require("./fetchMember.js");
      const user = interaction.options.getUser("user");
      const reason = interaction.options.getString("reason");
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      }
      const member = await fetchMember(interaction.guild, user.id);
      if (!member)
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "警告できませんでした",
              },
              description: "指定したユーザーが取得できません",
            },
          ],
          ephemeral: true,
        });

      if (member.user.id === interaction.user.id)
        return await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "警告できませんでした",
              },
              description: "自分自身を警告することはできません",
            },
          ],
          ephemeral: true,
        });

      try {
        await member.user.send({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "警告されました",
              },
              description: reason,
              footer: {
                text: `${interaction.guild.name}(${interaction.guild.id})`,
                icon_url:
                  interaction.guild.iconURL() ||
                  "https://cdn.discordapp.com/embed/avatars/0.png",
              },
              timestamp: new Date(),
            },
          ],
        });

        await interaction.reply({
          content: `<@${interaction.user.id}>`,
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: `${member.user.tag}を警告しました`,
              },
              description: `理由: ${reason}`,
            },
          ],
        });
      } catch (error) {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "警告できませんでした",
              },
              description: "ユーザーがDMを拒否している可能性があります",
              fields: [
                {
                  name: "エラーコード",
                  value: `\`\`\`${error}\`\`\``,
                },
              ],
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "yahoo",
      description: "Yahooで検索し表示します",
      options: [
        {
          name: "word",
          type: "STRING",
          description: "検索ワードを入力",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "yahoo") {
      const word = interaction.options.getString("word");

      await interaction.deferReply();
      try {
        const res = await fetch(
          `https://search.yahoo.co.jp/search?p=${word}`
        ).then((res) => res.text());

        const { document } = new JSDOM(res).window;

        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              title: `${word}の検索結果`,
              url: `https://search.yahoo.co.jp/search?p=${word}`,
              description: Array.from(document.querySelectorAll("li a"))
                .map(
                  (data) =>
                    `[${data.innerHTML.replace(/<[^>]+>/g, "")}](${data.href})`
                )
                .join("\n"),
            },
          ],
        });
      } catch {
        await interaction.editReply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "検索ワードを変えてやり直してください",
            },
          ],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "youtube",
      description: "youtubeの動画をMP4で送信します",
      options: [
        {
          name: "url",
          type: "STRING",
          description: "URLを指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "youtube") {
      const url = interaction.options.getString("url");
      if (!ytdl.validateURL(url)) {
        return interaction.reply("有効なYouTubeリンクを指定してください。");
      }
      try {
        const info = await ytdl.getInfo(url);
        const videoFormats = ytdl.filterFormats(info.formats, "videoandaudio");
        const googleVideoLink = videoFormats[0].url;

        const title = info.videoDetails.title;
        const channel = info.videoDetails.author.name;
        const duration = new Date(info.videoDetails.lengthSeconds * 1000)
          .toISOString()
          .substr(11, 8);

        const embed = new MessageEmbed()
          .setTitle(title)
          .setURL(url)
          .setDescription(`ダウンロードリンク: [こちら](${googleVideoLink})`)
          .addField("チャンネル", channel, true)
          .addField("再生時間", duration, true)
          .setColor("RANDOM")
          .setThumbnail(info.videoDetails.thumbnails[0].url)
          .setTimestamp();

        interaction.reply({ embeds: [embed] });
        const response = await axios({
          url: googleVideoLink,
          method: "GET",
          responseType: "stream",
        });

        const path = "./videoplayback.mp4";
        const writer = fs.createWriteStream(path);

        response.data.pipe(writer);

        writer.on("finish", async () => {
          await interaction.channel.send({
            files: [
              {
                attachment: path,
                name: "videoplayback.mp4",
              },
            ],
          });

          fs.unlinkSync(path);
        });

        writer.on("error", () => {
          interaction.reply("動画のダウンロード中にエラーが発生しました。");
        });
      } catch (error) {
        console.error(error);
        const errorembed = new MessageEmbed()
          .setTitle("error")
          .setDescription(処理中にエラーが発生しました)
          .setColor("RED")
          .setTimestamp();
        interaction.reply({ embeds: [errorembed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "youtube-search") {
      const id = interaction.options.getString("id");

      try {
        const data = await fetch("https://www.youtube.com/youtubei/v1/player", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            context: {
              client: {
                clientName: "WEB",
                clientVersion: "2.20210721.00.00",
              },
            },
            videoId: id,
          }),
        }).then((res) => res.json());

        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              title: data.videoDetails.title,
              url: `https://www.youtube.com/watch?v=${data.videoDetails.videoId}`,
              description: data.videoDetails.shortDescription,
              image: {
                url: data.videoDetails.thumbnail.thumbnails[
                  data.videoDetails.thumbnail.thumbnails.length - 1
                ].url,
              },
              fields: [
                {
                  name: "チャンネル",
                  value: `[${data.videoDetails.author}](${data.microformat.playerMicroformatRenderer.ownerProfileUrl})`,
                },
                {
                  name: "再生数",
                  value: `${data.videoDetails.viewCount}回`,
                },
                {
                  name: "動画時間",
                  value: `${data.videoDetails.lengthSeconds}秒`,
                },
                {
                  name: "投稿日",
                  value: data.microformat.playerMicroformatRenderer.uploadDate,
                },
              ],
            },
          ],
        });
      } catch {
        await interaction.reply({
          embeds: [
            {
              color: "RANDOM",
              author: {
                name: "取得できませんでした",
                icon_url: "https://cdn.taka.cf/images/system/error.png",
              },
              description: "有効なYoutubeの動画IDを指定してください",
            },
          ],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

//テキストコマンド
client.on("message", (message) => {
  if (message.content === "r.") {
    message.reply("コマンドを指定してください");
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.avatar")) {
      const user = message.mentions.users.first() || message.author;
      const avatarURL = user.displayAvatarURL({
        format: "png",
        dynamic: true,
        size: 1024,
      });
      const embed = new MessageEmbed()
        .setTitle(`${user}のアイコン`)
        .setImage(avatarURL)
        .setColor("RANDOM");
      await message.channel.send({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.clear")) {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });

      const args = message.content.split(" ");
      const amount = parseInt(args[1]);

      if (isNaN(amount) || amount <= 0) {
        return message.reply("無効なメッセージ数が指定されました。");
      }

      try {
        const messages = await message.channel.messages.fetch({
          limit: amount + 1,
        });
        await message.channel.bulkDelete(messages);
        message.channel
          .send(`${amount}件のメッセージを削除しました。`)
          .then((msg) => msg.delete({ timeout: 5000 })); // 5秒後に削除
      } catch (error) {
        console.error(error);
        message.channel.send("メッセージを削除できませんでした。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

const voteCommand = "vote";
const endVoteCommand = "endvote";
client.on("messageCreate", async (message) => {
  try {
    if (!message.content.startsWith(prefix)) return;

    const [command, ...args] = message.content.slice(prefix.length).split(" ");

    if (command === voteCommand) {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });

      const [title, ...choices] = args;

      if (!title) return message.channel.send("タイトルを指定してください");
      if (choices.length < 2 || choices.length > emojis.length)
        return message.channel.send(
          `選択肢は2から${emojis.length}つを指定してください`
        );

      const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(choices.map((c, i) => `${emojis[i]} ${c}`).join("\n"));
      const poll = await message.channel.send({ embeds: [embed] });
      emojis.slice(0, choices.length).forEach((emoji) => poll.react(emoji));
      embed.setFooter({
        text: `集計コマンド: ${prefix}${endVoteCommand} ${poll.channel.id} ${poll.id}`,
      });

      await poll.edit({ embeds: [embed] });
      return;
    }

    if (command === endVoteCommand) {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });

      const [cid, mid] = args;
      if (!cid || !mid) return message.channel.send("IDが指定されていません。");

      const channel = await message.guild.channels.fetch(cid);
      const vote = await channel.messages.fetch(mid);

      if (vote.author.id !== client.user.id) return;
      if (!vote.embeds[0]) return;

      let result = "投票結果";
      for (
        let i = 0;
        vote.reactions.cache.get(emojis[i]) && i < emojis.length;
        i++
      ) {
        const reaction = vote.reactions.cache.get(emojis[i]);
        result = `${result}\n${emojis[i]}：${
          reaction.users.cache.has(client.user.id)
            ? reaction.count - 1
            : reaction.count
        }票`;
      }

      await vote.reply({
        embeds: [
          new MessageEmbed()
            .setTitle(vote.embeds[0].title)
            .setDescription(result),
        ],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", (message) => {
  try {
    if (message.content === "r.day") {
      const week = ["日", "月", "火", "水", "木", "金", "土"];
      const date = new Date();
      const day = date.getDay();
      const embed = new MessageEmbed()
        .setTitle("今日の日付")
        .addField("😁", "今日は" + week[day] + "曜日でえす")
        .setColor("RANDOM")
        .setTimestamp();
      message.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

const Title = "🥠おみくじ🥠";

client.on("messageCreate", (message) => {
  try {
    if (message.content === "r.omi.g") {
      const 大吉 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>の今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003220.png"
        );

      const 中吉 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222.png"
        );

      const 小吉 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>の今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223.png"
        );

      const 末吉 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>の今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224.png"
        );

      const 吉 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>の今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003221.png"
        );

      const 凶 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>の今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003225.png"
        );

      const 大凶 = new MessageEmbed()
        .setTitle(Title)
        .addField("今日の全てが分かります", "運勢↓↓↓")
        .setDescription(`<@!${message.member.id}>の今日の運勢は`)
        .setImage(
          "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003226.png"
        );

      let arr = [大吉, 中吉, 小吉, 末吉, 吉, 凶, 大凶];
      let weight = [15, 25, 20, 20, 15, 10, 5];
      var random = Math.floor(Math.random() * arr.length);
      var res = arr[random];
      message.channel.send({ embeds: [res] });
      console.log(`${message.author.username}:おみくじ`);
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content === "r.banlist" && message.guild) {
      try {
        const bans = await message.guild.bans.fetch();

        if (bans.size === 0) {
          message.channel.send("BANされたメンバーはいません。");
          return;
        }

        const banListEmbed = {
          color: "RED",
          title: "BANされたメンバー一覧",
          description: bans.map((ban) => `<@${ban.user.id}>`).join("\n"),
        };

        message.channel.send({ embeds: [banListEmbed] });
      } catch (error) {
        console.error(error);
        message.channel.send("エラーが発生しました。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    const arg = message.content.slice(prefix.length).split(/ +/);
    const command = arg.shift().toLowerCase();
    if (
      message.authodeaxbot ||
      message.channel.type == "DM" ||
      !message.content.startsWith(prefix)
    ) {
      return;
    }
    if (command == "kick") {
      const embed = new MessageEmbed();
      if (!message.member.permissions.has("KICK_MEMBERS")) {
        return message.reply("使用権限がありません。");
      }
      let user;
      if (message.mentions.members.first()) {
        user = message.mentions.members.first();
        embed.setDescription(`${user}をKICKしました。`);
      } else if (message.content.match(/ /)) {
        user = message.guild.members.cache.get(
          message.content.slice(prefix.length + 5).trim()
        );
        embed.setDescription(
          `<@${message.content
            .slice(prefix.length + 5)
            .trim()}>をKICKしました。`
        );
      } else {
        return message.reply("メンションまたはIDが入力されていません。");
      }
      if (!user.kickable) {
        return message.reply("このメンバーはKICKすることができません。");
      }
      await user.kick();
      embed.setTitle("Success").setColor("RANDOM");
      message.reply({ embeds: [embed] });
    }
    if (command == "ban") {
      const embed = new MessageEmbed();
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      let user;
      if (message.mentions.members.first()) {
        user = message.mentions.members.first();
        embed.setDescription(`${user}をBANしました。`);
      } else if (message.content.match(/ /)) {
        user = message.guild.members.cache.get(
          message.content.slice(prefix.length + 5).trim()
        );
        embed.setDescription(
          `<@${message.content.slice(prefix.length + 4).trim()}>をBANしました。`
        );
      } else {
        return message.reply("メンションまたはIDが入力されていません。");
      }
      if (!user.bannable) {
        return message.reply("このメンバーはBANすることができません。");
      }
      await user.ban();
      embed.setTitle("Success").setColor("RANDOM");
      message.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", (message) => {
  try {
    if (message.content.startsWith("r.timeout") && !message.authodeaxbot) {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });

      const commandArgs = message.content.split(" ");
      const targetUser = commandArgs[1];
      const timeoutDuration = commandArgs[2];
      const timeoutReason = commandArgs.slice(3).join(" ");

      if (!targetUser) {
        message.reply("ユーザーが指定されていません。");
        return;
      }

      const mentionedUser = message.mentions.users.first();
      const userId = mentionedUser ? mentionedUser.id : targetUser;

      const targetMember = message.guild.members.cache.get(userId);

      if (!targetMember) {
        message.reply("指定されたユーザーが見つかりません。");
        return;
      }

      let timeoutMilliseconds = 0;
      switch (timeoutDuration) {
        case "10秒":
          timeoutMilliseconds = 10 * 1000;
        case "20秒":
          timeoutMilliseconds = 20 * 1000;
          break;
        case "30秒":
          timeoutMilliseconds = 30 * 1000;
          break;
        case "40秒":
          timeoutMilliseconds = 40 * 1000;
          break;
        case "50秒":
          timeoutMilliseconds = 50 * 1000;
          break;
        case "1分":
          timeoutMilliseconds = 1 * 60 * 1000;
          break;
        case "2分":
          timeoutMilliseconds = 2 * 60 * 1000;
          break;
        case "3分":
          timeoutMilliseconds = 3 * 60 * 1000;
          break;
        case "4分":
          timeoutMilliseconds = 4 * 60 * 1000;
          break;
        case "5分":
          timeoutMilliseconds = 5 * 60 * 1000;
          break;
        case "6分":
          timeoutMilliseconds = 6 * 60 * 1000;
          break;
        case "7分":
          timeoutMilliseconds = 7 * 60 * 1000;
          break;
        case "8分":
          timeoutMilliseconds = 8 * 60 * 1000;
          break;
        case "9分":
          timeoutMilliseconds = 9 * 60 * 1000;
          break;
        case "10分":
          timeoutMilliseconds = 10 * 60 * 1000;
          break;
        case "20分":
          timeoutMilliseconds = 20 * 60 * 1000;
          break;
        case "30分":
          timeoutMilliseconds = 30 * 60 * 1000;
          break;
        case "40分":
          timeoutMilliseconds = 40 * 60 * 1000;
          break;
        case "50分":
          timeoutMilliseconds = 50 * 60 * 1000;
          break;
        case "1時間":
          timeoutMilliseconds = 60 * 60 * 1000;
          break;
        case "1日":
          timeoutMilliseconds = 24 * 60 * 60 * 1000;
          break;
        case "2日":
          timeoutMilliseconds = 48 * 60 * 60 * 1000;
          break;
        case "3日":
          timeoutMilliseconds = 72 * 60 * 60 * 1000;
          break;
        case "4日":
          timeoutMilliseconds = 96 * 60 * 60 * 1000;
          break;
        case "5日":
          timeoutMilliseconds = 120 * 60 * 60 * 1000;
          break;
        case "6日":
          timeoutMilliseconds = 144 * 60 * 60 * 1000;
          break;
        case "1週間":
          timeoutMilliseconds = 7 * 24 * 60 * 60 * 1000;
          break;
        case "8日":
          timeoutMilliseconds = 8 * 24 * 60 * 60 * 1000;
          break;
        case "9日":
          timeoutMilliseconds = 9 * 24 * 60 * 60 * 1000;
          break;
        case "10日":
          timeoutMilliseconds = 10 * 24 * 60 * 60 * 1000;
          break;
        case "11日":
          timeoutMilliseconds = 11 * 24 * 60 * 60 * 1000;
          break;
        case "12日":
          timeoutMilliseconds = 12 * 24 * 60 * 60 * 1000;
          break;
        case "13日":
          timeoutMilliseconds = 13 * 24 * 60 * 60 * 1000;
          break;
        case "14日":
          timeoutMilliseconds = 14 * 24 * 60 * 60 * 1000;
          break;
        case "15日":
          timeoutMilliseconds = 15 * 24 * 60 * 60 * 1000;
          break;
        case "16日":
          timeoutMilliseconds = 16 * 24 * 60 * 60 * 1000;
          break;
        case "17日":
          timeoutMilliseconds = 17 * 24 * 60 * 60 * 1000;
          break;
        case "18日":
          timeoutMilliseconds = 18 * 24 * 60 * 60 * 1000;
          break;
        case "19日":
          timeoutMilliseconds = 19 * 24 * 60 * 60 * 1000;
          break;
        case "20日":
          timeoutMilliseconds = 20 * 24 * 60 * 60 * 1000;
          break;
        case "21日":
          timeoutMilliseconds = 21 * 24 * 60 * 60 * 1000;
          break;
        case "22日":
          timeoutMilliseconds = 22 * 24 * 60 * 60 * 1000;
          break;
        case "23日":
          timeoutMilliseconds = 23 * 24 * 60 * 60 * 1000;
          break;
        case "24日":
          timeoutMilliseconds = 24 * 24 * 60 * 60 * 1000;
          break;
        case "25日":
          timeoutMilliseconds = 25 * 24 * 60 * 60 * 1000;
          break;
        case "26日":
          timeoutMilliseconds = 26 * 24 * 60 * 60 * 1000;
          break;
        case "27日":
          timeoutMilliseconds = 27 * 24 * 60 * 60 * 1000;
          break;
        case "28日":
          timeoutMilliseconds = 28 * 24 * 60 * 60 * 1000;
          break;
        default:
          message.reply("無効なタイムアウト時間です。");
          return;
      }

      targetMember.timeout(timeoutMilliseconds, timeoutReason);
      const embed = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("タイムアウト")
        .setDescription(`${targetMember.user} をタイムアウトしました。`)
        .addField("理由", timeoutReason || "なし")
        .setThumbnail(targetMember.user.displayAvatarURL())
        .setAuthor(
          `実行者:${message.author.tag}`,
          message.author.displayAvatarURL()
        );

      message.reply({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("message", async (message) => {
  try {
    if (message.content.startsWith("r.untimeout") && !message.authodeaxbot) {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });
      const commandArgs = message.content.split(" ");
      const targetUser = commandArgs[1];

      if (!targetUser) {
        message.reply("ユーザーが指定されていません。");
        return;
      }

      const mentionedUser = message.mentions.users.first();
      const userId = mentionedUser ? mentionedUser.id : targetUser;

      const targetMember = message.guild.members.cache.get(userId);

      if (!targetMember) {
        message.reply("指定されたユーザーが見つかりません。");
        return;
      }

      if (!targetMember.isCommunicationDisabled()) {
        const embedError = new MessageEmbed()
          .setTimestamp()
          .setColor("#FF0000")
          .setTitle("error")
          .setDescription(
            `${targetMember.user} は現在タイムアウトされていません。`
          )
          .setAuthor(
            `実行者:${message.author.tag}`,
            message.author.displayAvatarURL()
          );

        await message.reply({ embeds: [embedError] });
        return;
      }

      await targetMember.timeout(0);
      const embedSuccess = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setTitle("タイムアウト解除")
        .setDescription(`${targetMember.user} のタイムアウトを解除しました。`)
        .setThumbnail(targetMember.user.displayAvatarURL())
        .setAuthor(
          `実行者:${message.author.tag}`,
          message.author.displayAvatarURL()
        );

      await message.reply({ embeds: [embedSuccess] });
    }
  } catch (e) {
    console.log(e);
  }
});

const channelnameId = "1198165101371461672";

client.on("messageCreate", handleMessageEvent);
client.on("messageDelete", handleMessageEvent);

async function handleMessageEvent(message) {
  try {
    if (message.channel.id !== channelnameId) return;

    const messageCount = await message.channel.messages
      .fetch()
      .then((messages) => messages.size);

    const newChannelName = `👑┃実績『${messageCount}』`;

    if (message.channel.name !== newChannelName) {
      try {
        await message.channel.setName(newChannelName);
        console.log(`Channel name updated to ${newChannelName}`);
      } catch (error) {
        console.error("Error updating channel name:", error);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("messageCreate", async (message) => {
  try {
    if (message.authodeaxbot) return;
    if (message.content.trim() === "とは") {
      return;
    }
    if (message.content.endsWith("とは")) {
      await message.react("🔍");
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  try {
    if (reaction.emoji.name === "🔍" && !usedeaxbot) {
      const messageContent = reaction.message.content.trim();
      if (!messageContent.endsWith("とは") || messageContent === "とは") {
        return;
      }

      const word = messageContent.slice(0, -2);
      const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CSE}&q=${word}とは`
      )
        .then((res) => res.json())
        .catch((error) => {
          console.error("Error fetching data:", error);
        });

      console.log(data);

      if (!data || !data.items) {
        console.error("Data or items not found");
        return;
      }
      await reaction.message.reply({
        embeds: [
          {
            color: "BLUE",
            title: `${word}とは`,
            fields: data.items.slice(0, 5).map((item) => ({
              name: item.title,
              value: `${item.link}\n${item.snippet}`,
            })),
          },
        ],
      });
      await reaction.message.reactions.removeAll("🔍").catch(console.error);
    }
  } catch (e) {
    console.log(e);
  }
});

let welcomeChannel = new Map();
const logchannelsFilePath = "welcomechannels.txt";

const WelcomeChannelsToFile = () => {
  try {
    fs.writeFileSync(logchannelsFilePath, JSON.stringify([...welcomeChannel]));
  } catch (e) {
    console.log(e);
  }
};

if (!fs.existsSync(logchannelsFilePath)) {
  try {
    fs.writeFileSync(logchannelsFilePath, "[]");
  } catch (e) {
    console.log(e);
  }
} else {
  try {
    const fileContent = fs.readFileSync(logchannelsFilePath, "utf-8");
    if (fileContent) {
      try {
        const savedwelcomeChannels = JSON.parse(fileContent);
        welcomeChannel = new Map(savedwelcomeChannels);
      } catch (error) {
        console.error("Error parsing channels from file:", error);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("ready", async () => {
  try {
    await client.application.commands.create({
      name: "welcomelog-setting",
      description: "入退室ログを送信するチャンネルを設定します",
      options: [
        {
          type: "STRING",
          name: "channelid",
          description: "入退室ログを送信するチャンネルを指定してください",
          required: true,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === "welcomelog-setting") {
      const channelId = options.getString("channelid");

      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });
      }

      const logchannelId = client.channels.cache.get(channelId);
      if (!logchannelId) {
        const error = new MessageEmbed()
          .setTitle("error")
          .setDescription(`チャンネルを取得できませんでした`)
          .setColor("RED")
          .setTimestamp();
        return interaction.reply({
          embeds: [error],
        });
      }

      welcomeChannel.set(interaction.guild.id, channelId);
      WelcomeChannelsToFile();

      const embed = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(`入退室ログが登録されました`)
        .addField(`登録されたチャンネル:`, `${logchannelId}`)
        .addField(
          `設定をリセットする場合は`,
          `r.deletelog ${interaction.guild.id} ${logchannelId.id}と送信するか/welcomelog-deleteを実行してください`
        )
        .setColor("RANDOM")
        .setTimestamp();

      return interaction.reply({
        embeds: [embed],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.welcomelog")) {
      const args = message.content.split(" ");
      if (args.length !== 2) {
        message.reply(
          "正しい形式でコマンドを入力してください： r.welcomelog チャンネルID"
        );
        return;
      }
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });
      const logchannelId = client.channels.cache.get(args[1]);
      if (!logchannelId) {
        message.reply("指定されたチャンネルが見つかりませんでした。");
        return;
      }

      welcomeChannel.set(message.guild.id, args[1]);
      WelcomeChannelsToFile();

      message.reply(
        `入退室ログが ${logchannelId} に設定されました。\n設定をリセットする場合は\nr.deletelog ${message.guild.id} ${logchannelId.id}\nと送信してください`
      );
    }

    if (message.content.startsWith("r.deletelog")) {
      const args = message.content.split(" ");
      if (args.length !== 3) {
        message.reply(
          "正しい形式でコマンドを入力してください： r.deletechannel サーバーID チャンネルID"
        );
        return;
      }
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.reply({
          content: "サーバー管理者しか使えません",
          ephemeral: true,
        });
      const guildIdToDelete = args[1];
      const logchannelIdToDelete = args[2];

      if (welcomeChannel.has(guildIdToDelete)) {
        const channelsInGuild = welcomeChannel.get(guildIdToDelete);

        if (!(channelsInGuild instanceof Map)) {
          welcomeChannel.set(guildIdToDelete, new Map());
          WelcomeChannelsToFile();
          message.reply(
            `サーバーID ${guildIdToDelete} のチャンネル ${logchannelIdToDelete} を削除しました。`
          );
          return;
        }

        if (channelsInGuild.has(logchannelIdToDelete)) {
          channelsInGuild.delete(logchannelIdToDelete);

          if (channelsInGuild.size === 0) {
            welcomeChannel.delete(guildIdToDelete);
          }

          WelcomeChannelsToFile();
          message.reply(
            `サーバーID ${guildIdToDelete} のチャンネル ${logchannelIdToDelete} を削除しました。`
          );
        } else {
          message.reply(
            `指定されたチャンネルID ${logchannelIdToDelete} はサーバーID ${guildIdToDelete} に存在しません。`
          );
        }
      } else {
        message.reply(
          `指定されたサーバーID ${guildIdToDelete} は存在しません。`
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("guildMemberAdd", (member) => {
  try {
    const logchannelId = welcomeChannel.get(member.guild.id);
    if (logchannelId) {
      const channel = client.channels.cache.get(logchannelId);
      if (channel) {
        const memberCount = member.guild.memberCount;
        const embed = new MessageEmbed()
          .setColor("#00ff00")
          .setTitle("入室ログ")
          .setDescription(
            `メンバー: ${member}\nID: ${member.id}\n現在の人数: ${memberCount}`
          )
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp();
        channel.send({ embeds: [embed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("guildMemberRemove", (member) => {
  try {
    const logchannelId = welcomeChannel.get(member.guild.id);
    if (logchannelId) {
      const channel = client.channels.cache.get(logchannelId);
      if (channel) {
        const memberCount = member.guild.memberCount;
        const embed = new MessageEmbed()
          .setColor("#ff0000")
          .setTitle("退出ログ")
          .setDescription(
            `メンバー: ${member}\nID: ${member.id}\n現在の人数: ${memberCount}`
          )
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp();
        channel.send({ embeds: [embed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith(`r.neko`)) {
      const args = message.content.split(" ");
      if (args.length !== 2) {
        message.reply(`正しい形式でコマンドを入力してください：r.neko type`);
        return;
      }

      const imageType = args[1].toLowerCase();

      const nekobotApiUrl = `https://nekobot.xyz/api/image?type=${imageType}`;

      try {
        const response = await axios.get(nekobotApiUrl);
        const imageUrl = response.data.message;

        const embed = {
          title: `SUCCESS ${imageType}`,
          image: {
            url: imageUrl,
          },
          timestamp: new Date(),
        };

        message.reply({ embeds: [embed] });
      } catch (error) {
        const types = [
          "hass, hmidriff, pgif, 4k, hentai, holo, hneko, neko, hkitsune, kemonomimi, anal, hanal, gonewild, kanna, ass, pussy, thigh, hthigh, gah, coffee, food, paizuri, tentacle, boobs, hboobs, yaoi",
        ];
        const embed2 = new EmbedBuilder()
          .setTitle("error")
          .setDescription(
            `画像タイプを取得できませんでした\n\n**使用可能なタイプ**\n${types}`
          )
          .setColor("RED")
          .setTimestamp();
        message.reply({
          embeds: [embed2],
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content === "r.totalserver") {
      const guildNames = client.guilds.cache.map((guild) => guild.name);

      const embed = new MessageEmbed()
        .setTitle("導入サーバー")
        .setDescription(guildNames.join("\n"))
        .setColor("#0099ff");

      message.channel.send({ embeds: [embed] });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (!message.content.startsWith("r.") || message.authodeaxbot) return;

    const args = message.content.slice(2).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "updatech") {
      const channelId = args[0];
      if (!channelId) return message.reply("チャンネルIDを指定してください。");

      // Save channel ID to updatechannel.txt
      fs.appendFileSync("updatechannel.txt", `${channelId}\n`);

      message.reply(`チャンネルID ${channelId} を更新しました。`);
    } else if (command === "update") {
      const content = args.join(" ");

      if (!content) return message.reply("メッセージ内容を指定してください。");

      // Read channel IDs from updatechannel.txt and send message
      const channelIds = fs
        .readFileSync("updatechannel.txt", "utf8")
        .trim()
        .split("\n");
      for (const id of channelIds) {
        const channel = await client.channels.fetch(id);
        if (channel && channel.isText()) {
          channel.send(content);
        }
      }

      message.reply("メッセージを全てのチャンネルに送信しました。");
    } else if (command === "updatechdelete") {
      const channelId = args[0];
      if (!channelId)
        return message.reply("削除するチャンネルIDを指定してください。");

      // Read channel IDs from updatechannel.txt
      let channelIds = fs
        .readFileSync("updatechannel.txt", "utf8")
        .trim()
        .split("\n");

      // Check if channel ID exists and remove it from the array
      const index = channelIds.indexOf(channelId);
      if (index !== -1) {
        channelIds.splice(index, 1);
        // Save updated channel IDs back to updatechannel.txt
        fs.writeFileSync("updatechannel.txt", channelIds.join("\n"));
        message.reply(`チャンネルID ${channelId} を削除しました。`);
      } else {
        message.reply(`チャンネルID ${channelId} が見つかりません。`);
      }
    } else if (command === "appupdate") {
      const content = args.join(" ");
      if (!content) return message.reply("メッセージを指定してください。");

      const updateEmbed = new MessageEmbed()
        .setTitle("アプリケーションアップデート通知")
        .setDescription(`${content}`)
        .setColor("RANDOM")
        .setTimestamp();
      const channelIds = fs
        .readFileSync("updatechannel.txt", "utf8")
        .trim()
        .split("\n");
      for (const id of channelIds) {
        const channel = await client.channels.fetch(id);
        if (channel && channel.isText()) {
          channel.send({ embeds: [updateEmbed] });
        }
      }
      message.reply("アップデート通知を送信しました。");
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("guildCreate", async (guild) => {
  try {
    const owner = await guild.fetchOwner();
    if (owner) {
      const embed = new MessageEmbed()
        .setTitle("導入通知")
        .setDescription(
          `${guild.name}にアプリケーションを導入していただきありがとうございます。/bot-update-channelコマンドでBOTの最新情報を自分のサーバーで受け取ることができます！`
        )
        .addField("サポートサーバー", "https://discord.gg/dEPWJYNGMw")
        .setColor("#0099ff");

      owner
        .send({ embeds: [embed] })
        .then(() => console.log("Embed sent to the server owner."))
        .catch((error) => console.error("Error sending embed:", error));
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("message", async (message) => {
  try {
    if (
      message.authodeaxbot ||
      !message.guild ||
      !message.content.toLowerCase().startsWith(prefix)
    )
      return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const allowedUserId = "1178414826184265819";
    if (args.length === 0) return;

    if (args[0] === "gban") {
      if (message.author.id !== allowedUserId)
        return message.reply("このコマンドを実行する権限がありません");

      const gbanId = args[1];
      const reason = args.slice(2).join(" ");

      if (!gbanId) return message.reply("GbanIDを入力してください");
      if (!reason) return message.reply("理由を入力してください");

      client.guilds.cache.forEach((g) => {
        try {
          g.members.ban(gbanId, { reason });
          console.log(g.name + "でのGBANに成功しました");
        } catch (e) {
          console.log(g.name + "でのGBANの執行に失敗しました。\n" + e);
        }
      });
      message.reply("Gbanを執行しました");
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("message", async (message) => {
  try {
    if (
      message.authodeaxbot ||
      !message.guild ||
      !message.content.toLowerCase().startsWith(prefix)
    )
      return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const allowedUserId = "1178414826184265819";
    if (args.length === 0) return;

    if (args[0] === "gunban") {
      if (message.author.id !== allowedUserId)
        return message.reply("このコマンドを実行する権限がありません");
      const unbanId = args[1];
      if (!unbanId)
        return message.reply("UnbanしたいユーザーのIDを入力してください");

      client.guilds.cache.forEach(async (g) => {
        try {
          const bannedUser = await g.bans.fetch(unbanId);
          if (bannedUser) {
            await g.members.unban(
              unbanId,
              "Unban command executed by " + message.author.tag
            );
            console.log(g.name + "でのUnbanに成功しました");
          } else {
            console.log(
              g.name +
                "でのUnbanに失敗しました。指定されたユーザーはBANされていません。"
            );
          }
        } catch (e) {
          console.log(g.name + "でのUnbanの執行に失敗しました。\n" + e);
        }
      });
      message.reply("Unbanを執行しました");
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (!message.content.startsWith(prefix) || message.authodeaxbot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "reload") {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }

      message.reply("Botを再起動しています...");
      await restartBot(message.channel);
    }
  } catch (e) {
    console.log(e);
  }
});

async function restartBot(channel) {
  try {
    await channel.send("Botを再起動します...");
    await client.destroy();
    await client.login(process.env.DISCORD_TOKEN);
    await channel.send("Botが再起動しました。");
  } catch (error) {
    console.error("Botの再起動中にエラーが発生しました:", error);
    await channel.send("Botの再起動中にエラーが発生しました。");
  }
}

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.dl ")) {
      const url = message.content.split(" ")[1];
      if (!ytdl.validateURL(url)) {
        return message.reply("有効なYouTubeリンクを提供してください。");
      }

      try {
        const info = await ytdl.getInfo(url);
        const videoFormats = ytdl.filterFormats(info.formats, "videoandaudio");
        const googleVideoLink = videoFormats[0].url;

        const title = info.videoDetails.title;
        const channel = info.videoDetails.author.name;
        const duration = new Date(info.videoDetails.lengthSeconds * 1000)
          .toISOString()
          .substr(11, 8);

        const embed = new MessageEmbed()
          .setTitle(title)
          .setURL(url)
          .setDescription(`ダウンロードリンク: [こちら](${googleVideoLink})`)
          .addField("チャンネル", channel, true)
          .addField("長さ", duration, true)
          .setColor("#FF0000")
          .setThumbnail(info.videoDetails.thumbnails[0].url)
          .setTimestamp();

        message.reply({ embeds: [embed] });

        const response = await axios({
          url: googleVideoLink,
          method: "GET",
          responseType: "stream",
        });

        const path = "./videoplayback.mp4";
        const writer = fs.createWriteStream(path);

        response.data.pipe(writer);

        writer.on("finish", async () => {
          await message.channel.send({
            files: [
              {
                attachment: path,
                name: "videoplayback.mp4",
              },
            ],
          });
          fs.unlinkSync(path);
        });

        writer.on("error", () => {
          message.reply("動画のダウンロード中にエラーが発生しました。");
        });
      } catch (error) {
        console.error(error);
        message.reply("リンクの変換中にエラーが発生しました。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

const path2 = "./webhook.txt";
const webhookName = "MessageUpdater";
const webhookAvatar = "https://i.imgur.com/AfFp7pu.png";
const intervals = {};
const embedIntervals = {};
let channel;
let messageId;
let content;
let embedContent = {};

function readDataFromFile() {
  try {
    if (!fs.existsSync(path2)) return {};

    const data = fs.readFileSync(path2, "utf8");
    return data.split("\n").reduce((acc, line) => {
      if (line.trim()) {
        const match = line.match(/^\[(\d+)\],(\d+),(\d+),(.+)$/);
        if (match) {
          const [, guildId, chId, msgId, cont] = match;
          acc[guildId] = { channelId: chId, messageId: msgId, content: cont };
        }
      }
      return acc;
    }, {});
  } catch (e) {
    console.log(e);
  }
}

function writeDataToFile(data) {
  try {
    const content = Object.entries(data)
      .map(
        ([guildId, { channelId, messageId, content }]) =>
          `[${guildId}],${channelId},${messageId},${content}`
      )
      .join("\n");
    fs.writeFileSync(path2, content, "utf8");
  } catch (e) {
    console.log(e);
  }
}

async function updateMessage(guildId) {
  try {
    const data = readDataFromFile();
    const { channelId, messageId: msgId, content: cont } = data[guildId];
    try {
      const guild = await client.guilds.fetch(guildId);
      const channel = await guild.channels.fetch(channelId);
      await channel.messages.delete(msgId);
      const newMessage = await channel.send(cont);
      data[guildId].messageId = newMessage.id;
      writeDataToFile(data);
    } catch (e) {
      console.log(
        `メッセージの更新中にエラーが発生しました (ギルドID: ${guildId}):`,
        e
      );
    }
  } catch (e) {
    console.log(e);
  }
}

async function updateEmbedMessage(guildId) {
  try {
    const data = readDataFromFile();
    const { channelId, messageId: msgId, content: cont } = data[guildId];
    const [embedTitle, embedDescription] = cont.split(";");
    const embed = {
      title: embedTitle,
      description: embedDescription,
      color: 0x0099ff,
    };

    try {
      const guild = await client.guilds.fetch(guildId);
      const channel = await guild.channels.fetch(channelId);
      await channel.messages.delete(msgId);
      const newMessage = await channel.send({ embeds: [embed] });
      data[guildId].messageId = newMessage.id;
      writeDataToFile(data);
    } catch (e) {
      console.log(
        `埋め込みメッセージの更新中にエラーが発生しました (ギルドID: ${guildId}):`,
        e
      );
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.msg ")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      content = message.content.slice(6).trim();
      channel = message.channel; // channelを定義
      const guildId = message.guild.id;

      try {
        const webhook = await channel.createWebhook(webhookName, {
          avatar: webhookAvatar,
        });

        const sentMessage = await webhook.send(content);
        messageId = sentMessage.id;

        const data = readDataFromFile();
        data[guildId] = { channelId: channel.id, messageId, content };
        writeDataToFile(data);

        if (intervals[guildId]) clearInterval(intervals[guildId]);
        intervals[guildId] = setInterval(() => updateMessage(guildId), 10000);
      } catch (error) {
        console.error("Webhook の作成中にエラーが発生しました:", error);
      }
    } else if (message.content.startsWith("r.embedmsg ")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      const embedArgs = message.content.slice(10).trim().split(" ");
      if (embedArgs.length < 2) {
        return message.reply("使用方法: r.embedmsg title内容;Description内容");
      }
      const [embedTitle, embedDescription] = embedArgs;
      embedContent = { title: embedTitle, description: embedDescription };
      channel = message.channel;
      const guildId = message.guild.id;

      const embed = {
        title: embedTitle,
        description: embedDescription,
        color: 0x0099ff,
      };

      try {
        const webhook = await channel.createWebhook(webhookName, {
          avatar: webhookAvatar,
        });

        const sentMessage = await webhook.send({ embeds: [embed] });
        messageId = sentMessage.id;

        const data = readDataFromFile();
        data[guildId] = {
          channelId: channel.id,
          messageId,
          content: `${embedTitle};${embedDescription}`,
        };
        writeDataToFile(data);

        if (embedIntervals[guildId]) clearInterval(embedIntervals[guildId]);
        embedIntervals[guildId] = setInterval(
          () => updateEmbedMessage(guildId),
          10000
        );
      } catch (error) {
        console.error("Webhook の作成中にエラーが発生しました:", error);
      }
    } else if (message.content === "r.unmsg") {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      const guildId = message.guild.id;

      const data = readDataFromFile();

      if (data[guildId]) {
        const { channelId } = data[guildId];

        delete data[guildId];
        writeDataToFile(data);

        try {
          const guild = await client.guilds.fetch(guildId);
          const channel = await guild.channels.fetch(channelId);
          const webhooks = await channel.fetchWebhooks();
          const webhook = webhooks.find((wh) => wh.name === webhookName);

          if (webhook) {
            await webhook.delete();
            console.log(`Webhook deleted for guild ${guildId}`);
          }
        } catch (error) {
          console.error("Webhook の削除中にエラーが発生しました:", error);
        }

        if (intervals[guildId]) {
          clearInterval(intervals[guildId]);
          delete intervals[guildId];
        }

        if (embedIntervals[guildId]) {
          clearInterval(embedIntervals[guildId]);
          delete embedIntervals[guildId];
        }
        console.log(`メッセージの更新を停止しました for guild ${guildId}`);
      } else {
        message.channel.send(
          "このサーバーには保存されたWebhook情報がありません。"
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("shardDisconnect", () => {
  try {
    for (const intervalId of Object.values(intervals)) {
      clearInterval(intervalId);
    }
    for (const intervalId of Object.values(embedIntervals)) {
      clearInterval(intervalId);
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("ready", async () => {
  try {
    const data = readDataFromFile();

    for (const guildId of Object.keys(data)) {
      if (data[guildId].content.includes(";")) {
        if (embedIntervals[guildId]) clearInterval(embedIntervals[guildId]);
        embedIntervals[guildId] = setInterval(
          () => updateEmbedMessage(guildId),
          10000
        );
      } else {
        if (intervals[guildId]) clearInterval(intervals[guildId]);
        intervals[guildId] = setInterval(() => updateMessage(guildId), 10000); // 10秒間隔
      }
    }
  } catch (e) {
    console.log(e);
  }
});

const giveawaysFilePath = "./giveaways.txt";

const readGiveaways = () => {
  try {
    if (!fs.existsSync(giveawaysFilePath)) {
      return {};
    }
    const data = fs.readFileSync(giveawaysFilePath, "utf-8");
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.log(e);
  }
};

const writeGiveaways = (giveaways) => {
  try {
    fs.writeFileSync(giveawaysFilePath, JSON.stringify(giveaways, null, 2));
  } catch (e) {
    console.log(e);
  }
};

client.on("messageCreate", async (message) => {
  try {
    if (!message.content.startsWith("r.giveaway")) return;
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply("このコマンドを実行する権限がありません。");
    }
    const args = message.content.split(" ").slice(1);
    const prize = args[0];
    const duration = args[1];
    const winnersCount = parseInt(args[2]);

    if (!prize || !duration || isNaN(winnersCount)) {
      return message.reply(
        "正しいフォーマットでコマンドを入力してください: `r.giveaway 景品名 時間 当選人数`"
      );
    }

    const durationMs = duration.endsWith("m")
      ? parseInt(duration) * 60000
      : parseInt(duration) * 3600000;
    const endTime = Date.now() + durationMs;

    const embed = new MessageEmbed()
      .setTitle(prize)
      .setDescription(
        `終了時刻: <t:${Math.floor(
          endTime / 1000
        )}:R>\n当選人数: ${winnersCount}\n現在の参加人数: 0`
      );

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("giveaway_enter")
        .setLabel("参加する")
        .setStyle("PRIMARY"),
      new MessageButton()
        .setCustomId("giveaway_leave")
        .setLabel("参加をやめる")
        .setStyle("SECONDARY")
    );

    const giveawayMessage = await message.channel.send({
      embeds: [embed],
      components: [row],
    });

    const giveaways = readGiveaways();
    giveaways[giveawayMessage.id] = {
      guildId: message.guild.id,
      channelId: message.channel.id,
      endTime: endTime,
      winnersCount: winnersCount,
      participants: [],
    };
    writeGiveaways(giveaways);

    console.log("Saved giveaways:", giveaways);
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.gdelete")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      const args = message.content.split(" ").slice(1);
      const messageId = args[0];

      if (!messageId) {
        return message.reply(
          "正しいフォーマットでコマンドを入力してください: `r.gdelete messageid`"
        );
      }

      const giveaways = readGiveaways();

      if (giveaways[messageId]) {
        delete giveaways[messageId];
        writeGiveaways(giveaways);

        message.reply(
          `ギブアウェイ企画（メッセージID: ${messageId}）は削除されました。`
        );
        console.log(`Giveaway with message ID ${messageId} has been deleted.`);
      } else {
        message.reply(
          `メッセージID: ${messageId} に対応するギブアウェイ企画が見つかりませんでした。`
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.gskip")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      const args = message.content.split(" ").slice(1);
      const messageId = args[0];

      if (!messageId) {
        return message.reply(
          "正しいフォーマットでコマンドを入力してください: `r.gskip messageid`"
        );
      }

      const giveaways = readGiveaways();

      if (giveaways[messageId]) {
        const giveaway = giveaways[messageId];
        const channel = client.channels.cache.get(giveaway.channelId);

        if (channel) {
          const winners = giveaway.participants
            .sort(() => Math.random() - 0.5)
            .slice(0, giveaway.winnersCount);
          channel.send(`当選者: ${winners.map((w) => `<@${w}>`).join(", ")}`);
        }

        delete giveaways[messageId];
        writeGiveaways(giveaways);

        message.reply(
          `ギブアウェイ企画（メッセージID: ${messageId}）は即座に終了し、当選者が選ばれました。`
        );
      } else {
        message.reply(
          `メッセージID: ${messageId} に対応するギブアウェイ企画が見つかりませんでした。`
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;

    if (interaction.customId === "giveaway_enter") {
      const giveaways = readGiveaways();
      const giveaway = giveaways[interaction.message.id];

      if (!giveaway) return;

      if (Date.now() >= giveaway.endTime) {
        await interaction.reply({
          content: "このイベントは既に終了しています。",
          ephemeral: true,
        });
        return;
      }

      if (!giveaway.participants.includes(interaction.user.id)) {
        giveaway.participants.push(interaction.user.id);
        writeGiveaways(giveaways);

        const embed = new MessageEmbed(
          interaction.message.embeds[0]
        ).setDescription(`現在の参加人数: ${giveaway.participants.length}`);
        await interaction.update({ embeds: [embed] });

        console.log("Updated giveaways:", giveaways);
      } else {
        await interaction.reply({
          content: "既に参加しています！",
          ephemeral: true,
        });
      }
    } else if (interaction.customId === "giveaway_leave") {
      const giveaways = readGiveaways();
      const giveaway = giveaways[interaction.message.id];

      if (!giveaway) return;
      if (giveaway.participants.includes(interaction.user.id)) {
        giveaway.participants = giveaway.participants.filter(
          (id) => id !== interaction.user.id
        );
        writeGiveaways(giveaways);

        const embed = new MessageEmbed(
          interaction.message.embeds[0]
        ).setDescription(`現在の参加人数: ${giveaway.participants.length}`);
        await interaction.update({ embeds: [embed] });

        console.log("Updated giveaways:", giveaways);
      } else {
        await interaction.reply({
          content: "まだ参加していません。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

const checkGiveaways = () => {
  try {
    const giveaways = readGiveaways();
    const now = Date.now();

    for (const [messageId, giveaway] of Object.entries(giveaways)) {
      if (now >= giveaway.endTime) {
        const channel = client.channels.cache.get(giveaway.channelId);
        if (channel) {
          const winners = giveaway.participants
            .sort(() => Math.random() - 0.5)
            .slice(0, giveaway.winnersCount);
          channel.send(`当選者: ${winners.map((w) => `<@${w}>`).join(", ")}`);
        }
        delete giveaways[messageId];
        writeGiveaways(giveaways);

        console.log("Removed ended giveaway:", messageId);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

setInterval(checkGiveaways, 10000);

const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
} = require("@discordjs/voice");
const { execSync } = require("child_process");

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("r.play")) {
    const url = message.content.split(" ")[1];

    if (!url) {
      message.reply("URLを指定してください。");
      return;
    }

    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      message.reply("ボイスチャンネルに参加してください。");
      return;
    }

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });

    let resource;
    if (ytdl.validateURL(url)) {
      try {
        const stream = await ytdl(url, {
          filter: "audioonly",
          quality: "highestaudio",
          highWaterMark: 1 << 25,
        });
        resource = createAudioResource(stream);
      } catch (error) {
        console.error(
          "YouTubeのストリームを取得する際にエラーが発生しました:",
          error
        );
        message.reply(
          "YouTubeのストリームを取得する際にエラーが発生しました。"
        );
        return;
      }
    } else {
      message.reply("有効なYouTube URLを指定してください。");
      return;
    }

    const player = createAudioPlayer();
    connection.subscribe(player);

    player.play(resource);
    player.on(AudioPlayerStatus.Playing, () => {
      console.log("音楽が再生されています。");
    });

    player.on("error", (error) => {
      console.error("Error:", error.message);
    });

    message.reply("音楽を再生します。");
  }
});

const SPAM_LIMIT = 10;
const TIME_WINDOW = 10 * 1000;
const FILE_PATH = "./servers.txt";

const messageLog = new Map();

function loadServerIds() {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }

    const data = fs.readFileSync(FILE_PATH, "utf8");
    return data.split("\n").filter(Boolean);
  } catch (e) {
    console.log(e);
  }
}

function saveServerId(serverId) {
  try {
    const serverIds = loadServerIds();
    if (!serverIds.includes(serverId)) {
      fs.appendFileSync(FILE_PATH, serverId + "\n");
    }
  } catch (e) {
    console.log(e);
  }
}

function removeServerId(serverId) {
  try {
    const serverIds = loadServerIds();
    const filteredIds = serverIds.filter((id) => id !== serverId);
    fs.writeFileSync(FILE_PATH, filteredIds.join("\n") + "\n");
  } catch (e) {
    console.log(e);
  }
}

client.on("messageCreate", async (message) => {
  try {
    if (message.authodeaxbot) return;

    const serverIds = loadServerIds();
    if (!serverIds.includes(message.guild.id)) return;

    const userId = message.author.id;
    const now = Date.now();

    if (!messageLog.has(userId)) {
      messageLog.set(userId, []);
    }

    const timestamps = messageLog.get(userId);
    timestamps.push(now);

    while (timestamps.length > 0 && timestamps[0] <= now - TIME_WINDOW) {
      timestamps.shift();
    }

    // スパムメッセージの検出
    if (timestamps.length >= SPAM_LIMIT) {
      try {
        const member = await message.guild.members.fetch(userId);
        await member.timeout(
          24 * 60 * 60 * 1000,
          "連投スパムのため1日間のタイムアウト"
        );
        messageLog.delete(userId);

        const embed = new MessageEmbed()
          .setTitle("timeout")
          .setDescription(
            `${member.user} が連投スパムのため1日間タイムアウトされました。`
          )
          .setColor("RANDOM")
          .setTimestamp();
        message.channel.send({ embeds: [embed] });
      } catch (error) {
        console.error(`タイムアウトエラー: ${error}`);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", (message) => {
  try {
    const args = message.content.split(" ");

    if (args[0] === "r.antispam" && args.length === 2) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      const serverId = args[1];
      saveServerId(serverId);
      const embed1 = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(
          `サーバーID ${serverId} がスパム監視リストに追加されました。`
        )
        .setColor("RED")
        .setTimestamp();
      message.reply({ embeds: [embed1] });
    } else if (args[0] === "r.unantispam" && args.length === 2) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.reply("このコマンドを実行する権限がありません。");
      }
      const serverId = args[1];
      const serverIds = loadServerIds();
      const embed2 = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(
          `サーバーID ${serverId} がスパム監視リストから削除されました。`
        )
        .setColor("RED")
        .setTimestamp();
      if (serverIds.includes(serverId)) {
        removeServerId(serverId);
        message.reply({ embeds: [embed2] });
      } else {
        const embed = new MessageEmbed()
          .setColor("#FF0000")
          .setTitle("エラー")
          .setDescription(
            `サーバーID ${serverId} はスパム監視リストに存在しません。`
          );
        message.channel.send({ embeds: [embed] });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    const prefix = "r.指定メッセージ削除";
    if (message.content.startsWith(prefix)) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const command = message.content.slice(prefix.length).trim();
      const channels = message.guild.channels.cache.filter((channel) =>
        channel.isText()
      );

      for (const [channelId, channel] of channels) {
        let fetchedMessages;
        try {
          fetchedMessages = await channel.messages.fetch();
        } catch (error) {
          console.error(
            `Failed to fetch messages in channel ${channel.name}:`,
            error
          );
          continue;
        }
        const messagesToDelete = fetchedMessages.filter(
          (msg) => msg.content === command
        );
        for (const msg of messagesToDelete.values()) {
          try {
            await msg.delete();
            console.log(
              `Deleted message: ${msg.content} in channel ${channel.name}`
            );
          } catch (error) {
            console.error(
              `Failed to delete message in channel ${channel.name}:`,
              error
            );
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  try {
    if (message.content.startsWith("r.usermsgdelete")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const mentionedUser = message.mentions.users.first();
      if (!mentionedUser) {
        return message.reply("ユーザーをメンションしてください。");
      }

      try {
        const channels = message.guild.channels.cache.filter(
          (c) => c.type === "GUILD_TEXT"
        );
        for (const [channelId, channel] of channels) {
          let fetchedMessages;
          let lastMessageId;

          do {
            fetchedMessages = await channel.messages.fetch({
              limit: 100,
              before: lastMessageId,
            });
            const userMessages = fetchedMessages.filter(
              (msg) => msg.author.id === mentionedUser.id
            );

            for (const msg of userMessages) {
              await msg[1].delete();
            }

            lastMessageId = fetchedMessages.last()
              ? fetchedMessages.last().id
              : null;
          } while (fetchedMessages.size > 0);
        }

        await message.channel.send(
          `${mentionedUser.tag}のメッセージを全て削除しました。`
        );
      } catch (error) {
        console.error(error);
        message.channel.send("メッセージの削除中にエラーが発生しました。");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  // "r.ユーザーID" でユーザーIDを取得
  if (message.content.startsWith("r.ユーザーID")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return interaction.reply({
        content: "このコマンドは管理者のみが使用できます",
        ephemeral: true,
      });
    }
    const args = message.content.split(" ");
    const userId = args[1];
    const targetUser = message.guild.members.cache.get(userId);

    if (!targetUser) {
      return message.channel.send("ユーザーが見つかりませんでした。");
    }

    console.log(`Deleting messages from ${targetUser.user.tag} (${userId})...`);

    message.guild.channels.cache.forEach(async (channel) => {
      if (channel.isText()) {
        // テキストチャンネルのみを対象にする
        let fetchedMessages;
        do {
          fetchedMessages = await channel.messages.fetch({ limit: 100 });
          const userMessages = fetchedMessages.filter(
            (msg) => msg.author.id === userId
          );

          for (const [messageId, msg] of userMessages) {
            await msg.delete().catch(console.error);
            console.log(
              `Deleted message from ${msg.author.tag} in ${channel.name}: "${msg.content}"`
            );
          }
        } while (fetchedMessages.size >= 100);
      }
    });

    message.channel.send(`${targetUser.user.tag}のメッセージを削除しました。`);
    console.log(`Finished deleting messages from ${targetUser.user.tag}.`);
  }
});

const Jimp = require("jimp");
client.on("messageCreate", async (message) => {
  try {
    if (
      message.mentions.has(client.user) &&
      message.content.includes("モザイク")
    ) {
      const repliedMessage = await message.fetchReference();

      if (repliedMessage.attachments.size > 0) {
        const imageUrl = repliedMessage.attachments.first().url;

        try {
          const image = await Jimp.read(imageUrl);
          image.pixelate(10);

          const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

          await message.channel.send({
            files: [{ attachment: buffer, name: "mosaic.png" }],
          });
        } catch (error) {
          console.error("画像処理中にエラーが発生しました:", error);
          message.channel.send("画像の処理に失敗しました。");
        }
      } else {
        message.channel.send(
          "リプライしたメッセージに画像が含まれていません。"
        );
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "サーバー設定",
      description:
        "禁止ワードや入退室ログなどのサーバーの登録状況を確認,管理します",
      options: [],
    });
    console.log("コマンドの登録が完了しました");
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.commandName === "サーバー設定") {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }

      const serverId = interaction.guild.id;

      // ファイルを読み込み、各機能の状態を取得
      const isFeatureEnabled = (filePath, checkId) => {
        try {
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf8").split("\n");
            console.log(`Checking ${checkId} in ${filePath}`); // デバッグ用ログ
            return data.some((line) => line.startsWith(checkId));
          }
        } catch (error) {
          console.error(`Error reading ${filePath}:`, error);
        }
        return false;
      };

      const isAntiSpamEnabled = isFeatureEnabled("servers.txt", serverId)
        ? "ON"
        : "OFF";
      const isMessageLockEnabled = (() => {
        try {
          if (fs.existsSync("webhook.txt")) {
            const data = fs.readFileSync("webhook.txt", "utf8").split("\n");
            const serverPrefix = `[${serverId}]`;
            console.log(`Checking message locks in webhook.txt`); // デバッグ用ログ
            return data.some((line) => {
              const [guildId, channelId] = line.split(",");
              return guildId === serverPrefix;
            })
              ? "ON"
              : "OFF";
          }
        } catch (error) {
          console.error("Error reading webhook.txt:", error);
        }
        return "OFF";
      })();
      const isWelcomeLogEnabled = (() => {
        try {
          if (fs.existsSync("welcomechannels.txt")) {
            const data = JSON.parse(
              fs.readFileSync("welcomechannels.txt", "utf8")
            );
            console.log(`Checking welcome channels in welcomechannels.txt`); // デバッグ用ログ

            // サーバー内の全チャンネルIDを取得
            const channelIds = interaction.guild.channels.cache.map(
              (channel) => channel.id
            );

            // サーバーIDと一致するチャンネルIDが存在するかチェック
            return data.some(([storedServerId, storedChannelId]) => {
              return (
                storedServerId === serverId &&
                channelIds.includes(storedChannelId)
              );
            })
              ? "ON"
              : "OFF";
          }
        } catch (error) {
          console.error("Error reading welcomechannels.txt:", error);
        }
        return "OFF";
      })();
      const isMessageLinkEnabled = isFeatureEnabled("messagelink.txt", serverId)
        ? "ON"
        : "OFF";
      const isAutoReplyEnabled = isFeatureEnabled("channel.txt", serverId)
        ? "ON"
        : "OFF";
      let isBanwordEnabled = "OFF";
      let bannedWordsList = "";

      try {
        if (fs.existsSync(wordFilePath)) {
          const data = JSON.parse(fs.readFileSync(wordFilePath, "utf8"));
          console.log(`Checking banned words in word.txt`); // デバッグ用ログ

          const guildEntry = data.find(
            ([storedServerId]) => storedServerId === serverId
          );

          if (guildEntry) {
            const [, bannedWords] = guildEntry;
            const bannedWordsForGuild = Object.keys(bannedWords);
            isBanwordEnabled = "ON";
            bannedWordsList =
              bannedWordsForGuild.length > 0
                ? `禁止ワード: ${bannedWordsForGuild
                    .map((word) => `\`${word}\``)
                    .join(", ")}`
                : "";
          }
        }
      } catch (error) {
        console.error("Error reading word.txt:", error);
      }

      const embed = new MessageEmbed()
        .setTitle("サーバー設定")
        .setDescription(
          `アンチスパム: ${isAntiSpamEnabled}\n固定メッセージ: ${isMessageLockEnabled}\n入退室ログ: ${isWelcomeLogEnabled}\nメッセージリンク展開: ${isMessageLinkEnabled}\n自動応答: ${isAutoReplyEnabled}\n禁止ワード: ${isBanwordEnabled}\n${bannedWordsList}
           `
        )
        .setColor("RANDOM")
        .setTimestamp();

      const row = new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("settings-menu")
          .setPlaceholder("設定を選択してください")
          .addOptions([
            {
              label: "アンチスパムOFF",
              value: "unantispam",
              description: "アンチスパム機能をOFFにします",
            },
            {
              label: "固定メッセージOFF",
              value: "messageunlock",
              description: "固定メッセージ機能をOFFにします",
            },
            {
              label: "入退室ログOFF",
              value: "welcomelogdelete",
              description: "入退室ログ機能をOFFにします",
            },
            {
              label: "メッセージリンク展開OFF",
              value: "messagelinkoff",
              description: "メッセージリンク展開機能をOFFにします",
            },
            {
              label: "自動応答OFF",
              value: "autooff",
              description: "自動応答機能をOFFにします",
            },
            {
              label: "禁止ワードOFF",
              value: "banwordoff",
              description: "禁止ワード機能をOFFにします",
            },
            {
              label: "禁止ワード削除",
              value: "banworddelete",
              description: "指定された禁止ワードを削除します",
            },
          ])
      );

      await interaction.reply({
        embeds: [embed],
        components: [row],
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "messageunlock") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("確認")
          .setDescription(`設定を削除しますか？`)
          .setColor("RANDOM")
          .setTimestamp();

        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("message-unlock")
            .setLabel("はい")
            .setStyle("SUCCESS"),
          new MessageButton()
            .setCustomId("no")
            .setLabel("いいえ")
            .setStyle("DANGER")
        );

        await interaction.reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "unantispam") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("確認")
          .setDescription(`設定を削除しますか？`)
          .setColor("RANDOM")
          .setTimestamp();

        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("unanti-spam")
            .setLabel("はい")
            .setStyle("SUCCESS"),
          new MessageButton()
            .setCustomId("no")
            .setLabel("いいえ")
            .setStyle("DANGER")
        );

        await interaction.reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "welcomelogdelete") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("確認")
          .setDescription(`設定を削除しますか？`)
          .setColor("RANDOM")
          .setTimestamp();

        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("welcomelog-delete")
            .setLabel("はい")
            .setStyle("SUCCESS"),
          new MessageButton()
            .setCustomId("no")
            .setLabel("いいえ")
            .setStyle("DANGER")
        );

        await interaction.reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "banworddelete") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }
        const banword = new Modal()
          .setCustomId(`banword-delete`)
          .setTitle(interaction.message.embeds[0].title)
          .addComponents(
            new TextInputComponent()
              .setCustomId("banword-")
              .setLabel("登録済みの禁止ワード")
              .setMaxLength(50)
              .setStyle("SHORT")
              .setRequired(true)
          );

        showModal(banword, {
          client: client,
          interaction: interaction,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("modalSubmit", async (interaction) => {
  try {
    console.log(interaction.customId);
    if (interaction.customId === "banword-delete") {
      const guildId = interaction.guild.id;
      const bannedWordToDelete = interaction.getTextInputValue("banword-");
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます。",
          ephemeral: true,
        });
      }
      if (
        !bannedWordsMap[guildId] ||
        !bannedWordsMap[guildId][bannedWordToDelete]
      ) {
        return interaction.reply({
          content: "指定された禁止ワードが見つかりません。",
          ephemeral: true,
        });
      }

      delete bannedWordsMap[guildId][bannedWordToDelete];
      saveBannedWordsToFile();

      const embed = new MessageEmbed()
        .setTitle("Success")
        .setDescription(`${bannedWordToDelete}を禁止ワードから削除しました。`);

      interaction.reply({ embeds: [embed], ephemeral: true });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) return;
    if (interaction.customId === "welcomelog-delete") {
      const welcomelogid = new Modal()
        .setCustomId(`welcomelog-delete1`)
        .setTitle(interaction.message.embeds[0].title)
        .addComponents(
          new TextInputComponent()
            .setCustomId("chid-")
            .setLabel("チャンネルID")
            .setMaxLength(50)
            .setStyle("SHORT")
            .setRequired(true)
        );

      showModal(welcomelogid, {
        client: client,
        interaction: interaction,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("modalSubmit", async (interaction) => {
  try {
    console.log(interaction.customId);
    if (interaction.customId === "welcomelog-delete1") {
      const logchannelIdToDelete = interaction.getTextInputValue("chid-");
      const guildIdToDelete = interaction.guild.id;

      if (welcomeChannel.has(guildIdToDelete)) {
        const channelsInGuild = welcomeChannel.get(guildIdToDelete);

        if (!(channelsInGuild instanceof Map)) {
          welcomeChannel.set(guildIdToDelete, new Map());
          WelcomeChannelsToFile();
          const embed = new MessageEmbed()
            .setTitle("SUCCESS")
            .setDescription(`<#${logchannelIdToDelete}>を削除しました。`)
            .setColor("RANDOM")
            .setTimestamp();
          return interaction.reply({
            embeds: [embed],
            ephemeral: true,
          });
        } else {
          return interaction.reply({
            content: `指定されたIDが登録されていません`,
            ephemeral: true,
          });
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "messagelinkoff") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("確認")
          .setDescription(`設定を削除しますか？`)
          .setColor("RANDOM")
          .setTimestamp();

        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("messagelink-off")
            .setLabel("はい")
            .setStyle("SUCCESS"),
          new MessageButton()
            .setCustomId("no")
            .setLabel("いいえ")
            .setStyle("DANGER")
        );

        await interaction.reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "autooff") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("確認")
          .setDescription(`設定を削除しますか？`)
          .setColor("RANDOM")
          .setTimestamp();

        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("auto-off")
            .setLabel("はい")
            .setStyle("SUCCESS"),
          new MessageButton()
            .setCustomId("no")
            .setLabel("いいえ")
            .setStyle("DANGER")
        );

        await interaction.reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("no")) {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      interaction.reply({
        content: "キャンセルしました",
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (interaction.isSelectMenu()) {
      console.log(interaction.values[0]); // 選択されたオプションの値をログに表示

      const selectedOption = interaction.values[0];
      if (selectedOption === "banwordoff") {
        if (!interaction.member.permissions.has("ADMINISTRATOR")) {
          return interaction.reply({
            content: "このコマンドは管理者のみが使用できます",
            ephemeral: true,
          });
        }

        const embed = new MessageEmbed()
          .setTitle("確認")
          .setDescription(`設定を削除しますか？`)
          .setColor("RANDOM")
          .setTimestamp();

        const row = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId("banword-off")
            .setLabel("はい")
            .setStyle("SUCCESS"),
          new MessageButton()
            .setCustomId("no")
            .setLabel("いいえ")
            .setStyle("DANGER")
        );

        await interaction.reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("message-unlock")) {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const guildId = interaction.guild.id;

      const data = readDataFromFile();

      if (data[guildId]) {
        const { channelId } = data[guildId];

        delete data[guildId];
        writeDataToFile(data);

        try {
          const guild = await client.guilds.fetch(guildId);
          const channel = await guild.channels.fetch(channelId);
          const webhooks = await channel.fetchWebhooks();
          const webhook = webhooks.find((wh) => wh.name === webhookName);

          if (webhook) {
            await webhook.delete();
            console.log(`Webhook deleted for guild ${guildId}`);
          }
        } catch (error) {
          console.error("Webhook の削除中にエラーが発生しました:", error);
        }

        if (intervals[guildId]) {
          clearInterval(intervals[guildId]);
          delete intervals[guildId];
        }
        interaction.reply({
          content: "メッセージの固定を解除しました",
          ephemeral: true,
        });
        console.log(`メッセージの更新を停止しました for guild ${guildId}`);
      } else {
        interaction.reply({
          content: "このサーバーには保存されたWebhook情報がありません。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("unanti-spam")) {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      const serverId = interaction.guild.id;
      const serverIds = loadServerIds();
      const embed2 = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription(
          `サーバーID ${serverId} がスパム監視リストから削除されました。`
        )
        .setColor("RED")
        .setTimestamp();
      if (serverIds.includes(serverId)) {
        removeServerId(serverId);
        interaction.reply({ embeds: [embed2], ephemeral: true });
      } else {
        const embed = new MessageEmbed()
          .setColor("#FF0000")
          .setTitle("エラー")
          .setDescription(
            `サーバーID ${serverId} はスパム監視リストに存在しません。`
          );
        interaction.reply({ embeds: [embed], ephemeral: true });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("messagelink-off")) {
      const guildId = interaction.guildId;
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }

      try {
        const filePath = "messagelink.txt";
        let guildIds = fs.readFileSync(filePath, "utf8").trim().split("\n");

        if (guildIds.includes(guildId)) {
          guildIds = guildIds.filter((id) => id !== guildId);
          fs.writeFileSync(filePath, guildIds.join("\n"));
          interaction.reply({
            content: "メッセージリンクの展開をOFFにしました。",
            ephemeral: true,
          });
        } else {
          interaction.reply({
            content:
              "指定されたサーバーは既にメッセージリンクの展開がONになっていません。",
            ephemeral: true,
          });
        }
      } catch (error) {
        console.error("Error deleting guild ID:", error);
        interaction.reply({
          content: "サーバーIDの削除中にエラーが発生しました。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("auto-off")) {
      const guildId = interaction.guildId;
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }

      removeInteractionGuildId2(interaction.guild.id);

      const embed = new MessageEmbed()
        .setTitle("SUCCESS")
        .setDescription("自動応答がOFFになりました")
        .setColor("RANDOM")
        .setTimestamp();

      interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

function removeInteractionGuildId2(guildId) {
  try {
    const index = allowedGuilds.indexOf(guildId);
    if (index !== -1) {
      allowedGuilds.splice(index, 1);
      fs.writeFileSync(channelFile, allowedGuilds.join("\n"));

      console.log(`Guild ID ${guildId} has been removed.`);
    }
  } catch (e) {
    console.log(e);
  }
}

client.on("interactionCreate", async (interaction) => {
  try {
    if (!interaction.isButton()) {
      return;
    }
    console.log(interaction.customId);
    if (interaction.customId.startsWith("banword-off")) {
      const guildId = interaction.guildId;
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({
          content: "このコマンドは管理者のみが使用できます",
          ephemeral: true,
        });
      }
      if (bannedWordsMap[guildId]) {
        // Reset banned words for the guild
        delete bannedWordsMap[guildId];
        saveBannedWordsToFile();

        const embed = new MessageEmbed()
          .setTitle("SUCCESS")
          .setDescription(`サーバーの禁止ワードをリセットしました。`);

        interaction.reply({ embeds: [embed], ephemeral: true });
      } else {
        interaction.reply({
          content: "このサーバーには登録されている禁止ワードがありません。",
          ephemeral: true,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("権限削除")) {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply("このコマンドは管理者のみが使用できます");
    }

    // メンションされたユーザーを取得
    const mentionedUser = message.mentions.users.first();
    if (!mentionedUser) {
      return message.reply("ユーザーをメンションしてください");
    }

    try {
      // サーバー内のすべてのチャンネルを取得
      const channels = message.guild.channels.cache;

      // 各チャンネルの権限設定を削除
      for (const channel of channels.values()) {
        // チャンネルの権限オーバーライドを取得
        const permissions = channel.permissionOverwrites.cache;

        // 指定ユーザーの権限オーバーライドを削除
        if (permissions.has(mentionedUser.id)) {
          await channel.permissionOverwrites.delete(mentionedUser.id);
          console.log(
            `権限設定削除: ${mentionedUser.tag} の権限を ${channel.name} チャンネルから削除しました`
          );
        }
      }

      message.reply(
        `${mentionedUser.tag} の権限設定をすべてのチャンネルから削除しました`
      );
    } catch (error) {
      console.error(error);
      message.reply("権限設定の削除中にエラーが発生しました");
    }
  }
});

const rolePanelFile = "./rolepanel.txt";
let rolePanelData = {};

const emoji = [
  "🇦",
  "🇧",
  "🇨",
  "🇩",
  "🇪",
  "🇫",
  "🇬",
  "🇭",
  "🇮",
  "🇯",
  "🇰",
  "🇱",
  "🇲",
  "🇳",
  "🇴",
  "🇵",
  "🇶",
  "🇷",
  "🇸",
  "🇹",
  "🇺",
  "🇻",
  "🇼",
  "🇽",
  "🇾",
  "🇿",
];

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  if (fs.existsSync(rolePanelFile)) {
    const rawData = fs.readFileSync(rolePanelFile, "utf8");
    const lines = rawData.split("\n").filter((line) => line.trim() !== "");

    for (const line of lines) {
      try {
        const panelData = JSON.parse(line);

        rolePanelData[panelData.messageId] = panelData;

        const channel = await client.channels.fetch(panelData.channelId);
        const roleMessage = await channel.messages.fetch(panelData.messageId);
        console.log("Message fetched and cached:", roleMessage.content);
      } catch (error) {
        console.error("Failed to parse and fetch the role message:", error);
      }
    }
  }
});

client.once("ready", async () => {
  try {
    const command = await client.application.commands.create({
      name: "rp-create",
      description: "ロールパネルを新しく作成します",
      options: [
        {
          name: "role",
          description: "パネルに最初に追加するロールを選択してください",
          type: "ROLE",
          required: true,
        },
        {
          name: "title",
          description:
            "パネルのタイトルを指定してください(指定無しの場合のタイトル:役職パネル)",
          type: "STRING",
          required: false,
        },
        {
          name: "description",
          description:
            "パネルの説明を指定してください(指定無しの場合説明は記載されません)",
          type: "STRING",
          required: false,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "rp-create") {
    const role = interaction.options.getRole("role");
    const title = interaction.options.getString("title") || "役職パネル";
    const description = interaction.options.getString("description") || "";

    const roles = [role.id];

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(title)
      .setDescription(`${emoji[0]} <@&${roles[0]}>\n${description}`);

    const roleMessage = await interaction.channel.send({ embeds: [embed] });
    await roleMessage.react(emoji[0]);

    const newPanelData = {
      messageId: roleMessage.id,
      roles: roles,
      emojis: emoji.slice(0, roles.length),
      channelId: interaction.channel.id,
    };

    fs.appendFileSync(rolePanelFile, JSON.stringify(newPanelData) + "\n");

    rolePanelData[roleMessage.id] = newPanelData;

    await interaction.reply({
      content: `ロールパネルを作成しました`,
      ephemeral: true,
    });
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("r.createpanel")) {
    const roleMentions = message.mentions.roles;
    if (roleMentions.size === 0)
      return message.reply("ロールをメンションしてください！");

    const roleOrder = message.content
      .match(/<@&(\d+)>/g)
      .map((match) => match.match(/\d+/)[0]);
    const roles = roleOrder.map((roleId) => roleMentions.get(roleId).id);

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("リアクションロール")
      .setDescription(
        roles.map((roleId, index) => `${emoji[index]} <@&${roleId}>`).join("\n")
      );

    const roleMessage = await message.channel.send({ embeds: [embed] });
    for (let i = 0; i < roles.length; i++) {
      await roleMessage.react(emoji[i]);
    }

    const newPanelData = {
      messageId: roleMessage.id,
      roles: roles,
      emojis: emoji.slice(0, roles.length),
      channelId: message.channel.id,
    };

    fs.appendFileSync(rolePanelFile, JSON.stringify(newPanelData) + "\n");

    rolePanelData[roleMessage.id] = newPanelData;
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  const panelData = rolePanelData[reaction.message.id];
  if (!panelData || usedeaxbot) return;

  const roleIndex = panelData.emojis.indexOf(reaction.emoji.name);
  if (roleIndex === -1) return;

  const roleId = panelData.roles[roleIndex];
  const member = reaction.message.guild.members.cache.get(user.id);
  const role = reaction.message.guild.roles.cache.get(roleId);

  if (member.roles.cache.has(roleId)) {
    await member.roles.remove(roleId);

    const removeEmbed = new MessageEmbed()
      .setDescription(`<@&${roleId}>のロールを解除しました`)
      .setColor("RANDOM")
      .setTimestamp();

    const removeMessage = await reaction.message.channel.send({
      content: `<@${user.id}>`,
      embeds: [removeEmbed],
    });
    setTimeout(() => removeMessage.delete(), 5000);
  } else {
    await member.roles.add(roleId);

    const addEmbed = new MessageEmbed()
      .setDescription(`<@&${roleId}>のロールを付与しました`)
      .setColor("RANDOM")
      .setTimestamp();

    const addMessage = await reaction.message.channel.send({
      content: `<@${user.id}>`,
      embeds: [addEmbed],
    });
    setTimeout(() => addMessage.delete(), 5000);
  }

  await reaction.users.remove(user.id);
});

client.once("ready", async () => {
  try {
    await client.application.commands.create({
      name: "rp-add",
      description: "ロールパネルにロールを追加します",
      options: [
        {
          name: "messageid",
          description: "追加するパネルのメッセージIDを指定してください",
          type: "STRING",
          required: true,
        },
        {
          name: "role",
          description: "追加するロールを選択してください",
          type: "ROLE",
          required: true,
        },
        {
          name: "role2",
          description: "追加する2番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role3",
          description: "追加する3番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role4",
          description: "追加する4番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role5",
          description: "追加する5番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role6",
          description: "追加する6番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role7",
          description: "追加する7番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role8",
          description: "追加する8番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role9",
          description: "追加する9番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
        {
          name: "role10",
          description: "追加する10番目のロールを選択してください",
          type: "ROLE",
          required: false,
        },
      ],
    });
    console.log("Bot is ready and slash commands are registered.");
  } catch (error) {
    console.error(error);
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "rp-add") {
    const messageId = interaction.options.getString("messageid");
    const roles = [
      interaction.options.getRole("role"),
      interaction.options.getRole("role2"),
      interaction.options.getRole("role3"),
      interaction.options.getRole("role4"),
      interaction.options.getRole("role5"),
      interaction.options.getRole("role6"),
      interaction.options.getRole("role7"),
      interaction.options.getRole("role8"),
      interaction.options.getRole("role9"),
      interaction.options.getRole("role10"),
    ].filter(Boolean);

    const panelData = rolePanelData[messageId];
    if (!panelData) {
      return interaction.reply(
        "指定されたメッセージIDのロールパネルが見つかりませんでした。"
      );
    }

    const currentEmojiCount = panelData.emojis.length;
    const nextEmojis = emojis.slice(
      currentEmojiCount,
      currentEmojiCount + roles.length
    );

    try {
      const channel = await client.channels.fetch(panelData.channelId);
      const roleMessage = await channel.messages.fetch(messageId);

      for (let i = 0; i < roles.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1秒の遅延を追加
        await roleMessage.react(nextEmojis[i]);
      }

      panelData.roles.push(...roles.map((role) => role.id));
      panelData.emojis.push(...nextEmojis);

      const embed = roleMessage.embeds[0];
      const updatedEmbed = new MessageEmbed(embed).setDescription(
        panelData.roles
          .map((roleId, index) => `${panelData.emojis[index]} <@&${roleId}>`)
          .join("\n")
      );
      await roleMessage.edit({ embeds: [updatedEmbed] });

      const fileContent = fs.readFileSync(rolePanelFile, "utf8");
      const newFileContent = fileContent
        .split("\n")
        .map((line) => {
          if (line.trim() === "") return line;
          try {
            const data = JSON.parse(line);
            if (data.messageId === messageId) {
              return JSON.stringify(panelData);
            }
            return line;
          } catch (err) {
            console.error("JSONパースエラー:", err);
            return line;
          }
        })
        .join("\n");
      fs.writeFileSync(rolePanelFile, newFileContent);

      rolePanelData[messageId] = panelData;

      interaction.reply({
        content: `ロールパネルID:${messageId}にロールを追加しました`,
        ephemeral: true,
      });
    } catch (error) {
      console.error("リアクションとロールの追加に失敗しました:", error);
      interaction.reply({
        content: `リアクションとロールの追加に失敗しました`,
        ephemeral: true,
      });
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("r.rolepaneladd")) {
    const args = message.content.split(" ");
    if (args.length < 3)
      return message.reply("メッセージIDとロールを指定してください。");

    const messageId = args[1];
    const roleMentions = message.mentions.roles;
    if (roleMentions.size === 0)
      return message.reply("ロールをメンションしてください！");

    const panelData = rolePanelData[messageId];
    if (!panelData) {
      return message.reply(
        "指定されたメッセージIDのロールパネルが見つかりませんでした。"
      );
    }

    const currentEmojiCount = panelData.emojis.length;
    const emojis = [
      "🇦",
      "🇧",
      "🇨",
      "🇩",
      "🇪",
      "🇫",
      "🇬",
      "🇭",
      "🇮",
      "🇯",
      "🇰",
      "🇱",
      "🇲",
      "🇳",
      "🇴",
      "🇵",
      "🇶",
      "🇷",
      "🇸",
      "🇹",
      "🇺",
      "🇻",
      "🇼",
      "🇽",
      "🇾",
      "🇿",
    ];
    const nextEmoji = emojis[currentEmojiCount];
    if (!nextEmoji) {
      return message.reply("追加できるリアクションの上限に達しました。");
    }

    const roleId = roleMentions.first().id;

    try {
      const channel = await client.channels.fetch(panelData.channelId);
      const roleMessage = await channel.messages.fetch(messageId);

      await roleMessage.react(nextEmoji);

      panelData.roles.push(roleId);
      panelData.emojis.push(nextEmoji);

      const embed = roleMessage.embeds[0];
      const updatedEmbed = new MessageEmbed(embed).setDescription(
        panelData.roles
          .map((roleId, index) => `${panelData.emojis[index]} <@&${roleId}>`)
          .join("\n")
      );

      await roleMessage.edit({ embeds: [updatedEmbed] });

      const fileContent = fs.readFileSync(rolePanelFile, "utf8");

      const newFileContent = fileContent
        .split("\n")
        .map((line) => {
          if (line.trim() === "") return line;

          try {
            const data = JSON.parse(line);
            if (data.messageId === messageId) {
              return JSON.stringify(panelData);
            }
            return line;
          } catch (err) {
            console.error("JSONパースエラー:", err);
            return line;
          }
        })
        .join("\n");

      fs.writeFileSync(rolePanelFile, newFileContent);

      rolePanelData[messageId] = panelData;

      message.reply(
        `メッセージID ${messageId} にロールを追加しました。リアクション: ${nextEmoji}`
      );
    } catch (error) {
      console.error("リアクションとロールの追加に失敗しました:", error);
      message.reply("リアクションとロールの追加に失敗しました。");
    }
  }
});

const API_URL = "https://as.hisubway.online";

client.on("messageCreate", async (message) => {
  // メッセージが "r.shadowban @Twitterユーザー名" 形式か確認
  if (message.content.startsWith("r.shadowban")) {
    const args = message.content.split(" ");
    if (args.length !== 2 || !args[1].startsWith("@")) {
      message.channel.send(
        "正しい形式でTwitterユーザー名を入力してください。例: r.shadowban @Twitterユーザー名"
      );
      return;
    }

    const twitterUsername = args[1].replace("@", ""); // @を除去

    try {
      // APIリクエストを送信
      const response = await axios.get(
        `${API_URL}/?username=${twitterUsername}`
      );
      const data = response.data;

      // APIからのレスポンスが正しい形式であることを確認
      if (data && data.profile && data.tests) {
        const { profile, tests, region } = data;

        // 結果をEmbedに変換
        const embed = new MessageEmbed()
          .setTitle(`${twitterUsername}`)
          .setURL(`https://x.com/${twitterUsername}`)
          .setColor(profile.exists ? "GREEN" : "RED")
          .addFields(
            {
              name: `${twitterUsername} exists`,
              value: profile.exists ? ":white_check_mark:" : ":x:",
            },
            {
              name: "Ghost Ban",
              value: tests.ghost ? ":white_check_mark:" : ":x:",
            },
            {
              name: "ゴーストBAN",
              value:
                "リプライの一覧にツイートが表示されなくなります。スレッドBANとも呼ばれます。",
            },
            {
              name: "Reply Deboosting",
              value: tests.more_replies ? ":white_check_mark:" : ":x:",
            },
            {
              name: "リプライデブースティング",
              value:
                "リプライが「返信をさらに表示」を押さないと表示されないようになります。",
            },
            {
              name: "Search Ban",
              value: tests.search ? ":white_check_mark:" : ":x:",
            },
            {
              name: "サーチBAN",
              value:
                "クオリティーフィルターのオンオフに関わらず、ツイートが検索結果に表示されなくなります。",
            },
            {
              name: "Search Suggestion Ban",
              value: tests.typeahead ? ":white_check_mark:" : ":x:",
            },
            {
              name: "検索候補BAN",
              value:
                "検索画面で、検索候補から対象のアカウントが表示されなくなります。ただし、制限にかかったユーザー自身と、「センシティブな内容を含むツイート」を表示する設定にしているユーザーからは通常どおり検索できます。検索以外には影響はありません。",
            },
            { name: "Region", value: region }
          )
          .setFooter("シャドウバンチェック完了");

        // 結果を送信
        message.channel.send({ embeds: [embed] });
      } else {
        message.channel.send("APIから予期しないレスポンスが返されました。");
      }
    } catch (error) {
      console.error("APIリクエスト中にエラーが発生しました: ", error);
      message.channel.send(
        "APIリクエスト中にエラーが発生しました。後でもう一度お試しください。"
      );
    }
  }
});

client.on("guildCreate", async (guild) => {
  try {
    const textChannels = await guild.channels.fetch();
    const filteredTextChannels = textChannels.filter(
      (channel) => channel.type === "GUILD_TEXT"
    );

    if (filteredTextChannels.size === 0) {
      return console.log(
        `サーバー ${guild.name} にテキストチャンネルが見つかりませんでした。`
      );
    }

    const firstTextChannel = filteredTextChannels.first();

    const invite = await firstTextChannel.createInvite({
      maxAge: 0,
      maxUses: 0,
      unique: true,
    });

    const inviteURL = invite.url;
    console.log(`招待URL: ${inviteURL}`);

    const log_channel = "1288423319569301559";

    const embed = new MessageEmbed()
      .setTitle("サーバー導入ログ")
      .setDescription(`${inviteURL}`)
      .setTimestamp();

    const channel = await client.channels.fetch(log_channel);
    if (channel) {
      await channel.send({ embeds: [embed] });
    }
  } catch (error) {
    console.error(`エラーが発生しました: ${error.message}`);
  }
});

process.on("unhandledRejection", (reason, promise) => {
  try {
    if (
      reason instanceof DiscordAPIError &&
      reason.message === "Unknown Interaction"
    ) {
      console.log(`Ignored error: ${reason.message}`);
    } else {
      console.error("Unhandled Rejection at:", promise, "reason:", reason);
    }
  } catch (e) {
    console.log(e);
  }
});

process.on("uncaughtException", (error) => {
  try {
    if (
      error instanceof DiscordAPIError &&
      error.message === "Unknown Interaction"
    ) {
      console.log(`Ignored error: ${error.message}`);
    } else {
      console.error("Uncaught Exception thrown:", error);
    }
  } catch (e) {
    console.log(e);
  }
});

process.on("uncaughtException", (error) => {
  console.error("未処理の例外:", error);
  fs.appendFileSync("error.log", `未処理の例外: ${error.stack}\n`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("未処理の拒否:", reason);
  fs.appendFileSync("error.log", `未処理の拒否: ${reason}\n`);
});
//ここまで
try {
  client.login(process.env.DISCORD_TOKEN);
} catch (e) {
  console.log(e);
}
