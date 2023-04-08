#!/usr/bin/env node
/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
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
import dotenv from "dotenv";
import { join } from "path";

if (process.env.NODE_ENV === "dev") {
  dotenv.config({ path: join(__dirname, "../../../", ".env") });
}

import { AppsServer, AppsService } from "@fonoster/apps";
import { DomainsServer, DomainsService } from "@fonoster/domains";
import { runServices } from "@fonoster/common";

const services = [
  {
    name: "apps",
    version: "v1beta1",
    service: AppsService,
    server: new AppsServer()
  },
  // {
  //   name: "monitor",
  //   version: "v1beta1",
  //   service: MonitorService,
  //   server: new MonitorServer()
  // },
  // {
  //   name: "users",
  //   version: "v1beta1",
  //   service: UsersService,
  //   server: new UsersServer()
  // },
  // {
  //   name: "projects",
  //   version: "v1beta1",
  //   service: ProjectsService,
  //   server: new ProjectsServer()
  // },
  // {
  //   name: "auth",
  //   version: "v1beta1",
  //   service: AuthService,
  //   server: new AuthServer()
  // },
  // {
  //   name: "funcs",
  //   version: "v1beta1",
  //   service: FuncsService,
  //   server: new FuncsServer()
  // },
  // {
  //   name: "agents",
  //   version: "v1beta1",
  //   service: AgentsService,
  //   server: new AgentsServer()
  // },
  {
    name: "domains",
    version: "v1beta1",
    service: DomainsService,
    server: new DomainsServer()
  }
  // {
  //   name: "numbers",
  //   version: "v1beta1",
  //   service: NumbersService,
  //   server: new NumbersServer()
  // },
  // {
  //   name: "providers",
  //   version: "v1beta1",
  //   service: ProvidersService,
  //   server: new ProvidersServer()
  // },
  // {
  //   name: "callmanager",
  //   version: "v1beta1",
  //   service: CallManagerService,
  //   server: new CallManagerServer()
  // },
  // {
  //   name: "storage",
  //   version: "v1beta1",
  //   service: StorageService,
  //   server: new StorageServer()
  // },
  // {
  //   name: "secrets",
  //   version: "v1beta1",
  //   service: SecretsService,
  //   server: new SecretServer()
  // },
  // {
  //   name: "limiter",
  //   version: "v1beta1",
  //   service: LimiterService,
  //   server: new LimiterServer()
  // }
];

runServices(services);
