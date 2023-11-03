// 🚩es 모듈

// console.log(__dirname);
console.log(import.meta.url);

// 🚩es 모듈 에서만 사용가능한 top level await
// import { setTimeout, setInterval } from "timers/promises";
// await setTimeout(3000);
// console.log("3초 뒤 실행");

// for await (const startTime of setInterval(1000, Date.now())) {
//   console.log("1초마다 실행", new Date(startTime));
// }

// 🚩 process
// const { version, arch, platform, pid, execPath, uptime, cwd, cpuUsage } = process;
// console.log({
//   version,
//   arch,
//   platform,
//   pid,
//   execPath,
//   uptime: uptime(),
//   cwd: cwd(),
//   cpuUsage: cpuUsage(),
// });

// {
//     version: 'v16.14.0', // 설치된 노드 버전
//     arch: 'x64', //  프로세서 아키텍처 정보. arm, ia32 등의 값일 수도 있다.
//     platform: 'win32', // 운영체제 플랫폼 정보. linux나 darwin, freebsd 등의 값일 수도 있다.
//     pid: 22120, // 현재 프로세스의 아이디. 프로세스를 여러 개 가질 때 구분할 수 있다.
//     execPath: 'C:\\Program Files\\nodejs\\node.exe',  // 노드의 경로
//     uptime: 0.0330234,  // 프로세스가 시작된 후 흐른 시간. 단위는 초
//     cwd: 'C:\\Users\\User\\Desktop\\yelim\\Study\\Node.js',// 현재 프로세스가 실행되는 위치
//     cpuUsage: { user: 31000, system: 15000 } // 현재 cpu 사용량
//   }

import { pipeline } from "stream/promises";
import zlib from "zlib";
import fs from "fs";

await pipeline(fs.createReadStream("./hh.txt"), zlib.createGzip(), fs.createWriteStream("./readme4.txt.gz"));
