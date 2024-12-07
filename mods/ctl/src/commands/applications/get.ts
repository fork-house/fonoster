/* eslint-disable import/no-unresolved */
/*
 * Copyright (C) 2024 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as SDK from "@fonoster/sdk";
import { Args } from "@oclif/core";
import cliui from "cliui";
import moment from "moment";
import { BaseCommand } from "../../BaseCommand";
import { getConfig } from "../../config";
import { CONFIG_FILE } from "../../constants";

export default class Get extends BaseCommand<typeof Get> {
  static override description = "get an Application by reference";
  static override examples = ["<%= config.bin %> <%= command.id %>"];
  static override args = {
    ref: Args.string({ description: "The Application to show details about" })
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(Get);
    const { args } = await this.parse(Get);
    const workspaces = getConfig(CONFIG_FILE);
    const currentWorkspace = workspaces.find((w) => w.active);

    if (!currentWorkspace) {
      this.error("No active workspace found.");
    }

    const client = new SDK.Client({
      endpoint: currentWorkspace.endpoint,
      accessKeyId: `WO${currentWorkspace.workspaceRef.replaceAll("-", "")}`,
      allowInsecure: flags.insecure
    });

    await client.loginWithApiKey(
      currentWorkspace.accessKeyId,
      currentWorkspace.accessKeySecret
    );

    const applications = new SDK.Applications(client);
    const response = await applications.getApplication(args.ref);

    const ui = cliui({ width: 200 });

    // STT or none of productRef is undefined
    const stt = response.speechToText?.productRef
      ? response.speechToText?.productRef.replace("stt.", "")
      : "none";
    const tts = response.textToSpeech?.productRef
      ? response.textToSpeech?.productRef.replace("tts.", "")
      : "none";

    ui.div(
      "APPLICATION DETAILS\n" +
        "------------------\n" +
        `REF: \t${response.ref}\n` +
        `NAME: \t${response.name}\n` +
        `STT: \t${stt}\n` +
        `TTS: \t${tts}\n` +
        `TYPE: \t${response.type}\n` +
        `ENDPOINT: \t${response.endpoint} \n` +
        `CREATED: \t${moment(response.createdAt).format("YYYY-MM-DD HH:mm:ss")}\n` +
        `UPDATED: \t${moment(response.updatedAt).format("YYYY-MM-DD HH:mm:ss")}\n`
    );

    this.log(ui.toString());
  }
}
