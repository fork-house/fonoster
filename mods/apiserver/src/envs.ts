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
import { join } from "path";
import { assertEnvsAreSet } from "@fonoster/common";
import dotenv from "dotenv";
import { ServingStatus } from "grpc-health-check";

if (process.env.NODE_ENV === "dev") {
  dotenv.config({ path: join(__dirname, "..", "..", "..", ".env") });
}

const e = process.env;

assertEnvsAreSet([
  "APP_URL",
  "CLOAK_ENCRYPTION_KEY",
  "SMTP_HOST",
  "SMTP_SENDER",
  "SMTP_AUTH_USER",
  "SMTP_AUTH_PASS"
]);

// Frontend configurations
export const APP_URL = e.APP_URL;

// SMTP configurations
export const SMTP_HOST = e.SMTP_HOST;
export const SMTP_PORT = e.SMTP_PORT ? parseInt(e.SMTP_PORT) : 587;
export const SMTP_SECURE = e.SMTP_SECURE?.toLowerCase() === "true";
export const SMTP_AUTH_USER = e.SMTP_AUTH_USER;
export const SMTP_AUTH_PASS = e.SMTP_AUTH_PASS;
export const SMTP_SENDER = e.SMTP_SENDER;

// Custom email templates
export const EMAIL_TEMPLATES_DIR = e.EMAIL_TEMPLATES_DIR;

// Default owner configurations (If OWNER_EMAIL is set, the account will be created)
export const OWNER_NAME = e.OWNER_NAME || "Admin";
export const OWNER_ACCESS_KEY_ID = e.OWNER_ACCESS_KEY_ID
  ? e.OWNER_ACCESS_KEY_ID
  : "US14wj8q6qlirw331gfswusfblie6h78uz";
export const OWNER_EMAIL = e.OWNER_EMAIL;
export const OWNER_PASSWORD = e.OWNER_PASSWORD || "changeme";
export const OWNER_ID = e.OWNER_ID || "635c0cd8-8125-483d-b467-05c53ce2cd31";

// Other configurations
export const CLOAK_ENCRYPTION_KEY = e.CLOAK_ENCRYPTION_KEY;
export const ROUTR_API_ENDPOINT = e.ROUTR_API_ENDPOINT || "localhost:51908";
export const ROUTR_DEFAULT_PEER_NAME =
  e.ROUTR_DEFAULT_PEER_NAME || "Voice Autopilot";
export const ROUTR_DEFAULT_PEER_USERNAME =
  e.ROUTR_DEFAULT_PEER_USERNAME || "voice";
export const ROUTR_DEFAULT_PEER_AOR =
  e.ROUTR_DEFAULT_PEER_AOR || "sip:voice@default";
export const ROUTR_DEFAULT_PEER_PASSWORD =
  e.ROUTR_DEFAULT_PEER_PASSWORD || "changeme";
export const APISERVER_BIND_ADDR = "0.0.0.0:50051";
export const GRPC_SERVING_STATUS = "SERVING" as ServingStatus;
export const GRPC_NOT_SERVING_STATUS = "NOT_SERVING" as ServingStatus;
