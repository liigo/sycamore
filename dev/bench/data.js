window.BENCHMARK_DATA = {
  "lastUpdate": 1726132187850,
  "repoUrl": "https://github.com/sycamore-rs/sycamore",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "11802a9a1d35c2573abdb79447e13b40ba27ff83",
          "message": "Setup continuous benchmark\n\nPush continuous benchmark results to gh_pages\n\nFix cargo bench command",
          "timestamp": "2021-03-17T19:49:56-07:00",
          "tree_id": "4f61562eff826f8fe365e54b622b63c998cd79b7",
          "url": "https://github.com/lukechu10/maple/commit/11802a9a1d35c2573abdb79447e13b40ba27ff83"
        },
        "date": 1616036009473,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49388,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408867,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c",
          "message": "Iteration (#49)\n\n* enable clone_on_ref_path\r\n\r\n* SignalVec\r\n\r\n* wip\r\n\r\n* Fix\r\n\r\n* wip\r\n\r\n* Add test for dropping owner inside create_root\r\n\r\n* cleanup\r\n\r\n* Simplify create_effect_initial\r\n\r\n* Cleanup\r\n\r\n* Add map_chain test\r\n\r\n* Todo demo\r\n\r\n* Fix insert\r\n\r\n* Fix compile error\r\n\r\n* Test map_chain_temporary\r\n\r\n* Update wasm-bindgen to 0.2.72\r\n\r\n* Fix netlify-build\r\n\r\n* Add to_vec",
          "timestamp": "2021-03-18T15:54:02-07:00",
          "tree_id": "2a0b53f131ed86eaeb2102c91f2feefafe40545b",
          "url": "https://github.com/lukechu10/maple/commit/291bcccc9210fed8f7b9305c9e8370e4e1ff4c4c"
        },
        "date": 1616108220084,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54818,
            "range": "± 2432",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 358986,
            "range": "± 19175",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "128c3294392c6a456aeae131778d1f7f5c86cc1c",
          "message": "Iteration on `Signal<Vec>` and integration tests (#51)\n\n* wip\r\n\r\n* fix\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Add some integration tests\r\n\r\n* Fix test command in CI\r\n\r\n* Indexed\r\n\r\n* Remove excess nodes\r\n\r\n* Add some basic integration tests\r\n\r\n* Update changed nodes\r\n\r\n* Remove unused variabe\r\n\r\n* Keyed\r\n\r\n* Fix Keyed\r\n\r\n* Fix clippy\r\n\r\n* Add integration test for Indexed",
          "timestamp": "2021-03-23T20:52:06-07:00",
          "tree_id": "9b35766bebb5452f736475f18a5835deba37e853",
          "url": "https://github.com/lukechu10/maple/commit/128c3294392c6a456aeae131778d1f7f5c86cc1c"
        },
        "date": 1616558145110,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56522,
            "range": "± 2722",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 392673,
            "range": "± 15596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe32999412d1ef0d3932d78c0f7ba9019d06708a",
          "message": "Fix debug assertion (#53)",
          "timestamp": "2021-03-23T21:29:24-07:00",
          "tree_id": "79cb6c23a7b2b879e481eb4dbb45ae95b7dd14cf",
          "url": "https://github.com/lukechu10/maple/commit/fe32999412d1ef0d3932d78c0f7ba9019d06708a"
        },
        "date": 1616560359088,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52874,
            "range": "± 3282",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 378377,
            "range": "± 11683",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3314992d74d923ff7557608837cc4919a6d03273",
          "message": "Fix reactive bindings inside Indexed and Keyed children (#54)\n\n* Fix clippy\r\n\r\n* Remove Option<TemplateResult> in Indexed and Keyed\r\n\r\n* create_effect_initial call initial() in create_root\r\n\r\n* Call template function inside reactive root\r\n\r\n* Add docs for Keyed and Indexed\r\n\r\n* Add some more docs and doctests",
          "timestamp": "2021-03-24T12:55:33-07:00",
          "tree_id": "340227bbda14f65e7a25cc97ef51fd8a773f2d1b",
          "url": "https://github.com/lukechu10/maple/commit/3314992d74d923ff7557608837cc4919a6d03273"
        },
        "date": 1616615927340,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58505,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 374764,
            "range": "± 3930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cb05bd80bf0baa5dc9db09c7015c3794562b733",
          "message": "Node refs (#57)\n\n* NodeRef\r\n\r\n* Set NodeRef with template! macro\r\n\r\n* Add NodeRef integration test",
          "timestamp": "2021-03-24T14:01:47-07:00",
          "tree_id": "63c3f7cdd5c3927b3eb222f797e2b67c978e7232",
          "url": "https://github.com/lukechu10/maple/commit/8cb05bd80bf0baa5dc9db09c7015c3794562b733"
        },
        "date": 1616619938774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58393,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 408288,
            "range": "± 20280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8eda5aa825f3c6541aa280dbdb123bf08dd72f1c",
          "message": "Complete TodoMVC spec conforming implementation (#60)\n\n* Add fmt::Debug implementation to Signal and StateHandle\r\n\r\n* Create Header and Copyright components\r\n\r\n* Parse keywords in component path\r\n\r\n* Fix parsing with a Component followed by interpolated value\r\n\r\n* List and Item\r\n\r\n* Handle todo edit\r\n\r\n* Update trybuild tests\r\n\r\n* Toggle complete all\r\n\r\n* Add untrack utility\r\n\r\n* Fixes\r\n\r\n* Footer\r\n\r\n* Save todos to localStorage\r\n\r\n* Get Filter from Hash\r\n\r\n* Clear completed\r\n\r\n* Set value when entering editing mode",
          "timestamp": "2021-03-25T21:32:45-07:00",
          "tree_id": "c3fed21ccf6be373ddc701a96070e6ab6e15ed9d",
          "url": "https://github.com/lukechu10/maple/commit/8eda5aa825f3c6541aa280dbdb123bf08dd72f1c"
        },
        "date": 1616733355532,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49259,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 349624,
            "range": "± 8185",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c18f28534bd36f67c2a884de4f21fe891f694041",
          "message": "Release 0.4.0 (#61)\n\n* Release 0.4.0\r\n\r\n* fixes",
          "timestamp": "2021-03-25T22:00:55-07:00",
          "tree_id": "edfbbd0b5f995c73d1950d7947cdc59a18c940e9",
          "url": "https://github.com/lukechu10/maple/commit/c18f28534bd36f67c2a884de4f21fe891f694041"
        },
        "date": 1616735046671,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47596,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 347333,
            "range": "± 26747",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d36bbc71caec28255c15e108568b0b26f0ef7135",
          "message": "Minimize code size (#62)\n\n* Use dynamic dispatch for create_effect\r\n\r\n* Use dynamic dispatch for create_effect_initial\r\n\r\n* Use dyn Any for create_effect_initial ret and remove Clone bound\r\n\r\n* append_static_text\r\n\r\n* Make internal functions use trait objects\r\n\r\n* Make internal::attr() Box<dyn Fn() -> String>\r\n\r\n* Make create_root dynamic dispatch\r\n\r\n* Build examples with -o3 and LTO",
          "timestamp": "2021-03-26T11:05:36-07:00",
          "tree_id": "ebb99a34734427387daef63229afa9aea6c08e26",
          "url": "https://github.com/lukechu10/maple/commit/d36bbc71caec28255c15e108568b0b26f0ef7135"
        },
        "date": 1616782130774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50552,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 534864,
            "range": "± 29791",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iwburns8@gmail.com",
            "name": "Ian Burns",
            "username": "iwburns"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25b9aa0938bcf152cf640bd7c880e15de1476113",
          "message": "fix typo in README.md (#64)",
          "timestamp": "2021-03-26T13:38:58-07:00",
          "tree_id": "d15a9e6e6ee111e20929439b84e844a2fc4072e3",
          "url": "https://github.com/lukechu10/maple/commit/25b9aa0938bcf152cf640bd7c880e15de1476113"
        },
        "date": 1616791314547,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58031,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581365,
            "range": "± 6168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5ef27b0dcdba315c5e4a9cea27b99b30530ceb3",
          "message": "fix todomvc links (#65)",
          "timestamp": "2021-03-26T13:49:33-07:00",
          "tree_id": "24fdda96868cab414f685c99f57f31329b1b4ee6",
          "url": "https://github.com/lukechu10/maple/commit/e5ef27b0dcdba315c5e4a9cea27b99b30530ceb3"
        },
        "date": 1616791967728,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 59126,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 586231,
            "range": "± 2504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90e6d46679a62d715f3502f3f64811482c94f02a",
          "message": "Add discord server link to issue template config (#68)",
          "timestamp": "2021-03-27T22:22:20-07:00",
          "tree_id": "676036cde031e6e6a8c799be4978273f7117335f",
          "url": "https://github.com/lukechu10/maple/commit/90e6d46679a62d715f3502f3f64811482c94f02a"
        },
        "date": 1616909116804,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52120,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 539677,
            "range": "± 24640",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d96c5711d607248ab0bea1931b3239f9c7327222",
          "message": "Fix Keyed iteration (#73)\n\n* Add more integration tests\r\n\r\n* Move nodes instead of recreating nodes\r\n\r\n* Keyed do not always append new nodes to end",
          "timestamp": "2021-03-31T15:42:39-07:00",
          "tree_id": "16334ebfe9289fb571d76ec8574eb75d731a9c67",
          "url": "https://github.com/lukechu10/maple/commit/d96c5711d607248ab0bea1931b3239f9c7327222"
        },
        "date": 1617230745311,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51830,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 508610,
            "range": "± 42425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffab9c38f9f1f34abfb0d7754534db26e4dd534e",
          "message": "Release 0.4.1 (#74)",
          "timestamp": "2021-03-31T15:49:00-07:00",
          "tree_id": "96a15b04c09ea754ae953fefcac30d1e0c633a26",
          "url": "https://github.com/lukechu10/maple/commit/ffab9c38f9f1f34abfb0d7754534db26e4dd534e"
        },
        "date": 1617231124914,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58200,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579314,
            "range": "± 9976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b99fb54ff4e65dd321df662b8afcb54c1b0acf2",
          "message": "Fix Keyed iteration again (#75)\n\n* Fix\r\n\r\n* Remove fmt::Debug bound for debugging\r\n\r\n* Add nested reactivity test",
          "timestamp": "2021-03-31T18:51:03-07:00",
          "tree_id": "b7b2c379c5e91318194d3144c29f4a42a4092ae5",
          "url": "https://github.com/lukechu10/maple/commit/5b99fb54ff4e65dd321df662b8afcb54c1b0acf2"
        },
        "date": 1617242023071,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48532,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 485893,
            "range": "± 464",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f46cf591a1170e172477f065740289efd22756ec",
          "message": "Release 0.4.2 (#76)",
          "timestamp": "2021-03-31T18:56:22-07:00",
          "tree_id": "078b0c8e490fa5842d0d4386453ea478a1614826",
          "url": "https://github.com/lukechu10/maple/commit/f46cf591a1170e172477f065740289efd22756ec"
        },
        "date": 1617242382731,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56708,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 595712,
            "range": "± 22609",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a486c5bb4be20f1083d15d2a0374eda5fcaa1c46",
          "message": "Keyed reuse nodes (#77)\n\n* Add fast path for empty Vec in Keyed and Indexed\r\n\r\n* Remove old nodes not in iterable",
          "timestamp": "2021-03-31T23:07:41-07:00",
          "tree_id": "54f05dfa59667a923f463979b95fa382cf7f4dca",
          "url": "https://github.com/lukechu10/maple/commit/a486c5bb4be20f1083d15d2a0374eda5fcaa1c46"
        },
        "date": 1617257487040,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 62201,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 623041,
            "range": "± 20245",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0cbf7661263f2ce555df93db355a21186e0f4829",
          "message": "Support attributes with '-' in name (#79)\n\n* Support attributes with '-' in name\r\n\r\n* Update README.md\r\n\r\n* Don't specify patch version in Cargo.toml",
          "timestamp": "2021-04-01T09:51:18-07:00",
          "tree_id": "e70e77f1da3e69c4503a9b54ab434ffe1bef144b",
          "url": "https://github.com/lukechu10/maple/commit/0cbf7661263f2ce555df93db355a21186e0f4829"
        },
        "date": 1617296081230,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55743,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 572311,
            "range": "± 14196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a30b6074a763386a86c4020bb73b6ac48191cb15",
          "message": "Release 0.4.3 (#80)",
          "timestamp": "2021-04-01T09:57:30-07:00",
          "tree_id": "989059e650d97e968c5f5f36767e2ca33be87e54",
          "url": "https://github.com/lukechu10/maple/commit/a30b6074a763386a86c4020bb73b6ac48191cb15"
        },
        "date": 1617296433025,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57429,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 577837,
            "range": "± 6056",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "developer@lights0123.com",
            "name": "Ben Schattinger",
            "username": "lights0123"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22909d555a68339e3b096071f36c626c4497ab91",
          "message": "Backend Abstraction (#67)\n\n* Initial refactoring\r\n\r\n* Make it work\r\n\r\n* Fix counter\r\n\r\n* Fix components example\r\n\r\n* Fix docs\r\n\r\n* Start working on todomvc\r\n\r\n* Refactor out document function\r\n\r\n* Fix NodeRef\r\n\r\n* Fix tests\r\n\r\n* Start working on VDOM\r\n\r\nThis is not used for usual client-side operation: this is solely a replacement for the DOM when it's unavailable like on a server.\r\n\r\n* Undo debugging changes\r\n\r\n* Add SSR demo\r\n\r\n* Trigger test on PR\r\n\r\n* Always run test.yml steps regardless of previous\r\n\r\n* Make tests pass in CI\r\n\r\n* Squashed commit of the following:\r\n\r\ncommit 9e4aa92fdf5d748aa9581b86d6795aa8cfda0204\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 15:38:01 2021 -0700\r\n\r\n    Separate ssr and dom features\r\n\r\ncommit 898c27b7871e6766f802e172765aee53f181809e\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 10:24:29 2021 -0700\r\n\r\n    Fix intra doc links\r\n\r\ncommit 6417d75eb7c4956a4ea293d3a8a6a392e10f3907\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 09:56:35 2021 -0700\r\n\r\n    Move DomNode into submodule\r\n\r\ncommit 971c776ecf83af30c066c71ff562f3a522c21000\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 09:37:57 2021 -0700\r\n\r\n    Rename vdom::Node to ssr_node::SsrNode\r\n\r\ncommit 1f62d084c7e8fd546db529ab2e777ed40ef79d07\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Mon Mar 29 21:34:42 2021 -0700\r\n\r\n    Set default type for G depending  on feature\r\n\r\ncommit cf2b59307f6b765239e2453a25cc0ef66422190a\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Mon Mar 29 21:19:33 2021 -0700\r\n\r\n    Fix clippy issues\r\n\r\ncommit 74b397571cb9cee47155a9df8d2a1164273ca813\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Mon Mar 29 16:00:19 2021 -0700\r\n\r\n    Add dom and ssr features\r\n\r\n* Squashed commit of the following:\r\n\r\ncommit ace788ca0de1c208637d3c2a759df97bed7234d4\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 20:41:48 2021 -0700\r\n\r\n    Remove internal module\r\n\r\ncommit c454e85f5b724edc637e88a29e08d57a40752a0c\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 16:03:28 2021 -0700\r\n\r\n    Remove internal::attr\r\n\r\ncommit b0ddb88e8c3fc848254a81fc6c5c98fb67dd8b1b\r\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nDate:   Tue Mar 30 15:50:08 2021 -0700\r\n\r\n    Remove internal::element\r\n\r\n* Fix text node codegen\r\n\r\n* Remove type param from NodeRef::get\r\n\r\n* Re-add type param to NodeRef::get\r\n\r\n* Update wasm-bindgen-cli to 0.2.73 in netlify-build\r\n\r\n* Make web-sys and wasm-bindgen optional\r\n\r\n* Fix compile errors\r\n\r\n* Update maple-core/src/flow.rs\r\n\r\nCo-authored-by: Ben Schattinger <developer@lights0123.com>\r\n\r\n* Make suggested changes\r\n\r\nCo-authored-by: Ben Schattinger <developer@lights0123.com>\r\n\r\n* Fix integration tests\r\n\r\n* Create root in render_to_string\r\n\r\n* Add some docs for GenericNode\r\n\r\n* Add some more docs\r\n\r\n* cargo fmt\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-04-01T20:39:11Z",
          "tree_id": "9ff4d04b7291f9baade23139bf565a2e6c2099ee",
          "url": "https://github.com/lukechu10/maple/commit/22909d555a68339e3b096071f36c626c4497ab91"
        },
        "date": 1617309753753,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58229,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 578868,
            "range": "± 3537",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "274e0aedf06c9818fc98b30569d39d3fab4fe1d1",
          "message": "Implement missing operations on SsrNode (#82)\n\n* Add ssr benchmark\r\n\r\n* Update ssr_simple bench\r\n\r\n* Add wrapper around SsrNode\r\n\r\n* Implement insert_child_before\r\n\r\n* wip\r\n\r\n* Do not create nodes twice\r\n\r\n* SSR iteration\r\n\r\n* Add some integration tests for ssr\r\n\r\n* Add FIXME comment\r\n\r\n* Fix test features",
          "timestamp": "2021-04-04T19:39:15Z",
          "tree_id": "8f5035b25b2d797e73139509f06395c8e5254d47",
          "url": "https://github.com/lukechu10/maple/commit/274e0aedf06c9818fc98b30569d39d3fab4fe1d1"
        },
        "date": 1617565361981,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58116,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579154,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2308,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 111242,
            "range": "± 594",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a28ee7b14e3acc43b8b969e0b3e08d8c32d3fbb5",
          "message": "Documentation website (#83)\n\n* Add getting started page\r\n\r\n* Add installation guide\r\n\r\n* Hello, World!\r\n\r\n* Force install wasm-bindgen-cli\r\n\r\n* Add template! and reactivity docs\r\n\r\n* Add Netlify.toml\r\n\r\n* Fix config file name\r\n\r\n* Use rewrite instead of redirect\r\n\r\n* Add highlight.js\r\n\r\n* Add some styling\r\n\r\n* Add more docs",
          "timestamp": "2021-04-04T16:03:54-07:00",
          "tree_id": "fb5399bdc0884ba2e42ff616b06d1cd7f9958532",
          "url": "https://github.com/lukechu10/maple/commit/a28ee7b14e3acc43b8b969e0b3e08d8c32d3fbb5"
        },
        "date": 1617577646842,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52107,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 525124,
            "range": "± 21757",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2112,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 104058,
            "range": "± 3450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "35810cece55a7ba254cde0480fe93f0bd3292bdb",
          "message": "Squashed commit of the following:\n\ncommit c849ec697d72ae534b279e4bc097329c76761f04\nAuthor: Luke Chu <37006668+lukechu10@users.noreply.github.com>\nDate:   Sun Apr 4 16:21:29 2021 -0700\n\n    fix",
          "timestamp": "2021-04-04T16:21:54-07:00",
          "tree_id": "5c6bf95f920e667329227e289b646be7c0d51cf7",
          "url": "https://github.com/lukechu10/maple/commit/35810cece55a7ba254cde0480fe93f0bd3292bdb"
        },
        "date": 1617578752290,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57418,
            "range": "± 2618",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581685,
            "range": "± 24749",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2598,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 115014,
            "range": "± 8122",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe1d67fd4d99477dfc2a3e9fcbe80850a0215be1",
          "message": "Build website in Github Actions (#84)\n\n* Add build website action\r\n\r\n* Fix workflow\r\n\r\n* Add index.html to ssr example\r\n\r\n* Fix workflow\r\n\r\n* Add prod website build\r\n\r\n* Fix public-url prefix\r\n\r\n* Add cache to GitHub Action\r\n\r\n* Fix cache hash path\r\n\r\n* Add some docs\r\n\r\n* Split test and clippy into 2 jobs",
          "timestamp": "2021-04-05T04:30:38Z",
          "tree_id": "e791f896e681f42e27aa8b80820d3a9108db81c7",
          "url": "https://github.com/lukechu10/maple/commit/fe1d67fd4d99477dfc2a3e9fcbe80850a0215be1"
        },
        "date": 1617597225996,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45820,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 453568,
            "range": "± 30858",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1954,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 88714,
            "range": "± 7214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "88851407ae8d2d49f5f88198023c1955856e6169",
          "message": "Fix prod website examples public url",
          "timestamp": "2021-04-04T21:41:59-07:00",
          "tree_id": "cbaae9db7a4c8a2e67cb9081cb98d5d352cb4dcb",
          "url": "https://github.com/lukechu10/maple/commit/88851407ae8d2d49f5f88198023c1955856e6169"
        },
        "date": 1617597938297,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49567,
            "range": "± 2032",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 513215,
            "range": "± 27344",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2266,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 99103,
            "range": "± 3555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76e68d7fb750d01555c85169531409feea9c3280",
          "message": "Tweened Values (#86)\n\n* Add Tweened\r\n\r\n* Add some easing functions\r\n\r\n* Set final value to new_value to prevent rounding errors\r\n\r\n* Implement Lerp for more types\r\n\r\n* Add some more easing functions\r\n\r\n* Add missing button\r\n\r\n* Make run_tasks noop on non dom\r\n\r\n* Remove install wasm-pack for cargo clippy",
          "timestamp": "2021-04-05T15:14:20-07:00",
          "tree_id": "cab7c9c64344729fed51adaee3aa662ad6029095",
          "url": "https://github.com/lukechu10/maple/commit/76e68d7fb750d01555c85169531409feea9c3280"
        },
        "date": 1617661089875,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56133,
            "range": "± 4317",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 583705,
            "range": "± 31591",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2582,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 110877,
            "range": "± 8908",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5bfb75e80f43fe0279eac48a5a1b3b559a3a7c2",
          "message": "More docs (#87)\n\n* Rename Concepts to Basics\r\n\r\n* Add more pages\r\n\r\n* Add more doc placeholder pages\r\n\r\n* Add some API docs for Tweened\r\n\r\n* Keep TweenedInner in a Rc\r\n\r\n* Add some API docs",
          "timestamp": "2021-04-05T20:50:28-07:00",
          "tree_id": "2db013cb8a0a00d4b10cc27f69045917d4adf5ca",
          "url": "https://github.com/lukechu10/maple/commit/e5bfb75e80f43fe0279eac48a5a1b3b559a3a7c2"
        },
        "date": 1617681266705,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55953,
            "range": "± 3616",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 578213,
            "range": "± 49893",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2755,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 113244,
            "range": "± 7299",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51313597+tmpr@users.noreply.github.com",
            "name": "Alexander Temper",
            "username": "tmpr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7bf585cd739f8c4d2395439b4b4dfdfe7374628",
          "message": "Add specified easing functions specified in (#88) (#90)\n\n* Add Circular Easing (#88)\r\n\r\n* Add Exponential Easing (#88)\r\n\r\n* Add Sine Easing (#88)\r\n\r\n* Add Bounce Ease (#88)\r\n\r\n* Format Code\r\n\r\n* Apply suggestions from code review\r\n\r\nCommit suggested changes\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Switch Float Format (e.g. 1. -> 1.0)\r\n\r\n* Use std. Epsilon\r\n\r\n* Switch to associated functions\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-04-06T11:40:30-07:00",
          "tree_id": "5cc6e8f2fa4cafac9ad0569af43220fa46a1141a",
          "url": "https://github.com/lukechu10/maple/commit/c7bf585cd739f8c4d2395439b4b4dfdfe7374628"
        },
        "date": 1617734625597,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50037,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 495042,
            "range": "± 24045",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1959,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 94189,
            "range": "± 5430",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1f2709eee8b9f0ad39285bf3982c78f43f06e09",
          "message": "Run unit tests in Miri (#91)\n\n* Run unit tests in Miri\r\n\r\n* Remove +nightly from cargo command\r\n\r\n* Update cargo cache name\r\n\r\n* Do not leak effects without an Owner\r\n\r\n* Untrack cleanup\r\n\r\n* Fix miri checks",
          "timestamp": "2021-04-06T20:59:36Z",
          "tree_id": "9c57e52d4c475b7a5ef2a6cec3d27f806aa82d44",
          "url": "https://github.com/lukechu10/maple/commit/e1f2709eee8b9f0ad39285bf3982c78f43f06e09"
        },
        "date": 1617743007261,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55620,
            "range": "± 6161",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 541045,
            "range": "± 25201",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2466,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 108882,
            "range": "± 5915",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "564449454aa86cebeb9381c2ccccc06b3fb3c49b",
          "message": "Document Fragments (#89)\n\n* Remove SignalVec\r\n\r\n* Move TemplateResult into sub-module\r\n\r\n* wrap comments at 100\r\n\r\n* Make TemplateResult able to hold a fragment\r\n\r\n* Iter and IntoIter for TemplateResult\r\n\r\n* Update flow.rs\r\n\r\n* Update render_* functions\r\n\r\n* Update Render trait\r\n\r\n* Make Render accept slice\r\n\r\n* Update template! macro\r\n\r\n* Fix template!\r\n\r\n* Allow multiple children at template! root\r\n\r\n* Add some integration tests\r\n\r\n* Add some more integration tests\r\n\r\n* Add more docs",
          "timestamp": "2021-04-06T23:23:57Z",
          "tree_id": "d4405eebf1a5a936e84b1dad7681b8fa71e89361",
          "url": "https://github.com/lukechu10/maple/commit/564449454aa86cebeb9381c2ccccc06b3fb3c49b"
        },
        "date": 1617751642709,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48582,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 479484,
            "range": "± 1837",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2389,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 103382,
            "range": "± 201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ef0a44ba8bf0e6f440dbd58bd8c306dd7e925bc",
          "message": "`#[component]` macro (#92)\n\n* Move template! into sub-module\r\n\r\n* Move ui tests into template/ folder\r\n\r\n* Add component macro\r\n\r\n* Fix intra-doc links\r\n\r\n* Add component! to prelude\r\n\r\n* Implement component macro\r\n\r\n* Use #[component] attribute macro\r\n\r\n* Fix ssr benchmarks\r\n\r\n* Fix tests\r\n\r\n* Update documentation",
          "timestamp": "2021-04-07T15:16:07-07:00",
          "tree_id": "12ada2cd82afc1e106ad2cf1c5a739d26aaebe03",
          "url": "https://github.com/lukechu10/maple/commit/2ef0a44ba8bf0e6f440dbd58bd8c306dd7e925bc"
        },
        "date": 1617833988992,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58159,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 574050,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2463,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 114072,
            "range": "± 199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d864c2de96d0d2ce7da77e9adba1db11a73b18b",
          "message": "2-way data binding (#93)\n\n* Parse bind:prop in template!\r\n\r\n* bind:value on input element\r\n\r\n* Do not assume presence of web_sys or wasm_bindgen\r\n\r\n* Bind to boolean properties\r\n\r\n* Remove checkbox from hello world example\r\n\r\n* return compile_error! instead of panic\r\n\r\n* Add integration test\r\n\r\n* Add data binding docs\r\n\r\n* Remove reqwest from docs\r\n\r\n* Update todomvc example",
          "timestamp": "2021-04-08T15:59:55Z",
          "tree_id": "54093c395ca60a202339062fec3bed8175bdfa5b",
          "url": "https://github.com/lukechu10/maple/commit/7d864c2de96d0d2ce7da77e9adba1db11a73b18b"
        },
        "date": 1617897825218,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57892,
            "range": "± 4626",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 572133,
            "range": "± 26142",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2445,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 114207,
            "range": "± 1621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanpatriciomarchetto@gmail.com",
            "name": "Juan Patricio Marchetto",
            "username": "JuanMarchetto"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e94012a634ba3abf9dd155befc34b6ffaa80aa86",
          "message": "address issue #71 (#95)",
          "timestamp": "2021-04-08T19:57:42-07:00",
          "tree_id": "89560c2af68d8cf7ada088657f6f9b81c374d26d",
          "url": "https://github.com/lukechu10/maple/commit/e94012a634ba3abf9dd155befc34b6ffaa80aa86"
        },
        "date": 1617937280345,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58201,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571645,
            "range": "± 4573",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2442,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 113043,
            "range": "± 473",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "b1699edab563e462d05d411dcd6b271e74f459b1",
          "message": "Set cache-control for netlify",
          "timestamp": "2021-04-14T00:05:40-07:00",
          "tree_id": "d75b0400dbb1ba61a726d3043dda17afddb98035",
          "url": "https://github.com/lukechu10/maple/commit/b1699edab563e462d05d411dcd6b271e74f459b1"
        },
        "date": 1618384157001,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47252,
            "range": "± 3309",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 491446,
            "range": "± 46115",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2270,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 99553,
            "range": "± 10643",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "98253def6991ba6f7784bb47c7579c9006aa1c3b",
          "message": "Cache css",
          "timestamp": "2021-04-14T00:06:31-07:00",
          "tree_id": "470069136f258ee8a929e428ddd01542f42b9310",
          "url": "https://github.com/lukechu10/maple/commit/98253def6991ba6f7784bb47c7579c9006aa1c3b"
        },
        "date": 1618384233710,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56327,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 552087,
            "range": "± 19744",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2645,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 116178,
            "range": "± 7430",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juanpatriciomarchetto@gmail.com",
            "name": "Juan Patricio Marchetto",
            "username": "JuanMarchetto"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e94012a634ba3abf9dd155befc34b6ffaa80aa86",
          "message": "address issue #71 (#95)",
          "timestamp": "2021-04-08T19:57:42-07:00",
          "tree_id": "89560c2af68d8cf7ada088657f6f9b81c374d26d",
          "url": "https://github.com/lukechu10/maple/commit/e94012a634ba3abf9dd155befc34b6ffaa80aa86"
        },
        "date": 1618384360429,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51198,
            "range": "± 3049",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 522541,
            "range": "± 25627",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2460,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 106591,
            "range": "± 7653",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "351ef653ac8e0ac8cf45eb58bbf5b9e7c99a0fde",
          "message": "Update Trunk to 0.11.0 (#96)\n\n* Set cache-control for netlify\r\n\r\n* Cache css\r\n\r\n* Update Trunk to 0.11.0\r\n\r\n* Fix cache-control\r\n\r\n* Fix pattern",
          "timestamp": "2021-04-14T00:30:50-07:00",
          "tree_id": "043a5605acf8bf0840524e85e80d4e5fc80be9e3",
          "url": "https://github.com/lukechu10/maple/commit/351ef653ac8e0ac8cf45eb58bbf5b9e7c99a0fde"
        },
        "date": 1618385656956,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52871,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 515468,
            "range": "± 20229",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2255,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 107329,
            "range": "± 3146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edadefa658276903157d6cbf8b08ec4c3cac1fff",
          "message": "Website Lighthouse Improvements (#97)\n\n* improvements\r\n\r\n* Add robots.txt",
          "timestamp": "2021-04-14T18:11:27Z",
          "tree_id": "07e53467a140aff007fb01a244932d53ffdb00bf",
          "url": "https://github.com/lukechu10/maple/commit/edadefa658276903157d6cbf8b08ec4c3cac1fff"
        },
        "date": 1618424170171,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58604,
            "range": "± 4027",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 558856,
            "range": "± 24953",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2630,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 119656,
            "range": "± 5549",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00fa09d526b452045b7d9b52834b434779bef810",
          "message": "Setup gitpod.io configuration (#98)\n\n* Setup gitpod configuration\r\n\r\n* Fix prebuild command\r\n\r\n* Install wasm-bindgen-test-runner\r\n\r\n* Fix development.md\r\n\r\n* Fix Dockerfile",
          "timestamp": "2021-04-15T17:17:53-07:00",
          "tree_id": "7cd219b594212cacd50fd3505738135a9d848ee0",
          "url": "https://github.com/lukechu10/maple/commit/00fa09d526b452045b7d9b52834b434779bef810"
        },
        "date": 1618532546773,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 62321,
            "range": "± 4655",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 618909,
            "range": "± 33449",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 3058,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 132125,
            "range": "± 10734",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30116eb20412371a9b54bd3fe6a309035b963d59",
          "message": "Rename `Owner` to `ReactiveScope` (#99)\n\n* Fix code style in easing.rs\r\n\r\n* Rename Owner to ReactiveScope\r\n\r\n* Remove bumpalo",
          "timestamp": "2021-04-15T17:54:53-07:00",
          "tree_id": "b50a258ec6b18691edd804293c2a74c2c3965996",
          "url": "https://github.com/lukechu10/maple/commit/30116eb20412371a9b54bd3fe6a309035b963d59"
        },
        "date": 1618534713122,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58039,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571281,
            "range": "± 7349",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2473,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 114365,
            "range": "± 1063",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68db603627a26a2f47b3381ebcd2d2fb78a4baf4",
          "message": "Better components (#100)\n\n* Make component generic over create function\r\n\r\n* Add component name in debug mode\r\n\r\n* Forward generics on component to function",
          "timestamp": "2021-04-16T01:38:27Z",
          "tree_id": "eabc5bd3cfdf7a73aee3d363fcf617e5c0fa4cc0",
          "url": "https://github.com/lukechu10/maple/commit/68db603627a26a2f47b3381ebcd2d2fb78a4baf4"
        },
        "date": 1618537337264,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56804,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 574165,
            "range": "± 10210",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2760,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118667,
            "range": "± 2598",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "creeper844@gmail.com",
            "name": "Riey",
            "username": "Riey"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94db20a78aac56e60c3e5220ccfeb5b6f3f07b49",
          "message": "Fix CHANGELOG typo (#102)",
          "timestamp": "2021-04-22T09:57:13-07:00",
          "tree_id": "242d907acd915ad0b9514adc70c7ab43bbd2d2c8",
          "url": "https://github.com/lukechu10/maple/commit/94db20a78aac56e60c3e5220ccfeb5b6f3f07b49"
        },
        "date": 1619110880399,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58467,
            "range": "± 3496",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 587579,
            "range": "± 33750",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2752,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 119606,
            "range": "± 5113",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b27cafc2a74778fd891d6a5b30813325f651fb43",
          "message": "Add contributors image to README.md",
          "timestamp": "2021-04-22T10:05:38-07:00",
          "tree_id": "1efa76d1a9b6b068267b1ee31be43fee5f2e6855",
          "url": "https://github.com/lukechu10/maple/commit/b27cafc2a74778fd891d6a5b30813325f651fb43"
        },
        "date": 1619111399774,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57707,
            "range": "± 2685",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 586053,
            "range": "± 18606",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2734,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118217,
            "range": "± 2575",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94ad7d3ad20f619f4e24f09557e1542ea85c6c13",
          "message": "Update wasm-bindgen to v0.2.74 in .gitpod.Dockerfile (#108)",
          "timestamp": "2021-06-01T20:47:39Z",
          "tree_id": "55d4adc9bfffe876b4e5da93ab41c43d8f34cded",
          "url": "https://github.com/lukechu10/maple/commit/94ad7d3ad20f619f4e24f09557e1542ea85c6c13"
        },
        "date": 1622580676905,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55952,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 576552,
            "range": "± 11406",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2717,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 117778,
            "range": "± 2855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80371dcbfbd1bdaa166ed52c1ba113b4589a1595",
          "message": "Text in `TemplateResult` (#104)\n\n* rust_2018_idioms\r\n\r\n* Ccorrectly stringify self-closing tags in SSR\r\n\r\n* Rename render to create\r\n\r\n* Move render_* functions into sub-modules\r\n\r\n* Naive hydration\r\n\r\n* get_children utility\r\n\r\n* Add mapped and indexed placeholder\r\n\r\n* Allow effects to be FnMut (#103)\r\n\r\n* Allow effects to be FnMut\r\n\r\n* Only add -Dwarnings for clippy\r\n\r\n* Set CARGO_TERM_COLOR to always\r\n\r\n* map_indexed\r\n\r\n* Implement map_keyed\r\n\r\n* Add fast paths for map_keyed\r\n\r\n* Make TemplateResult recursive\r\n\r\n* Make map_* return closures\r\n\r\n* Refactor TemplateResult\r\n\r\n* Add a Lazy TemplateResult\r\n\r\n* Allow create_memo and create_selector to take FnMut\r\n\r\n* Fix unit tests\r\n\r\n* Change TemplateResultInner::Lazy to be FnMut\r\n\r\n* insert_expression node and lazy\r\n\r\n* Make most of the tests pass\r\n\r\n* Remove append_render\r\n\r\n* Make Lazy work\r\n\r\n* Fix reactivity\r\n\r\n* Make fragment template work\r\n\r\n* renconcile_fragments\r\n\r\n* Support TemplateResult in interpolation syntax\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* Push lazy TemplateResult to normalized\r\n\r\n* wip\r\n\r\n* wip\r\n\r\n* NodeId\r\n\r\n* Add renconcile tests\r\n\r\n* Add reconcile do not clone node test\r\n\r\n* Update wasm-bindgen to 0.2.74 in CI\r\n\r\n* Interpolation nested reactivity test\r\n\r\n* Remove Option from TemplateResultInner::Lazy type\r\n\r\n* cargo clippy\r\n\r\n* Append fragment nodes at the right location\r\n\r\n* wip\r\n\r\n* refactor\r\n\r\n* refactor\r\n\r\n* Fix map_keyed\r\n\r\n* Fix clippy\r\n\r\n* Remove unused NodeRef in TodoMVC example\r\n\r\n* Remove fragment from GenericNode\r\n\r\n* Remove Fragment from SsrNode\r\n\r\n* Refactor SsrNode::try_remove_child\r\n\r\n* Deprecate TemplateResult::flatten\r\n\r\n* Change Render to IntoTemplate\r\n\r\n* Refactor rendering of template fragments\r\n\r\n* Rewrite impl ToTokens for Element\r\n\r\n* Split up ToTokens in element.rs\r\n\r\n* Visitor pattern for Html nodes\r\n\r\n* TemplateVisitor\r\n\r\n* Insert components and interpolated values before a marker\r\n\r\n* Fix nested fragments\r\n\r\n* Lazy in fragment test\r\n\r\n* Fix DomNode::replace_child\r\n\r\n* Fix Indexed and Keyed\r\n\r\n* Fix iteration example\r\n\r\n* Fix reconcile\r\n\r\n* Pass the wasm test suite!!!\r\n\r\n* Fix the ssr test",
          "timestamp": "2021-06-07T23:07:08Z",
          "tree_id": "f7ad5c5bb61bee82f978ded2e119929ea946b85f",
          "url": "https://github.com/lukechu10/maple/commit/80371dcbfbd1bdaa166ed52c1ba113b4589a1595"
        },
        "date": 1623107431508,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57416,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 583933,
            "range": "± 13993",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2338,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118442,
            "range": "± 2121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2b7f7ffaf1284f3e01e37f01d72c81edc054825",
          "message": "Rename to sycamore (#109)",
          "timestamp": "2021-06-07T16:22:47-07:00",
          "tree_id": "507a10838f6fe1f1c3b7faf908a05302513182cb",
          "url": "https://github.com/lukechu10/sycamore/commit/f2b7f7ffaf1284f3e01e37f01d72c81edc054825"
        },
        "date": 1623108509272,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 62322,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 640765,
            "range": "± 27397",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2751,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 131512,
            "range": "± 5243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99d7380638cd2a17eb53765bb3b12cde94ceb05e",
          "message": "Update git repository url to sycamore-rs/sycamore (#110)",
          "timestamp": "2021-06-07T16:27:10-07:00",
          "tree_id": "dc66018d71e1292639124a71c51f4e80bba6e305",
          "url": "https://github.com/sycamore-rs/sycamore/commit/99d7380638cd2a17eb53765bb3b12cde94ceb05e"
        },
        "date": 1623108676488,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57186,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 607738,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2449,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 122434,
            "range": "± 153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d25464dc3194f8b505129c6a9756a30b5ef9dab8",
          "message": "v0.5.0-beta.0",
          "timestamp": "2021-06-07T17:33:34-07:00",
          "tree_id": "afe938f2f661fd0a5c344f9620ed1bd2e55df80c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d25464dc3194f8b505129c6a9756a30b5ef9dab8"
        },
        "date": 1623112640473,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55645,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 589689,
            "range": "± 7265",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2409,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 120070,
            "range": "± 1389",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ef40b4561e217688fb3fd3a51a05dc1654b5162d",
          "message": "Fix README.md path",
          "timestamp": "2021-06-07T17:35:01-07:00",
          "tree_id": "fd7fbee97327f0eecffc247d7d2062639bfe1bc3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ef40b4561e217688fb3fd3a51a05dc1654b5162d"
        },
        "date": 1623112733768,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58282,
            "range": "± 3184",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 621002,
            "range": "± 57010",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2403,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 119837,
            "range": "± 1877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4147d2dd9f7cd9c91b4ce584dcdefcef1452c8aa",
          "message": "Update docs (#111)",
          "timestamp": "2021-06-08T08:36:02-07:00",
          "tree_id": "c8e95196cf0882e9e04781008b3d9c51f40e42c1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4147d2dd9f7cd9c91b4ce584dcdefcef1452c8aa"
        },
        "date": 1623166789550,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55930,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 594170,
            "range": "± 16866",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2527,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 112392,
            "range": "± 5202",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7bd98327a450dde8c2629f8673550cdef89e2dd",
          "message": "Rename TemplateResult to Template (#112)",
          "timestamp": "2021-06-08T21:52:04Z",
          "tree_id": "230e242a61417d415169e4ab2792e94a9fd3d45e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e7bd98327a450dde8c2629f8673550cdef89e2dd"
        },
        "date": 1623189335909,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55048,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 560212,
            "range": "± 22987",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2498,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 117333,
            "range": "± 4012",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c9b1f35f7fc5c6a82f0916f1926dae8af0c2698",
          "message": "Rename reactive to rx (#113)",
          "timestamp": "2021-06-08T22:00:24Z",
          "tree_id": "660cf67251b041d15204193bef84aa68411fd6bc",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8c9b1f35f7fc5c6a82f0916f1926dae8af0c2698"
        },
        "date": 1623189827992,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56565,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 610785,
            "range": "± 5817",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2438,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121793,
            "range": "± 1057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c1f19282375da9c44a6771b2a472109f533a98b",
          "message": "Add micro-benchmarks for `map_indexed` and `map_keyed` (#115)\n\n* Add micro-benchmarks for map_keyed and map_indexed\r\n\r\n* Add some optimizations",
          "timestamp": "2021-06-09T16:00:25-07:00",
          "tree_id": "eb9ff290eab209d4e4dca7bc60c1608ea98590f1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6c1f19282375da9c44a6771b2a472109f533a98b"
        },
        "date": 1623279831940,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46956,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 504468,
            "range": "± 2995",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2294,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 105758,
            "range": "± 2446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68abeb0a36355c06714a0ac3584921071b3d3fe4",
          "message": "Run js-framework-benchmark in CI (#114)\n\n* Add js-framework-benchmark example\r\n\r\n* Use references more often in generic_node::render\r\n\r\n* Add js framework benchmark workflow\r\n\r\n* Fix search Cargo.toml\r\n\r\n* Do not use http crate to start server\r\n\r\n* Add if always() to steps\r\n\r\n* Update workflows\r\n\r\n* Remove set-env\r\n\r\n* Fix env variable\r\n\r\n* Update workflow\r\n\r\n* Remove js-framework-benchmark example\r\n\r\n* Fix workflow\r\n\r\n* Update js_framework_bench.yml",
          "timestamp": "2021-06-09T18:15:08-07:00",
          "tree_id": "20e8e2d0d4ae0a8c840edc4b02ebf75dc695c3be",
          "url": "https://github.com/sycamore-rs/sycamore/commit/68abeb0a36355c06714a0ac3584921071b3d3fe4"
        },
        "date": 1623287931328,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42887,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 450231,
            "range": "± 14564",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2018,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 94498,
            "range": "± 2331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fe17c311645e666f60c82da1d0c5c4516c57619",
          "message": "Fix naming of benches to work with continuous benchmark (#116)",
          "timestamp": "2021-06-10T01:20:56Z",
          "tree_id": "407327eee5a8dceb7dbc7a07a9a83342df90b6c4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5fe17c311645e666f60c82da1d0c5c4516c57619"
        },
        "date": 1623288297181,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57563,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 591322,
            "range": "± 13046",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16177,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38318,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2341,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118583,
            "range": "± 2344",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ff2e7625b2f09243acce7121f6153150613131c",
          "message": "TailwindCSS for docs website (#117)\n\n* New tailwindcss navbar\r\n\r\n* Index page\r\n\r\n* Content page",
          "timestamp": "2021-06-10T11:36:54-07:00",
          "tree_id": "aa07216d3b97410d207dbf419c052ace9bbb1fab",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4ff2e7625b2f09243acce7121f6153150613131c"
        },
        "date": 1623350469123,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53438,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 590406,
            "range": "± 29049",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15877,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33932,
            "range": "± 2763",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2536,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 118013,
            "range": "± 8914",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "56610b6288f8b465b7acba4a8d1105bfe876ffb6",
          "message": "Fix docs styling and missing links in sidebar",
          "timestamp": "2021-06-10T12:18:09-07:00",
          "tree_id": "9e3839940004b757fe2ffb423fb0cb5b0f96006d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/56610b6288f8b465b7acba4a8d1105bfe876ffb6"
        },
        "date": 1623352907487,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40925,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 447081,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12237,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 27193,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2239,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 105199,
            "range": "± 95",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db69e72f96e352e31fed7da4ce091262914f33a1",
          "message": "Sycamore Router (#118)\n\n* Create sycamore-router and  sycamore-router-macro crates\r\n\r\n* Route matching implementation\r\n\r\n* Route parser\r\n\r\n* Fields::Unnamed\r\n\r\n* Router codegen\r\n\r\n* Add more trybuild tests\r\n\r\n* Add integration tests\r\n\r\n* Rename proc-macro Router to Route\r\n\r\n* Rename trait Router to Route\r\n\r\n* wip\r\n\r\n* StaticRouter, Link and BrowserRouter\r\n\r\n* history.pushState\r\n\r\n* Use sycamore_router for docs\r\n\r\n* Listen to onpopstate",
          "timestamp": "2021-06-23T18:46:11Z",
          "tree_id": "cfba0d9d3d695107a2df788307450ae5076f957b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/db69e72f96e352e31fed7da4ce091262914f33a1"
        },
        "date": 1624474217529,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55261,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 597196,
            "range": "± 7925",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16787,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35404,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2406,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121203,
            "range": "± 458",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffc1f4561d3c0e20e1a0a9b655d26f47f5aef4bf",
          "message": "Temporary \"fake\" hydration (#101)\n\n* Fix docs for SsrNode\r\n\r\n* Add comments about hydrate",
          "timestamp": "2021-06-25T17:41:01Z",
          "tree_id": "0547f799a1a7bc73ec2027ad6591a0fbde658588",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ffc1f4561d3c0e20e1a0a9b655d26f47f5aef4bf"
        },
        "date": 1624643147862,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56304,
            "range": "± 3893",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 612027,
            "range": "± 23706",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16732,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35138,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2466,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121381,
            "range": "± 1373",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf985c0b8593dcadf968da4bbe6cb6350a126c6d",
          "message": "Various performance improvements (#126)\n\n* Intern tag string for DomNode::element\r\n\r\n* Update js_framework_bench.yml\r\n\r\n* Fix read file contents path in workflow\r\n\r\n* Use a key function in map_keyed\r\n\r\n* Intern string literals in sycamore-macro\r\n\r\n* Intern attribute name\r\n\r\n* Drop event handler on_cleanup\r\n\r\n* Fix test",
          "timestamp": "2021-06-26T16:15:06-07:00",
          "tree_id": "6c131adc4211891b7f86a94c94560e60ce540c19",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bf985c0b8593dcadf968da4bbe6cb6350a126c6d"
        },
        "date": 1624749549740,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54955,
            "range": "± 3812",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 645519,
            "range": "± 11797",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18398,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37652,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2577,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 124537,
            "range": "± 1947",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5923d321568e4984c663c17284ad1e07427d889c",
          "message": "Router use anchor tags (#128)\n\n* Use anchor tags\r\n\r\n* Do not refresh if link to same page",
          "timestamp": "2021-06-27T18:02:06Z",
          "tree_id": "013e3bb5159299ed89de17284206cd97480401b8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5923d321568e4984c663c17284ad1e07427d889c"
        },
        "date": 1624817184460,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53179,
            "range": "± 4137",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 600466,
            "range": "± 28831",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17149,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33650,
            "range": "± 2884",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2714,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 123214,
            "range": "± 9384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6d5c6d6a488bcaca0cfda6c92ab0d1758c049cd4",
          "message": "v0.5.0-beta.1",
          "timestamp": "2021-06-27T18:56:37Z",
          "tree_id": "43911e167e373d314892b2443c54ef3de4d1963c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6d5c6d6a488bcaca0cfda6c92ab0d1758c049cd4"
        },
        "date": 1624820504873,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56766,
            "range": "± 3641",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 669142,
            "range": "± 21232",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17502,
            "range": "± 740",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36904,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2848,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 131506,
            "range": "± 5552",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "934e38a01ba0c690753bb9de95ad586b8bfa111c",
          "message": "Update Cargo.toml with missing fields",
          "timestamp": "2021-06-27T19:00:22Z",
          "tree_id": "737af4faacec2a9d5d6d36cfd590bf5187d324c9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/934e38a01ba0c690753bb9de95ad586b8bfa111c"
        },
        "date": 1624820676315,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50037,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 581140,
            "range": "± 23904",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15289,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32042,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2504,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 115291,
            "range": "± 3145",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "635d9a007d259652f9449db535f15de940fb86b0",
          "message": "Fix docs links in header to use router (#132)",
          "timestamp": "2021-06-29T18:55:05Z",
          "tree_id": "e2cb82f586c820129a098b76f05c11bb6e2d8ba6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/635d9a007d259652f9449db535f15de940fb86b0"
        },
        "date": 1624993147605,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55631,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 668067,
            "range": "± 5333",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20027,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39343,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2625,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 130662,
            "range": "± 612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27d90ecb08a020ea9da7e1b3233d6331ac2050ef",
          "message": "Documentation for Router + SSR (#133)\n\n* Add navigate function\r\n\r\n* Add rustdocs to sycamore-router\r\n\r\n* Add rustdocs for generic_node::render\r\n\r\n* Add rustdocs to rx::iter\r\n\r\n* Docs for router\r\n\r\n* Add SSR docs\r\n\r\n* Add some more router docs\r\n\r\n* Add code snippet to SSR docs",
          "timestamp": "2021-06-29T18:16:28-07:00",
          "tree_id": "b7a2173c348e1828275ca4c1ae3a14568b4318f0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/27d90ecb08a020ea9da7e1b3233d6331ac2050ef"
        },
        "date": 1625015999762,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49831,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 494033,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13805,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30872,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2435,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 111837,
            "range": "± 143",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3e877b4d9afd423c15c8760edabbbf6ae4a20dd",
          "message": "Website improvements (#134)\n\n* Get outline from markdown parser\r\n\r\n* Extract outline from markdown\r\n\r\n* OutlineView\r\n\r\n* Add sidebar\r\n\r\n* Update docs website\r\n\r\n* Add discord link to header",
          "timestamp": "2021-06-29T22:10:14-07:00",
          "tree_id": "f07dbf5edd9666174fa31455d443e5ee20be61bf",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f3e877b4d9afd423c15c8760edabbbf6ae4a20dd"
        },
        "date": 1625030069589,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56534,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 636690,
            "range": "± 44580",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17596,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39671,
            "range": "± 1545",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2669,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 125914,
            "range": "± 7323",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "844fcc75032fabbca4e2035acf7a8dfdeda75074",
          "message": "Google Search Console verification (#135)\n\n* Add files via upload\r\n\r\n* Update index.html",
          "timestamp": "2021-06-30T12:13:59-07:00",
          "tree_id": "f0bf52f2c4c641a6e7809032162220d4f1b508f7",
          "url": "https://github.com/sycamore-rs/sycamore/commit/844fcc75032fabbca4e2035acf7a8dfdeda75074"
        },
        "date": 1625080775113,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56373,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 692983,
            "range": "± 5059",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18597,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41540,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2667,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 126903,
            "range": "± 832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8aff0c4a26be215c2dc69fbfd040a22627ae0da",
          "message": "Get NodeId for DomNode lazily (only when getting Hash for DomNode) (#136)\n\n* NodeId start at 1\r\n\r\n* Get node id lazily",
          "timestamp": "2021-06-30T14:41:33-07:00",
          "tree_id": "494f7e2dcef6c276a2e10207396fcccf3c7408d5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d8aff0c4a26be215c2dc69fbfd040a22627ae0da"
        },
        "date": 1625089546902,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53971,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 672997,
            "range": "± 8902",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17793,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40789,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2550,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 124586,
            "range": "± 2456",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1a5291182c3a2cca20ddcb02beafd62c6d26adf",
          "message": "Do not insert unnecessary markers (#137)\n\n* Do not insert unnecessary markers\r\n\r\n* Fix ssr tests",
          "timestamp": "2021-07-01T14:18:28-07:00",
          "tree_id": "b6ba8dc8c0e6099ba6b1a53114d5f464c0db5f32",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e1a5291182c3a2cca20ddcb02beafd62c6d26adf"
        },
        "date": 1625174583569,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 60036,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 719934,
            "range": "± 43026",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19240,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38497,
            "range": "± 2010",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2938,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 93981,
            "range": "± 8283",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a2dd0ea52b2be18a1572dc7d3f1873dcdb1fa2d",
          "message": "Implement missing SsrNode methods for GenericNode (#138)",
          "timestamp": "2021-07-01T21:34:43Z",
          "tree_id": "4ef63a25f8ce997b95da267b05f4e90b4273b12a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/1a2dd0ea52b2be18a1572dc7d3f1873dcdb1fa2d"
        },
        "date": 1625175534800,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55540,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 672833,
            "range": "± 52549",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17732,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36960,
            "range": "± 2053",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2614,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 88179,
            "range": "± 1428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e67e39c0f793a92ffd59bc5a77c8902a84a43f8",
          "message": "Move doc pages under /docs/* (#139)\n\n* Move doc pages under /docs/*\r\n\r\n* Fix workflows",
          "timestamp": "2021-07-01T19:17:41-07:00",
          "tree_id": "704c77011e256e841782645968e6d606d25de6d8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7e67e39c0f793a92ffd59bc5a77c8902a84a43f8"
        },
        "date": 1625192515113,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58019,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 677475,
            "range": "± 31682",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17853,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37606,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2850,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 90506,
            "range": "± 3759",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97d869a9d86c9704244e672748154acaff5bdbee",
          "message": "Remove render functions from prelude (#140)\n\n* Remove render functions from prelude\r\n\r\n* Fix workflow\r\n\r\n* Remove mod into_template\r\n\r\n* Fix do not remove all children when reactive text updates",
          "timestamp": "2021-07-01T19:51:04-07:00",
          "tree_id": "cb7c39dde3750d083b636e54b52ad2e91a03d725",
          "url": "https://github.com/sycamore-rs/sycamore/commit/97d869a9d86c9704244e672748154acaff5bdbee"
        },
        "date": 1625194531859,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55038,
            "range": "± 1987",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 669526,
            "range": "± 23369",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17791,
            "range": "± 2749",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40206,
            "range": "± 2519",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2808,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 87004,
            "range": "± 2523",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ec07777ca9b627524ff1cdea7a9ef26c8bb58eec",
          "message": "Add docs for iteration",
          "timestamp": "2021-07-01T20:09:04-07:00",
          "tree_id": "f898f16d664c7ecd152a62ec8cffb0bc595b8004",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ec07777ca9b627524ff1cdea7a9ef26c8bb58eec"
        },
        "date": 1625195605991,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58408,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 710625,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19167,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39807,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2732,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 91934,
            "range": "± 173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2d037c252d194dbcafbf8c6043343f9fdb6a4623",
          "message": "Docs for NodeRef",
          "timestamp": "2021-07-02T15:36:00-07:00",
          "tree_id": "13149080e2b973b0d680e16490e20bdd2cac6965",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2d037c252d194dbcafbf8c6043343f9fdb6a4623"
        },
        "date": 1625265617822,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49847,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 606741,
            "range": "± 28931",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16250,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33578,
            "range": "± 1756",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2445,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80718,
            "range": "± 4263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "86c7aae7b61f0ee57713ef9f31e22a3596d8750d",
          "message": "Update docs",
          "timestamp": "2021-07-02T16:06:18-07:00",
          "tree_id": "be461f8530199e6996c5b6067b165760a193e31c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/86c7aae7b61f0ee57713ef9f31e22a3596d8750d"
        },
        "date": 1625267400961,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50029,
            "range": "± 3012",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 613623,
            "range": "± 29858",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16588,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33139,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2258,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 76845,
            "range": "± 4197",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "37fd41a4687fd595e77e7cd5f727edb7e59bbbc8",
          "message": "Fix wasm-pack",
          "timestamp": "2021-07-02T16:14:06-07:00",
          "tree_id": "1218aa17f8f2701b4321bc0f246fb279ede09a08",
          "url": "https://github.com/sycamore-rs/sycamore/commit/37fd41a4687fd595e77e7cd5f727edb7e59bbbc8"
        },
        "date": 1625267869559,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48265,
            "range": "± 2222",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 592477,
            "range": "± 30069",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17440,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32671,
            "range": "± 1314",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2343,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 79680,
            "range": "± 5153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef175728fd34a3f2309160bb17339de0dcc861d7",
          "message": "Remove unnecessary `Rc<RefCell<_>>`s (#141)\n\n* Remove Rc<RefCell<_>> from create_effect_initial\r\n\r\n* Fix issue Remove unnecessary `Rc` #131\r\n\r\n* Make new_indices_next more compact\r\n\r\n* Remove some Rc::clone\r\n\r\n* Fix install wasm-pack",
          "timestamp": "2021-07-03T16:21:09-07:00",
          "tree_id": "32f04f6eb5fa4f17054e8801241bd3d757fa1c91",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ef175728fd34a3f2309160bb17339de0dcc861d7"
        },
        "date": 1625354716670,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 60385,
            "range": "± 4008",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 702482,
            "range": "± 3675",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19543,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 43474,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2836,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 91851,
            "range": "± 938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eea5bf3a46432986428a8002bd7c6e4794d00b9e",
          "message": "Cache document since it is frequently accessed (#142)",
          "timestamp": "2021-07-03T21:25:38-07:00",
          "tree_id": "a5caae95843c61f1b44ef83966192dd85999ef4e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/eea5bf3a46432986428a8002bd7c6e4794d00b9e"
        },
        "date": 1625372979689,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52183,
            "range": "± 3026",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571529,
            "range": "± 62027",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15718,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33050,
            "range": "± 2991",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2459,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 81424,
            "range": "± 4841",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b5ef37056ebff72afcaad35e51cd05d2dbdf5fa",
          "message": "Dependency count utility function (#144)\n\n* Add some comments\r\n\r\n* Add nested effects trigger outer effect test",
          "timestamp": "2021-07-06T04:48:19Z",
          "tree_id": "42b8a8b6a20a8a1ee8e626c08ca685f283ac9a70",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9b5ef37056ebff72afcaad35e51cd05d2dbdf5fa"
        },
        "date": 1625547137911,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54800,
            "range": "± 2347",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 660604,
            "range": "± 55905",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18519,
            "range": "± 1267",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35266,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2812,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 88251,
            "range": "± 5256",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ac9f1aa561879a2b8649c6e718f5dff2c997a4c",
          "message": "Do not assume Signal is valid for entire duration of effect and make effect triggers deterministic (#145)\n\n* Add create_nested_effect_from_outside test\r\n\r\n* Add outer effects rerun first test\r\n\r\n* Fix docs typo\r\n\r\n* Deterministic effect trigger\r\n\r\n* Make Dependency take a strong backlink\r\n\r\n* Fix typo in template! proc-macro",
          "timestamp": "2021-07-06T18:44:29Z",
          "tree_id": "bc28a6f5849bf541045b40e3b00f1dd9eae6061a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7ac9f1aa561879a2b8649c6e718f5dff2c997a4c"
        },
        "date": 1625597302696,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49815,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 676429,
            "range": "± 9085",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17362,
            "range": "± 664",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38419,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2642,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 85811,
            "range": "± 1955",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abf16273315ec521458082ab276bda949840ce5f",
          "message": "Template eagerly evaluate Dyn with memo (#146)\n\n* Rename Template lazy to dyn\r\n\r\n* Make template use StateHandle\r\n\r\n* Remove useless function\r\n\r\n* Move generic_template::render to utils::render\r\n\r\n* Remove some cloning\r\n\r\n* Wrap Template fragments inside a Rc\r\n\r\n* Update benches\r\n\r\n* Single dom node optimization",
          "timestamp": "2021-07-06T15:58:53-07:00",
          "tree_id": "0687e11dbb5f5f8cbfc23a0af6555db6c289bfed",
          "url": "https://github.com/sycamore-rs/sycamore/commit/abf16273315ec521458082ab276bda949840ce5f"
        },
        "date": 1625612599625,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48479,
            "range": "± 2833",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 668624,
            "range": "± 21734",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18567,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37021,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2758,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 117764,
            "range": "± 6343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "067c5726149a4f24dc0cb504414df454d1039146",
          "message": "v0.5.0",
          "timestamp": "2021-07-06T20:56:31-07:00",
          "tree_id": "90eb7adebca31d6759a0da0a1b48998570cc49ff",
          "url": "https://github.com/sycamore-rs/sycamore/commit/067c5726149a4f24dc0cb504414df454d1039146"
        },
        "date": 1625630452879,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43085,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 620909,
            "range": "± 28510",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16559,
            "range": "± 1164",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34036,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2527,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 97980,
            "range": "± 2531",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f22045f62d8e82bed2f4a53c9ff4de16fda75af3",
          "message": "Remove Hash bound for Keyed T (#148)",
          "timestamp": "2021-07-07T10:28:54-07:00",
          "tree_id": "66fe822bba601ecd1a540eb9dfd05c24cd473eda",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f22045f62d8e82bed2f4a53c9ff4de16fda75af3"
        },
        "date": 1625679160760,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 37719,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 549204,
            "range": "± 25695",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14203,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30237,
            "range": "± 2344",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2223,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 91915,
            "range": "± 7118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97612e87413fd53c1835baaf6df4efcde69f2f90",
          "message": "Add news section to website (#149)\n\n* Remove Hash bound for Keyed T\r\n\r\n* v0.5.0 release post\r\n\r\n* Add news to navbar",
          "timestamp": "2021-07-07T11:32:47-07:00",
          "tree_id": "7b8b2d61202b3ef6766ef491d5ccf723c7a06a17",
          "url": "https://github.com/sycamore-rs/sycamore/commit/97612e87413fd53c1835baaf6df4efcde69f2f90"
        },
        "date": 1625683007559,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52744,
            "range": "± 2371",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 722536,
            "range": "± 27712",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19927,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 45644,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2797,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 121446,
            "range": "± 4670",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "eee05f9acdd8256540b43c97888f03361f400cd1",
          "message": "Redirect news to index.html",
          "timestamp": "2021-07-07T11:38:50-07:00",
          "tree_id": "f850698a60c150e938ce70af30d9b42251eaefe1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/eee05f9acdd8256540b43c97888f03361f400cd1"
        },
        "date": 1625683376443,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49538,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 676233,
            "range": "± 5068",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19153,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40029,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2823,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 108106,
            "range": "± 390",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96b051481511d7719c47907779f444c307c0de65",
          "message": "Blog improvements (#150)\n\n* Add quickstart templates to release post\r\n\r\n* Update news index page",
          "timestamp": "2021-07-07T12:13:31-07:00",
          "tree_id": "5b7b5c88eeb8129db8662cac6fd8cc0f2af81436",
          "url": "https://github.com/sycamore-rs/sycamore/commit/96b051481511d7719c47907779f444c307c0de65"
        },
        "date": 1625685455628,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41720,
            "range": "± 1717",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 625692,
            "range": "± 55546",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16717,
            "range": "± 1276",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33921,
            "range": "± 1897",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2442,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 96434,
            "range": "± 7170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05852c57cb8f780ab128a492db4486b9da21ca22",
          "message": "Reduce allocations when creating templates (#143)\n\n* Add GenericNode::clone_node\r\n\r\n* GenericNode::first_child\r\n\r\n* Optimize create_effect_initial\r\n\r\n* Disable interning\r\n\r\n* Reenable interning\r\n\r\n* Prevent calling format in IntoTemplate\r\n\r\n* Remove unnecessary clone\r\n\r\n* Revert \"Remove unnecessary clone\"\r\n\r\nThis reverts commit d7adc2bb993034e6bb8456ec292ed3ea34f2b598.\r\n\r\n* Remove instances of format! from sycamore-macro codegen\r\n\r\n* Do not put static attributes inside an effect",
          "timestamp": "2021-07-08T03:19:53Z",
          "tree_id": "4161d661bb1cf4f24314705695743159ef4b1f5d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/05852c57cb8f780ab128a492db4486b9da21ca22"
        },
        "date": 1625714627339,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55117,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 708755,
            "range": "± 2951",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19644,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 42646,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1712,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74254,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tshepang@gmail.com",
            "name": "Tshepang Lekhonkhobe",
            "username": "tshepang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "463a2679876bf4637481b06909972a3987c52a21",
          "message": "small fixes (#156)",
          "timestamp": "2021-07-07T21:45:10-07:00",
          "tree_id": "5a52e64f55be8765dd9b3ce2db3fc572cafd4268",
          "url": "https://github.com/sycamore-rs/sycamore/commit/463a2679876bf4637481b06909972a3987c52a21"
        },
        "date": 1625719770974,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56824,
            "range": "± 4171",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 693301,
            "range": "± 51423",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18914,
            "range": "± 985",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38348,
            "range": "± 2209",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1890,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75206,
            "range": "± 3692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7df7a7a06a035b3da57daa5b59c69819aa533db0",
          "message": "Performance improvements (#155)\n\n* Remove Drop implementation for Running\r\n\r\n* Use a SmallVec in ReactiveScope\r\n\r\n* Initialize IndexSet with capacity\r\n\r\n* Initialize HashMap with initial capacity\r\n\r\n* HashMap::with_capacity in reconcile_fragments\r\n\r\n* Revert \"Initialize IndexSet with capacity\"\r\n\r\n* Update js_framework_bench.yml\r\n\r\n* Do not create effect if simple ident",
          "timestamp": "2021-07-08T10:46:25-07:00",
          "tree_id": "0f934b5afa3fe3a86c0b6d92e4569cd492c93129",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7df7a7a06a035b3da57daa5b59c69819aa533db0"
        },
        "date": 1625766610602,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48979,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 726947,
            "range": "± 14572",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25574,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 42740,
            "range": "± 1114",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1632,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42015,
            "range": "± 754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a68f6c9dcadabcedb6a4a37a42d9365e5b7fa98d",
          "message": "Set className directly instead of calling setAttribute (#157)\n\n* Set className directly instead of calling setAttribute\r\n\r\n* Do not provide default implementation on GenericNode",
          "timestamp": "2021-07-08T11:30:17-07:00",
          "tree_id": "0d0564b9d144d3315515a9fb38c6d38735ee9b21",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a68f6c9dcadabcedb6a4a37a42d9365e5b7fa98d"
        },
        "date": 1625769272255,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51615,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 699846,
            "range": "± 36293",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23748,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39628,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1886,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 48076,
            "range": "± 3007",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8f0e3d7f74cf0c92e15593b125236940cb3fc0c",
          "message": "Faster effects (#159)\n\n* Do not clear old dependencies on initial\r\n\r\n* Subscribe/unsubscribe signals only belonging to diff\r\n\r\n* Revert \"Subscribe/unsubscribe signals only belonging to diff\"\r\n\r\nThis reverts commit db0ef3007963a8069e1bb16f86601e2c2fdb0a60.",
          "timestamp": "2021-07-08T13:47:25-07:00",
          "tree_id": "5774b233168a6f74b2b44e5c5cc854c5384fecb3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f8f0e3d7f74cf0c92e15593b125236940cb3fc0c"
        },
        "date": 1625777465242,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42190,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 627299,
            "range": "± 3194",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22559,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37214,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1555,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 36678,
            "range": "± 47",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fa45162f4b8472c689321989225fa8a7a07d03e",
          "message": "Versioned docs (#160)\n\n* Subscribe/unsubscribe signals only belonging to diff\r\n\r\n* Revert \"Subscribe/unsubscribe signals only belonging to diff\"\r\n\r\nThis reverts commit db0ef3007963a8069e1bb16f86601e2c2fdb0a60.\r\n\r\n* Rename docs to website\r\n\r\n* Fix cargo workspace\r\n\r\n* Prebuild docs markdown\r\n\r\n* Fix type error\r\n\r\n* Prerender posts\r\n\r\n* Add versioned docs\r\n\r\n* Fix build script\r\n\r\n* Add version switcher\r\n\r\n* Warning for next/outdated version\r\n\r\n* Fix\r\n\r\n* Make version text bold\r\n\r\n* Fix margins",
          "timestamp": "2021-07-09T10:46:44-07:00",
          "tree_id": "384273784b12d4f830ec0f63d1933cd04aea93f6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3fa45162f4b8472c689321989225fa8a7a07d03e"
        },
        "date": 1625853045739,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49822,
            "range": "± 2490",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 710028,
            "range": "± 37964",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26247,
            "range": "± 827",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 42106,
            "range": "± 2002",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1614,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42160,
            "range": "± 1372",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2f246c40291cefc7f6c0110fd2fcc4cfbe84b04d",
          "message": "v0.5.1",
          "timestamp": "2021-07-09T11:13:15-07:00",
          "tree_id": "3418ff62803c56983d955d9bfcbdbdf93da82c8d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2f246c40291cefc7f6c0110fd2fcc4cfbe84b04d"
        },
        "date": 1625854627599,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43613,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 628391,
            "range": "± 2876",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22085,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36721,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1631,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 37350,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tshepang@gmail.com",
            "name": "Tshepang Lekhonkhobe",
            "username": "tshepang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08bd6efca5504b9b030fd73328c443491e2f10a3",
          "message": "this option is default since over 3 years now (#163)",
          "timestamp": "2021-07-10T11:48:28-07:00",
          "tree_id": "1730fcfab1954e7c0be895395a862449eadc5aef",
          "url": "https://github.com/sycamore-rs/sycamore/commit/08bd6efca5504b9b030fd73328c443491e2f10a3"
        },
        "date": 1625943145647,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51023,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 730557,
            "range": "± 12109",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26136,
            "range": "± 520",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 42926,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1684,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42687,
            "range": "± 823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "baile320@umn.edu",
            "name": "Tyler Bailey",
            "username": "baile320"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2849342d56a61b88388241afff9ddee07757e3b3",
          "message": "Router should not prevent default if meta keys are held down (#165)\n\n* check if meta keys are pressed during routing\r\n\r\n* alphabetize web-sys dependencies for router",
          "timestamp": "2021-07-11T19:07:54Z",
          "tree_id": "fa86e2510f6be42060b8f297bf903c9d6af912ed",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2849342d56a61b88388241afff9ddee07757e3b3"
        },
        "date": 1626030722668,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49270,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 705342,
            "range": "± 38163",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23882,
            "range": "± 1888",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41570,
            "range": "± 3884",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1877,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41765,
            "range": "± 2611",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36669d02175a897729240d1a13be6f3052e4f0a1",
          "message": "Fix link to book in version selector (#166)",
          "timestamp": "2021-07-11T20:00:59Z",
          "tree_id": "a64dddc8d20b078269fadbf33a50c697f390ff0f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/36669d02175a897729240d1a13be6f3052e4f0a1"
        },
        "date": 1626033866323,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43598,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 622617,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22024,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36636,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1579,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 36579,
            "range": "± 26",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66e5cd888d1ca88930d98b7da558bd8bc122a2ec",
          "message": "Remove some optional tags on dependencies (#167)",
          "timestamp": "2021-07-11T13:21:29-07:00",
          "tree_id": "29059828ea7a83192477f177041985adbbf2fea6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/66e5cd888d1ca88930d98b7da558bd8bc122a2ec"
        },
        "date": 1626035125531,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47578,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 679621,
            "range": "± 22364",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24197,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41689,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1524,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 39229,
            "range": "± 1922",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66318541d1285cdc66bfbf367f1f1c3b780dcf85",
          "message": "Add tests for StaticRouter (#168)",
          "timestamp": "2021-07-11T20:54:02Z",
          "tree_id": "798078f79114da7b97feb26dc29afae855d50f7c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/66318541d1285cdc66bfbf367f1f1c3b780dcf85"
        },
        "date": 1626037043912,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42344,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 554065,
            "range": "± 7741",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20177,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32979,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1549,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 37020,
            "range": "± 44",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tshepang@gmail.com",
            "name": "Tshepang Lekhonkhobe",
            "username": "tshepang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4340df03ee517f0cef3599d7b83c5270c89448ec",
          "message": "fix intra-doc link (#162)",
          "timestamp": "2021-07-11T16:44:43-07:00",
          "tree_id": "1b90313c682223472823ad69e7d9b70d5e87063f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4340df03ee517f0cef3599d7b83c5270c89448ec"
        },
        "date": 1626047327860,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53210,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 781968,
            "range": "± 2941",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 28066,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47007,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1784,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 45469,
            "range": "± 67",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Gearme@users.noreply.github.com",
            "name": "Gerald Melles",
            "username": "Gearme"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2073eb72c4c7d77176868cdcbfe2b70974c49a0e",
          "message": "Explicitly enable std feature for indexmap (#170)",
          "timestamp": "2021-07-12T21:39:28Z",
          "tree_id": "071ee7cb56dbae2a2a18e23557a7ccae0690ef4c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2073eb72c4c7d77176868cdcbfe2b70974c49a0e"
        },
        "date": 1626126185960,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43448,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 622264,
            "range": "± 2314",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21749,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36632,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1605,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 37207,
            "range": "± 811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d88683ee9879bdeca3edc047e855bd2f35db06f5",
          "message": "Context API (#169)\n\n* Make SCOPE an explicit stack rather than relying on callstack\r\n\r\n* Context API\r\n\r\n* Add context example\r\n\r\n* Add docs for context\r\n\r\n* Add unit test\r\n\r\n* Fix test\r\n\r\n* Make ReactiveScope more compact\r\n\r\n* Do not destroy cleanup right after children is evaluated",
          "timestamp": "2021-07-12T14:57:29-07:00",
          "tree_id": "0aa4749fccaec3111f4744136383cdd0426936a0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d88683ee9879bdeca3edc047e855bd2f35db06f5"
        },
        "date": 1626127290985,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43574,
            "range": "± 2620",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 621433,
            "range": "± 44339",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19681,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35242,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1611,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 38295,
            "range": "± 2143",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51c6c8b90b57facf0c0e485df58d88937404ffae",
          "message": "Tweak performance (#171)\n\n* fix\r\n\r\n* Tweak SmallVec stack size\r\n\r\n* Do not upcast Callback in Hash and PartialEq\r\n\r\n* Remove rand dependency\r\n\r\n* Fix cargo check\r\n\r\n* Prevent unnecessary upcasting and downcasting of Callback\r\n\r\n* Reduce RefCell checks\r\n\r\n* Organize imports",
          "timestamp": "2021-07-13T10:00:56-07:00",
          "tree_id": "bac33a432984cb23f0e4a70d81efa569e4fc9c88",
          "url": "https://github.com/sycamore-rs/sycamore/commit/51c6c8b90b57facf0c0e485df58d88937404ffae"
        },
        "date": 1626195894848,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51042,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 604067,
            "range": "± 29599",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18353,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34873,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1667,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42911,
            "range": "± 2201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65a5eb35b6fee9673c46a6bf2b5fafbb0b7059cb",
          "message": "Do not panic when map_keyed is updated with same data (#173)",
          "timestamp": "2021-07-16T22:33:48Z",
          "tree_id": "7042ed05424846019ce7facf3464e506c8d06866",
          "url": "https://github.com/sycamore-rs/sycamore/commit/65a5eb35b6fee9673c46a6bf2b5fafbb0b7059cb"
        },
        "date": 1626475069448,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50678,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 632517,
            "range": "± 6885",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17395,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34655,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1690,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 43381,
            "range": "± 247",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c5acaba733e41b100e388d20d15e4e35017e011",
          "message": "Refactor sycamore-macro (#175)\n\n* Refactor sycamore-macro\r\n\r\n* cleanup\r\n\r\n* Fix comment\r\n\r\n* Intern static text\r\n\r\n* Fix codegen",
          "timestamp": "2021-07-18T00:40:30Z",
          "tree_id": "61d13414098e4e75ea4c8e3b10feb182824e22ef",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8c5acaba733e41b100e388d20d15e4e35017e011"
        },
        "date": 1626569081799,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53071,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 666437,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18374,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36522,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1771,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 45390,
            "range": "± 170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6f975d8bd5ed142bf4e3f716bb6c66e0c0ec8909",
          "message": "v0.5.2",
          "timestamp": "2021-07-17T19:19:51-07:00",
          "tree_id": "30efce6a75a1aa8bb4359d312819c58c84a4abb4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6f975d8bd5ed142bf4e3f716bb6c66e0c0ec8909"
        },
        "date": 1626575039519,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49934,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 641221,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18227,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39854,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1681,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 43063,
            "range": "± 59",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "joel.dice@gmail.com",
            "name": "Joel Dice",
            "username": "dicej"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef84e31d68a5ece98569d66f5c3f0115e78c6eff",
          "message": "fix logic error in `reconcile_fragments` (#180)\n\nI noticed when using the `Keyed` component that when the `KeyedProps::iterable`\r\nvalue changed from a large `Vec` to a smaller one containing a subset of the\r\noriginal, not all the obsolete nodes were removed from the DOM.\r\n\r\nSpecifically, I started with a `Vec` with 10 elements, then removed all but the\r\nthird one.  The nodes before the remaining node were removed, but not the ones\r\nafter it.  This patch fixes the problem.",
          "timestamp": "2021-07-21T01:15:38Z",
          "tree_id": "0b7811c24ab86869c4e4928bbe10e1eedad56ffa",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ef84e31d68a5ece98569d66f5c3f0115e78c6eff"
        },
        "date": 1626830376926,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48127,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 617063,
            "range": "± 13664",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16994,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34243,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1699,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42966,
            "range": "± 450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev@daveid.co.uk",
            "name": "David Hewson",
            "username": "dten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "011ae83f598ca324a8a471d845b33b46323d9998",
          "message": "fix grammar on front page (#181)",
          "timestamp": "2021-07-21T21:13:53Z",
          "tree_id": "ee87e2ac19669508ff155ab480ca698dc9aa4e1b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/011ae83f598ca324a8a471d845b33b46323d9998"
        },
        "date": 1626902248129,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36801,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 471989,
            "range": "± 5514",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14711,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 26264,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1546,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 32968,
            "range": "± 172",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a212a9e32963f416be3b191639951824f8d0bb0d",
          "message": "Router integrations (#183)\n\n* Router integrations\r\n\r\n* Update router docs\r\n\r\n* Add comment",
          "timestamp": "2021-07-24T23:49:15Z",
          "tree_id": "3cdb59dd6456b75a2082268bdd54ab7a8ca4d329",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a212a9e32963f416be3b191639951824f8d0bb0d"
        },
        "date": 1627170799033,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49772,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 633188,
            "range": "± 2994",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17688,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35219,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1719,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 43610,
            "range": "± 375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55a94d8fda5c56bf9d84167bf7f9664e28439838",
          "message": "Router preload (#185)\n\n* Router integrations\r\n\r\n* Update router docs\r\n\r\n* Add comment\r\n\r\n* Make match_routes async\r\n\r\n* Add preload function\r\n\r\n* Fix clippy warnings in generated code\r\n\r\n* Use preload for docs\r\n\r\n* Fix: do not run preload functions of another route\r\n\r\n* Fix preload for news\r\n\r\n* Use syntect instead of highlight.js\r\n\r\n* Add docs for preloading\r\n\r\n* StaticRouter",
          "timestamp": "2021-07-28T00:46:31Z",
          "tree_id": "5b8ca0cde3227f4a89c994b390cccb8a00312be9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/55a94d8fda5c56bf9d84167bf7f9664e28439838"
        },
        "date": 1627433406046,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40544,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 530781,
            "range": "± 2999",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14871,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28818,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1366,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 36167,
            "range": "± 195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gao96@yahoo.com",
            "name": "Ochism",
            "username": "Ochism"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a742784d62ad03582ca63fe7516a317a0430d0b8",
          "message": "Added scroll to top when we navigate (#186)",
          "timestamp": "2021-07-28T17:30:17-07:00",
          "tree_id": "9eaf4f0e3d70f6d4316a22b29c96a67f26c97b84",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a742784d62ad03582ca63fe7516a317a0430d0b8"
        },
        "date": 1627518840315,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40366,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 527141,
            "range": "± 3172",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14725,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29663,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1537,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 36173,
            "range": "± 37",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26fb27435d514e7ad62d5aacb391b1392b26a710",
          "message": "Update trunk to v0.12.1 (#187)",
          "timestamp": "2021-07-30T11:25:16-07:00",
          "tree_id": "c76a1b368e60e94fe9897f65970ba2f550408409",
          "url": "https://github.com/sycamore-rs/sycamore/commit/26fb27435d514e7ad62d5aacb391b1392b26a710"
        },
        "date": 1627669785116,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50143,
            "range": "± 6724",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 655496,
            "range": "± 42232",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18189,
            "range": "± 1541",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35016,
            "range": "± 2145",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1970,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42765,
            "range": "± 3275",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "affa5cd959561d04277c781f6ace707aa6ee7deb",
          "message": "Implement dangerously_set_inner_html (#190)\n\n* Wrap code blocks on website\r\n\r\n* Update template.md\r\n\r\n* Fix clippy warnings\r\n\r\n* GenericNode::dangerously_set_inner_html\r\n\r\n* dangerously_set_inner_html in template!\r\n\r\n* Update workflows to use action-rs/toolchain\r\n\r\n* Fix cargo cache\r\n\r\n* Fix workflow syntax error\r\n\r\n* Update docs",
          "timestamp": "2021-07-31T12:52:45-07:00",
          "tree_id": "a0df20f02266bce67067845ccf7db642031b1469",
          "url": "https://github.com/sycamore-rs/sycamore/commit/affa5cd959561d04277c781f6ace707aa6ee7deb"
        },
        "date": 1627761432100,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44453,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 616638,
            "range": "± 16180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17037,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33509,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1745,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 40539,
            "range": "± 1706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61950183a820fb0ebff84284bb66e150467bcd6c",
          "message": "cargo upgrade (#192)",
          "timestamp": "2021-07-31T20:00:59Z",
          "tree_id": "2fcf958ea53679ed4c4f4e4b2e6677fe5be708c8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/61950183a820fb0ebff84284bb66e150467bcd6c"
        },
        "date": 1627761936149,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52552,
            "range": "± 6319",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 689388,
            "range": "± 64859",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18898,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36470,
            "range": "± 2882",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1934,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 47089,
            "range": "± 7960",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "035c1e7b09da5885114e7b44fbec32188a90d5fb",
          "message": "Use ahash instead of default SipHash (#193)",
          "timestamp": "2021-07-31T14:08:16-07:00",
          "tree_id": "bdfb3946c0cf4b9e6ccf945aac23afe614f97994",
          "url": "https://github.com/sycamore-rs/sycamore/commit/035c1e7b09da5885114e7b44fbec32188a90d5fb"
        },
        "date": 1627765957947,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42649,
            "range": "± 3194",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 534105,
            "range": "± 35997",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14959,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 27225,
            "range": "± 2869",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1702,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 40554,
            "range": "± 2067",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tshepang@gmail.com",
            "name": "Tshepang Lekhonkhobe",
            "username": "tshepang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8dfd807a238123909648680b69aeacb97e40c786",
          "message": "set MSRV (to 1.53), and test on macOS and Windows (#195)\n\nAlso, run UI test only on a single compiler version,\r\nbecause rustc error messages tend to vary between releases.\r\n\r\nCloses #191",
          "timestamp": "2021-08-02T17:51:35-07:00",
          "tree_id": "ff85d0e6573fc95dee4e603c9edb6bc13ddf1e10",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8dfd807a238123909648680b69aeacb97e40c786"
        },
        "date": 1627952145006,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44051,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 605558,
            "range": "± 7860",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17524,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30392,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1815,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 44779,
            "range": "± 607",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d4f383bd5caf8577f098d0c817f8ee7d6dcdf35",
          "message": "Remove inline JS snippet (#194)\n\n* NodeWithId\r\n\r\n* Remove setup chrome driver from bench workflow\r\n\r\n* Remove install wasm-bindgen\r\n\r\n* Update js-framework-benchmark workflow search and replace\r\n\r\n* Install chromedriver\r\n\r\n* Fix syntax error",
          "timestamp": "2021-08-04T15:57:20-07:00",
          "tree_id": "ae794b39d99d65a544350c3d15198146478aff6b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8d4f383bd5caf8577f098d0c817f8ee7d6dcdf35"
        },
        "date": 1628118051350,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 37038,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 507478,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13042,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 22784,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1441,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 33571,
            "range": "± 44",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d105c2dd5f7f2a92777f580d18caf30527406aa6",
          "message": "Add ui tests for `#[component]` (#198)\n\n* Add ui checks for component\r\n\r\n* Add more ui test cases",
          "timestamp": "2021-08-04T19:43:52-07:00",
          "tree_id": "0ee1c80f7761fe9fc7ee3c9d8eefa87a0b10c5ed",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d105c2dd5f7f2a92777f580d18caf30527406aa6"
        },
        "date": 1628131680146,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44873,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 618769,
            "range": "± 23269",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17772,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30762,
            "range": "± 2001",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1819,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 45263,
            "range": "± 1857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0b402e75c745f15e72b1e1fbf9b4bbaac379f25",
          "message": "Generate sitemap.xml (#201)\n\n* Generate sitemap.xml\r\n\r\n* Generate versions page",
          "timestamp": "2021-08-06T18:03:01-07:00",
          "tree_id": "4d2cc2e394093b00e262185a15546f549b349c6e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b0b402e75c745f15e72b1e1fbf9b4bbaac379f25"
        },
        "date": 1628298666381,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42129,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 575241,
            "range": "± 11864",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16621,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29453,
            "range": "± 1390",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1820,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 43251,
            "range": "± 1111",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a55106f38db41bd06f418518db08e800dc11c9c5",
          "message": "Tweak styles (#202)\n\n* Tweak styles\r\n\r\n* Update robots.txt",
          "timestamp": "2021-08-06T19:53:40-07:00",
          "tree_id": "40abb1620ddbaa44da5aa66b4eff11361fd2d23b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a55106f38db41bd06f418518db08e800dc11c9c5"
        },
        "date": 1628305021284,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31455,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 434278,
            "range": "± 7659",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12391,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 21524,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1378,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 32122,
            "range": "± 525",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex@x37v.info",
            "name": "Alex Norman",
            "username": "x37v"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc8d00a07de5d8a2d3c6bd6e111f1ef40e46a3ff",
          "message": "fix broken link to reactivity doc on main page (#203)\n\nwas going to: `https://sycamore-rs.netlify.app/basics/reactivity` with a `404`",
          "timestamp": "2021-08-07T13:23:28-07:00",
          "tree_id": "230166449f2eb9bfc441abb63c01685b84ec0e2f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fc8d00a07de5d8a2d3c6bd6e111f1ef40e46a3ff"
        },
        "date": 1628368238793,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43909,
            "range": "± 1308",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 580402,
            "range": "± 14669",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17374,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29966,
            "range": "± 1087",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1849,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42438,
            "range": "± 2875",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0eb84ca5d0b05bdd533fedcb397e5e8ef10c3660",
          "message": "Extract reactive primitives into new crate (#204)\n\n* Extract reactive primitives into new crate\r\n\r\n* Fix tests\r\n\r\n* Prevent duplicate CI runs\r\n\r\n* Rename Running to Listener\r\n\r\n* Unsubscribe and subscirbe to diff\r\n\r\n* Add some inline attributes\r\n\r\n* Remove create_effect_initial\r\n\r\n* Fix error",
          "timestamp": "2021-08-08T17:36:05-07:00",
          "tree_id": "e3e348a9fd98d2bc8c556104ad1ac674382237c6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0eb84ca5d0b05bdd533fedcb397e5e8ef10c3660"
        },
        "date": 1628469610225,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50773,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 595599,
            "range": "± 3105",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17026,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29725,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1851,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 47190,
            "range": "± 50",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yoshanuikabundi@gmail.com",
            "name": "Josh A. Mitchell",
            "username": "Yoshanuikabundi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "422ddec64e4fb62114cfd38c2605f88ae536b36d",
          "message": "Explain that Trunk needs a HTML source file (#206)\n\nHi! Just exploring Sycamore (looks cool so far) and ran into trouble running the hello world example, which doesn't describe creating index.html, which Trunk needs. Following the current instructions gives an error:\r\n\r\n```shell\r\n$ trunk serve                        \r\nError: error getting canonical path to source HTML file \"index.html\"\r\n\r\nCaused by:\r\n    No such file or directory (os error 2)\r\n```\r\n\r\nSo I thought I'd fix that :)\r\n\r\nThe page in question also previously said:\r\n\r\n> In fact, the Hello World program in Sycamore is but slightly longer than the console version!\r\n\r\nBut the console version is not described. So I've removed this sentence.\r\n\r\nFinally, the description of the sycamore repo on Github is\r\n\r\n> A reactive DOM library for Rust in WASM \r\n\r\nI only mention this in case you wanted to update it to \"Sycamore is a modern VDOM-less web library with fine-grained reactivity in Rust and WebAssembly.\" to match the readme.\r\n\r\nThanks!",
          "timestamp": "2021-08-09T15:12:25-07:00",
          "tree_id": "4f83fe3cfd08b259eca473f1e0777e934b3e3e8d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/422ddec64e4fb62114cfd38c2605f88ae536b36d"
        },
        "date": 1628547354820,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35912,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 421923,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12095,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 23502,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34007,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2833ee0d95e0bc91abb2e3eb6c6333fe407f2ccd",
          "message": "Rename rx to reactive (#205)\n\n* Rename rx to reactive\r\n\r\n* Delete .vscode\r\n\r\n* Ignore .vscode",
          "timestamp": "2021-08-09T23:16:20Z",
          "tree_id": "ceef4e0196b93cf5586ef498a1f8436baa4e6f03",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2833ee0d95e0bc91abb2e3eb6c6333fe407f2ccd"
        },
        "date": 1628551224254,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46700,
            "range": "± 1669",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 573079,
            "range": "± 10071",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16209,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28461,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1750,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 42292,
            "range": "± 1951",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03a82eacba90a333934bf204b7c2b635b03d3869",
          "message": "Fix link to contributing docs",
          "timestamp": "2021-08-09T16:27:57-07:00",
          "tree_id": "cfdb76e643a4a434dd0af34a15c47fbddbc7976e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/03a82eacba90a333934bf204b7c2b635b03d3869"
        },
        "date": 1628551922860,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48717,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 572460,
            "range": "± 2753",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16319,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28249,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1768,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 45311,
            "range": "± 324",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37baa2e477e7d9ca892093d449d4584930c65aa2",
          "message": "Implement Portals (#209)\n\n* Implement portal\r\n\r\n* Add tests for portals\r\n\r\n* Tweak website\r\n\r\n* Update trunk to v0.13.1",
          "timestamp": "2021-08-17T03:20:40Z",
          "tree_id": "371f3df0e4cdb6fd245970d88afbb1efad8136e8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/37baa2e477e7d9ca892093d449d4584930c65aa2"
        },
        "date": 1629170640731,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36249,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 422455,
            "range": "± 4780",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12073,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 20894,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1383,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 33502,
            "range": "± 68",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd13ed1eec20239843a98810e834a0ef68745d85",
          "message": "Remove internal Rc from DomNode (#210)\n\n* Change Rc<Node> to Node\r\n\r\n* Remove unused import\r\n\r\n* Remove unnecessary clone",
          "timestamp": "2021-08-18T10:12:46-07:00",
          "tree_id": "5fe7fdc7ab6bec096a2cbf2bfd5f9c91947f4b5f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bd13ed1eec20239843a98810e834a0ef68745d85"
        },
        "date": 1629307007657,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50234,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 559042,
            "range": "± 3593",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16182,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28025,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1726,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 43655,
            "range": "± 502",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe7f1850ce5805fbb06292d63306adc4a1b0e4fd",
          "message": "Optimize website with wasm-opt (#211)",
          "timestamp": "2021-08-18T13:28:59-07:00",
          "tree_id": "25ed9aaa5c48bf8e120401024f46331b67e352f3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fe7f1850ce5805fbb06292d63306adc4a1b0e4fd"
        },
        "date": 1629318808901,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51818,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 602742,
            "range": "± 33706",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17480,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32132,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2058,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 47644,
            "range": "± 4003",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c9e79d27835a6b3183bf1dbe018646998130b97f",
          "message": "Rename sitemap.xml to sitemap_index.xml",
          "timestamp": "2021-08-19T11:22:30-07:00",
          "tree_id": "714f075e38867db4bd4b404da031c2574767d0c9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c9e79d27835a6b3183bf1dbe018646998130b97f"
        },
        "date": 1629397604733,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49038,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 557984,
            "range": "± 7989",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16193,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28399,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1726,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 44407,
            "range": "± 486",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c1e6432fdf58c7429ce4a929d697014ec58873a0",
          "message": "Fix trunk copy-file sitemap",
          "timestamp": "2021-08-19T11:29:41-07:00",
          "tree_id": "8d4c2309747773cc4ec0b738c7df6386130f9528",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c1e6432fdf58c7429ce4a929d697014ec58873a0"
        },
        "date": 1629398064537,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49231,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 575460,
            "range": "± 19948",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16774,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28197,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1885,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 43939,
            "range": "± 1486",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9ed615721eea3416f822cd67e280cf1d54b9eb7",
          "message": "Update dependencies (#212)",
          "timestamp": "2021-08-19T11:50:02-07:00",
          "tree_id": "ede3e66c7e6f20f4d73be65f93bcb9ef6507cac4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f9ed615721eea3416f822cd67e280cf1d54b9eb7"
        },
        "date": 1629399379027,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41724,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 469835,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13756,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 24214,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1621,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 38300,
            "range": "± 46",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47828443081cd412532b87cf85c7ee21ea709839",
          "message": "Allow creating components with the `Component` trait (#213)\n\n* Add Component::__create_component\r\n\r\n* Higher order components\r\n\r\n* Create type alias\r\n\r\n* Import trait Component as an alias to prevent name shadowing",
          "timestamp": "2021-08-21T02:03:34Z",
          "tree_id": "d8299e04193a869fcf67cb37317aefceb7a31333",
          "url": "https://github.com/sycamore-rs/sycamore/commit/47828443081cd412532b87cf85c7ee21ea709839"
        },
        "date": 1629511688320,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48277,
            "range": "± 2867",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 565778,
            "range": "± 36356",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16101,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 26578,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1713,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41218,
            "range": "± 2032",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "685eb48fc3186f0327eb61b58013407674bb345e",
          "message": "Use more rust idioms in map_indexed and map_keyed (#215)\n\n* Replace start with iterator\r\n\r\n* Remove obvious debug check\r\n\r\n* Use .position",
          "timestamp": "2021-08-28T18:43:42-07:00",
          "tree_id": "6e6d0c44571135d3b00d132765cdbefcaf76734f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/685eb48fc3186f0327eb61b58013407674bb345e"
        },
        "date": 1630201651801,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41042,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 468312,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13658,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 23659,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1602,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 39399,
            "range": "± 49",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5e05f6d39116298efc0336bcdd4a48b184858b2",
          "message": "Optimize create_effect (#216)\n\n* Only call .borrow_mut() once\r\n\r\n* Change effect callback from dyn FnMut to dyn Fn to remove RefCell\r\n\r\n* Revert \"Change effect callback from dyn FnMut to dyn Fn to remove RefCell\"\r\n\r\nThis reverts commit 103dd17a3b3aae8d91e63795f7e886ae184e2563.",
          "timestamp": "2021-08-28T20:04:01-07:00",
          "tree_id": "4d3c514c1f912b94d378fb30de63d48f1157db92",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a5e05f6d39116298efc0336bcdd4a48b184858b2"
        },
        "date": 1630206474215,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43396,
            "range": "± 2580",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 473445,
            "range": "± 30720",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13819,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 24405,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1491,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 37664,
            "range": "± 1530",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "8516a2c8396a0bbb1beab50e0314c10dbb5f1463",
          "message": "Update robots.txt with new sitemap",
          "timestamp": "2021-08-29T12:23:18-07:00",
          "tree_id": "662346a132f22cf20fe2ee0b56d6f59e6ce05967",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8516a2c8396a0bbb1beab50e0314c10dbb5f1463"
        },
        "date": 1630265218291,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41183,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 464121,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13724,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 23943,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1591,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 38007,
            "range": "± 44",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d52bc9b2f1d8037ec8e58e3fdd18f8463930d15f",
          "message": "Fix SsrNode remove_child (#218)\n\n* Fix panic with reactive siblings\r\n\r\n* Fix SsrNode remove_child",
          "timestamp": "2021-08-29T14:24:08-07:00",
          "tree_id": "91ac5feec54cde7354f70c4792d9ea73e50f537c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d52bc9b2f1d8037ec8e58e3fdd18f8463930d15f"
        },
        "date": 1630272491601,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49262,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 548527,
            "range": "± 7630",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16325,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29560,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1739,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60883,
            "range": "± 920",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2d727508ffd6cf3a9718bae278c2912315475a5",
          "message": "Use push_str on &mut String directly (#219)\n\n* Use push_str on &mut String directly\r\n\r\n* Remove usage of format!\r\n\r\n* Reserve more",
          "timestamp": "2021-08-29T15:32:28-07:00",
          "tree_id": "f6a9469eadbfd1526d844a1f6225f0e841467c2e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a2d727508ffd6cf3a9718bae278c2912315475a5"
        },
        "date": 1630276595426,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42713,
            "range": "± 2744",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 511114,
            "range": "± 32328",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15051,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 25791,
            "range": "± 2098",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1323,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 55588,
            "range": "± 3247",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28341d67f5059aea147c1e1ead156784bbabbca3",
          "message": "Respect `base` html tag in router (#220)",
          "timestamp": "2021-09-04T14:33:44-07:00",
          "tree_id": "67401dc9527cef070186f15cdafbc506ae71965f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/28341d67f5059aea147c1e1ead156784bbabbca3"
        },
        "date": 1630791566135,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43216,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 467976,
            "range": "± 2152",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13759,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 23724,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1381,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 55683,
            "range": "± 1264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e13c5a583a6e0628d587ff2273e0134b0336778",
          "message": "Fix router base_pathname (#221)",
          "timestamp": "2021-09-04T19:13:55-07:00",
          "tree_id": "4d85c0dd593b4067fe53aec0a250fff7d58bbf28",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0e13c5a583a6e0628d587ff2273e0134b0336778"
        },
        "date": 1630808261689,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44193,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 466223,
            "range": "± 2142",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13672,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 24020,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1274,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 54840,
            "range": "± 40",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7ede69481852644db7735a469c875c63f9dbb8c",
          "message": "Router refactor (#222)\n\n* Fix router base_pathname\r\n\r\n* Remove Default bound from parsing traits\r\n\r\n* fmt Cargo.toml\r\n\r\n* Pass a StateHandle instead of Route\r\n\r\n* Remove preloads from website\r\n\r\n* Remove preloads\r\n\r\n* Remove unused dependencies\r\n\r\n* Fix UI tests\r\n\r\n* Update fixtures\r\n\r\n* Update routing docs\r\n\r\n* Update docs on router data fetching\r\n\r\n* Fix typo\r\n\r\n* Fix docs",
          "timestamp": "2021-09-06T12:19:01-07:00",
          "tree_id": "52987340df5c79b95be2ca78f6b439bb48cf110d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f7ede69481852644db7735a469c875c63f9dbb8c"
        },
        "date": 1630956212629,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51210,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 582286,
            "range": "± 38254",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17980,
            "range": "± 1267",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29825,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1663,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66942,
            "range": "± 2876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "3c17153c0bc0b05307a6b993783370fe08325709",
          "message": "ReactiveScopeWeak",
          "timestamp": "2021-09-06T12:53:46-07:00",
          "tree_id": "763b11c71d92469bf69f8997b48156338c3dac26",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3c17153c0bc0b05307a6b993783370fe08325709"
        },
        "date": 1630958271757,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49476,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 582273,
            "range": "± 11013",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22492,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37480,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1535,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66988,
            "range": "± 1903",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7ede69481852644db7735a469c875c63f9dbb8c",
          "message": "Router refactor (#222)\n\n* Fix router base_pathname\r\n\r\n* Remove Default bound from parsing traits\r\n\r\n* fmt Cargo.toml\r\n\r\n* Pass a StateHandle instead of Route\r\n\r\n* Remove preloads from website\r\n\r\n* Remove preloads\r\n\r\n* Remove unused dependencies\r\n\r\n* Fix UI tests\r\n\r\n* Update fixtures\r\n\r\n* Update routing docs\r\n\r\n* Update docs on router data fetching\r\n\r\n* Fix typo\r\n\r\n* Fix docs",
          "timestamp": "2021-09-06T12:19:01-07:00",
          "tree_id": "52987340df5c79b95be2ca78f6b439bb48cf110d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f7ede69481852644db7735a469c875c63f9dbb8c"
        },
        "date": 1630958431740,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40781,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 467521,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13739,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 23567,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1269,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 54096,
            "range": "± 51",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9346692f64a59d22bf69fa12442ef35b1c753459",
          "message": "ReactiveScope backlinks to parent (#223)\n\n* ReactiveScopeWeak\r\n\r\n* Walk up scope backlinks rather than current scopes stack",
          "timestamp": "2021-09-06T13:49:06-07:00",
          "tree_id": "78821d200f3344cbe40471d9917ea85ef994006f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9346692f64a59d22bf69fa12442ef35b1c753459"
        },
        "date": 1630961589857,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49843,
            "range": "± 2448",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 608756,
            "range": "± 4367",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23896,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40453,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1688,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69413,
            "range": "± 3170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1787f579998d3889663ab704c1ff79a43d958a1",
          "message": "Remove dependency on chrono (#224)",
          "timestamp": "2021-09-06T14:01:33-07:00",
          "tree_id": "7e5d3f9923dbe414ef0ca5855584fa06c2d36d09",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c1787f579998d3889663ab704c1ff79a43d958a1"
        },
        "date": 1630962344151,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42832,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 536593,
            "range": "± 32176",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20466,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34861,
            "range": "± 3341",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1491,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 61150,
            "range": "± 1976",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9f752713ffb5e845bf55fdc42a9867a9fd5bac2",
          "message": "Website dark mode (#225)\n\n* npm update\r\n\r\n* Dark mode\r\n\r\n* Dark mode toggle\r\n\r\n* Get dark mode from media query\r\n\r\n* Tweak dark mode styles\r\n\r\n* Minify TailwindCSS",
          "timestamp": "2021-09-07T04:26:23Z",
          "tree_id": "ae2cb2353c41b9bc3bf5aacac34d2ee2860c0d29",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e9f752713ffb5e845bf55fdc42a9867a9fd5bac2"
        },
        "date": 1630989022266,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46101,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 596921,
            "range": "± 7324",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23703,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38982,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1674,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68127,
            "range": "± 1024",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc640d313e66f9a6af422fae44f4f72fa86280cc",
          "message": "Use unwrap_throw instead of unwrap (#226)\n\n* Use unwrap_throw in dom_node.rs\r\n\r\n* Update .gitpod.yml\r\n\r\n* Transition colors on header\r\n\r\n* Use more unwrap_throws",
          "timestamp": "2021-09-07T20:32:25-07:00",
          "tree_id": "2a328817af23e0ff30c83564bf8ca4d94020bead",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fc640d313e66f9a6af422fae44f4f72fa86280cc"
        },
        "date": 1631072188051,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44249,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579936,
            "range": "± 14779",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22352,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36441,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1559,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65082,
            "range": "± 1959",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7f7081c54c6b2e2558f9a54fee19f18e8aede4ea",
          "message": "Update docs and README.md with more information",
          "timestamp": "2021-09-07T21:36:25-07:00",
          "tree_id": "f6d77ebeb01cd14d9176866b19c95e61df22c4f6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7f7081c54c6b2e2558f9a54fee19f18e8aede4ea"
        },
        "date": 1631076025882,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42744,
            "range": "± 1768",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 502564,
            "range": "± 27276",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20663,
            "range": "± 1314",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34763,
            "range": "± 1758",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1354,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59044,
            "range": "± 3360",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0215c3b46e7ee8e4b38d91918c27414ae8b948a",
          "message": "Add versioned sidebars (#227)",
          "timestamp": "2021-09-08T21:09:21-07:00",
          "tree_id": "0db0e482e07745e6aec00ae4266b451553c9c8bb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d0215c3b46e7ee8e4b38d91918c27414ae8b948a"
        },
        "date": 1631160839038,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46099,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 597557,
            "range": "± 4391",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24111,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40708,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1676,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70157,
            "range": "± 350",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d3d528a349b9538741c1b3c6b372f883a1c07c80",
          "message": "Add FAQ and update js_interop and components docs",
          "timestamp": "2021-09-08T21:49:28-07:00",
          "tree_id": "eed0a6b7d851d13f668b6717e13c9e5baa56d326",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d3d528a349b9538741c1b3c6b372f883a1c07c80"
        },
        "date": 1631163194228,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38491,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 508780,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20713,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34040,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1410,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59641,
            "range": "± 148",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7970847556aa315109ad7912289c18079fb1b479",
          "message": "Fix README.md link formatting",
          "timestamp": "2021-09-08T21:52:20-07:00",
          "tree_id": "c7cc10060c761c9501af209d9012d86f75aecb56",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7970847556aa315109ad7912289c18079fb1b479"
        },
        "date": 1631163366955,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38619,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 500044,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20088,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33407,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1421,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59603,
            "range": "± 137",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arctic_hen7@pm.me",
            "name": "arctic_hen7",
            "username": "arctic-hen7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a394a69ae81e8a54bf79d2b611ca5cc7fd6a2ee4",
          "message": "fix: 🐛 derived `Clone` for router types (#232)\n\nSpecifically `Segment`, `RoutePath`, and `Capture`.\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-09-10T20:38:48-07:00",
          "tree_id": "2fa661f8d664af3ba64efe1b2ec65fc13e2d782c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a394a69ae81e8a54bf79d2b611ca5cc7fd6a2ee4"
        },
        "date": 1631331751553,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38943,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 460987,
            "range": "± 17653",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19207,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30881,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1299,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 56746,
            "range": "± 2895",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4cc50dff98e1bffdcc2b313e3c88db353b6e725",
          "message": "Fix FIXME in TodoMVC example (#229)\n\n* Fix FIXME in TodoMVC example\r\n\r\n* Fix clippy",
          "timestamp": "2021-09-11T10:03:00-07:00",
          "tree_id": "16aecfe2c6be8ca5ac8e1d447297e3f52637f18d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b4cc50dff98e1bffdcc2b313e3c88db353b6e725"
        },
        "date": 1631380031904,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48263,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 593518,
            "range": "± 2506",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24238,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40882,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1729,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72077,
            "range": "± 130",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2c0e22bf668c97c3eb42ccbb57024e7b13c34e6",
          "message": "create_reducer (#233)\n\nAlternative to Signal::new, uses a reducer function to get next value",
          "timestamp": "2021-09-11T10:51:11-07:00",
          "tree_id": "3ca412721e9c7708e7942a6c41f4ea13878a5efb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c2c0e22bf668c97c3eb42ccbb57024e7b13c34e6"
        },
        "date": 1631382929014,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47895,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 595419,
            "range": "± 5452",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24729,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41173,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1687,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70328,
            "range": "± 183",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0123e55ec4e7ba7338b9cfe59efdbd202ae555d",
          "message": "Fix router parser not parsing identifiers (#234)\n\n* Fix router parser not parsing identifiers\r\n\r\n* Update trybuild",
          "timestamp": "2021-09-11T12:14:56-07:00",
          "tree_id": "4812b3f79772d38ff2dda225893391454e61875e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d0123e55ec4e7ba7338b9cfe59efdbd202ae555d"
        },
        "date": 1631387966322,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46418,
            "range": "± 1294",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 613199,
            "range": "± 22499",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23605,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41183,
            "range": "± 1173",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1697,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69562,
            "range": "± 2141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73f09e82527bad175d7cc8722d356fff74df2823",
          "message": "Build rustdoc in CI (#235)\n\n* Build rustdoc in CI\r\n\r\n* Fix context example title\r\n\r\n* Build rustdoc under api/ directory\r\n\r\n* Fix redirect\r\n\r\n* Add link for master rustdoc",
          "timestamp": "2021-09-11T13:26:18-07:00",
          "tree_id": "c7a49f31422327d748dcd0a2657b5fb2e8784b39",
          "url": "https://github.com/sycamore-rs/sycamore/commit/73f09e82527bad175d7cc8722d356fff74df2823"
        },
        "date": 1631392215241,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41049,
            "range": "± 2400",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 519768,
            "range": "± 28774",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20789,
            "range": "± 1227",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34829,
            "range": "± 1968",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1454,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60615,
            "range": "± 3274",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "327fc54c1fd3f24ec055a5c03e6f61168db93b7b",
          "message": "Wrap create_reducer dispatcher in Rc for ease of cloning",
          "timestamp": "2021-09-11T13:51:15-07:00",
          "tree_id": "98b95b1a643320c4dbe3b454305cd17d6e362ec8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/327fc54c1fd3f24ec055a5c03e6f61168db93b7b"
        },
        "date": 1631393690489,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34568,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 437879,
            "range": "± 4639",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17864,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29575,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1221,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 52382,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a6e82d5f05fe3eb8bcdca53a89ff94e46151a3e",
          "message": "Organize docs (#236)\n\n* Update docs\r\n\r\n* Fix missing period",
          "timestamp": "2021-09-11T19:00:44-07:00",
          "tree_id": "a97479d559408597a12ad3c9eea19016137cd2cd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2a6e82d5f05fe3eb8bcdca53a89ff94e46151a3e"
        },
        "date": 1631412273111,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34627,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 437590,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18245,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30563,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1391,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 51976,
            "range": "± 76",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e030ba4ce3f229df35b85e9188debba28b6a0085",
          "message": "Do not intercept anchors with `rel=\"external\"` (#238)\n\n* disable router with rel=\"external\"\r\n\r\n* Add docs",
          "timestamp": "2021-09-11T19:23:24-07:00",
          "tree_id": "3c5ba73c2c02deddabb749b879c14d078e52a34e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e030ba4ce3f229df35b85e9188debba28b6a0085"
        },
        "date": 1631413639711,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41778,
            "range": "± 1371",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 528067,
            "range": "± 18917",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21576,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35596,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1484,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62853,
            "range": "± 1711",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5075b3fbb1fab651a4e1270aef3296872e3b0a8d",
          "message": "Support boolean attributes (#239)\n\n* Codegen boolean attributes\r\n\r\n* Update set of boolean attributes\r\n\r\n* Fix FIXME in todomvc example",
          "timestamp": "2021-09-11T20:23:06-07:00",
          "tree_id": "476137de32cd92645682ed4f9355d88b48df764e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5075b3fbb1fab651a4e1270aef3296872e3b0a8d"
        },
        "date": 1631417229002,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40541,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 496592,
            "range": "± 2617",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20605,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33746,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1578,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64049,
            "range": "± 193",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "eaa0227c668fb3efa049e61c2f163102a94f9062",
          "message": "v0.6.0",
          "timestamp": "2021-09-12T11:43:33-07:00",
          "tree_id": "53fb110335662b3991c05928750d68bdfcb6d758",
          "url": "https://github.com/sycamore-rs/sycamore/commit/eaa0227c668fb3efa049e61c2f163102a94f9062"
        },
        "date": 1631472458083,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35690,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 464628,
            "range": "± 24031",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18117,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35834,
            "range": "± 4545",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1387,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62813,
            "range": "± 6801",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "9cefabe99d0fee90dfa3e67a171e95828c07095c",
          "message": "Add link to v0.6.0 release post in CHANGELOG.md",
          "timestamp": "2021-09-12T11:47:34-07:00",
          "tree_id": "5d5dcf03916c1d3c453ce5529d14b6798ba85ca3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9cefabe99d0fee90dfa3e67a171e95828c07095c"
        },
        "date": 1631472682127,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44020,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 502720,
            "range": "± 2616",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20074,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33531,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1414,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 56243,
            "range": "± 135",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a46e1543bd0af5158890486278276a0580dfca2a",
          "message": "Update docs version numbers",
          "timestamp": "2021-09-12T11:52:20-07:00",
          "tree_id": "0d5c9b2f1bbfc65e801280fb4bfc623f58a7a507",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a46e1543bd0af5158890486278276a0580dfca2a"
        },
        "date": 1631472969314,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36689,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 444756,
            "range": "± 2344",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17810,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29880,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1221,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 49392,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "f464243851770a573556fb618d4695f58160dbf9",
          "message": "Fix CHANGELOG.md typo",
          "timestamp": "2021-09-12T11:53:25-07:00",
          "tree_id": "19694cdf6c31d4f966a046edea260047d86d82e3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f464243851770a573556fb618d4695f58160dbf9"
        },
        "date": 1631473149218,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45725,
            "range": "± 6143",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 612072,
            "range": "± 30234",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23769,
            "range": "± 1437",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40278,
            "range": "± 3860",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1674,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69492,
            "range": "± 4707",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fbe91efc4837c03a2a3c1424cd06e6543a33203",
          "message": "Remove repeated information from README.md",
          "timestamp": "2021-09-12T17:32:04-07:00",
          "tree_id": "85eafa12c227608ce8a37a7c2972771d2f5d253b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5fbe91efc4837c03a2a3c1424cd06e6543a33203"
        },
        "date": 1631493348987,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41844,
            "range": "± 5216",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 496070,
            "range": "± 2497",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20057,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 33647,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1391,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60108,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5b09f45d1af991cb2a189fb306e549833bd4b81",
          "message": "Fix news posts ordering",
          "timestamp": "2021-09-12T17:38:58-07:00",
          "tree_id": "2c616ea485835e4029fca56fc7c670894af83734",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b5b09f45d1af991cb2a189fb306e549833bd4b81"
        },
        "date": 1631493786090,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47980,
            "range": "± 1014",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 570261,
            "range": "± 11847",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23261,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39482,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1621,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68009,
            "range": "± 1377",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "809a2a7741dd73ddb25a9cd91158c20d8fd0e3b1",
          "message": "Fix .gitpod.yml init task",
          "timestamp": "2021-09-14T04:12:26Z",
          "tree_id": "baa42fb63f01689ac68a9fcbe63d956cd0b0e689",
          "url": "https://github.com/sycamore-rs/sycamore/commit/809a2a7741dd73ddb25a9cd91158c20d8fd0e3b1"
        },
        "date": 1631593003496,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48813,
            "range": "± 1189",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 604745,
            "range": "± 7438",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23483,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39887,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1673,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 71063,
            "range": "± 1099",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63095ed5a16dba85b092f3979850b0251cc50f02",
          "message": "Only initialize console_log in debug mode for website (#242)",
          "timestamp": "2021-09-13T21:26:42-07:00",
          "tree_id": "bea9627c5ec913c05fdab7513090ac9756b75be9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/63095ed5a16dba85b092f3979850b0251cc50f02"
        },
        "date": 1631593844606,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36200,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 476331,
            "range": "± 34117",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19797,
            "range": "± 1495",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 32458,
            "range": "± 1858",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1391,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 56530,
            "range": "± 4129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac2c55b1e52fba492b7e7c06e489fdec558e0bfd",
          "message": "Disable `full` feature on `syn` (#245)\n\n* cargo upgrade\r\n\r\n* Remove full feature from syn",
          "timestamp": "2021-09-16T08:59:31-07:00",
          "tree_id": "c66bdf471a091381845c7b97729376c684b97422",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ac2c55b1e52fba492b7e7c06e489fdec558e0bfd"
        },
        "date": 1631808241793,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45590,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 579318,
            "range": "± 9544",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23646,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38938,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1591,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68330,
            "range": "± 1153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720662e84ea24700846c5ea1bed8f1820bfd847c",
          "message": "Use a global HashSet for void elements lookup in SSR (#246)",
          "timestamp": "2021-09-16T09:34:30-07:00",
          "tree_id": "0fddd3ca1e447aa7911186e2d3a2e3fbcbe8eccf",
          "url": "https://github.com/sycamore-rs/sycamore/commit/720662e84ea24700846c5ea1bed8f1820bfd847c"
        },
        "date": 1631810321651,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49747,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 623014,
            "range": "± 4496",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25625,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 42059,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1775,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68442,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "redian@users.noreply.github.com",
            "name": "Redian Ibra",
            "username": "redian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f59b7fb5ac09b079eb0b0817094af5d2c5f1cd9e",
          "message": "Update docs to use boolean for disabled attribute on button (#248)\n\n* Update docs to use boolean for disabled attribute on button\r\n\r\n* Do not modify docs for v0.5\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-09-18T11:51:52-07:00",
          "tree_id": "5b313973ca83a978951cda424715d1a5b099e382",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f59b7fb5ac09b079eb0b0817094af5d2c5f1cd9e"
        },
        "date": 1631991364264,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48351,
            "range": "± 1308",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 602609,
            "range": "± 18940",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24430,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41193,
            "range": "± 3355",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1857,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72998,
            "range": "± 7343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8328101389c9518a58cce75ea245e5a0ee27b0b7",
          "message": "Remove formatting machinery (#247)\n\n* Remove usages of unwrap() from sycamore-router\r\n\r\n* Remove expect from packages/sycamore\r\n\r\n* Remove formatting from sycamore-reactive\r\n\r\n* Use lexical for i32\r\n\r\n* Format numbers with lexical\r\n\r\n* Specialize IntoTemplate for different strings and string slices\r\n\r\n* Implement IntoTemplate for &Template",
          "timestamp": "2021-09-18T12:59:22-07:00",
          "tree_id": "e5e7d5f6d32a2fdb7049639fbc90a1e907e8595a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8328101389c9518a58cce75ea245e5a0ee27b0b7"
        },
        "date": 1631995387376,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39520,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 566754,
            "range": "± 2461",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25158,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39969,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1418,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59607,
            "range": "± 218",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b8ec8d41952b5286c0e5f95536e732a8fb2611a",
          "message": "Properly handle dynamic nodes in a fragment (#251)",
          "timestamp": "2021-09-18T20:19:29Z",
          "tree_id": "326b74083ade7ad6c41a53b19163a2747f2d9538",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0b8ec8d41952b5286c0e5f95536e732a8fb2611a"
        },
        "date": 1631996614936,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42708,
            "range": "± 4257",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 562632,
            "range": "± 32106",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23299,
            "range": "± 1214",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 36856,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1406,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58760,
            "range": "± 3605",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82ef5f025e5ac65245fd246e83e8f5dc8534f114",
          "message": "Remove trailing ``` characters in README.md\n\nDon't know why it's there in the first place 😆",
          "timestamp": "2021-09-18T17:24:13-07:00",
          "tree_id": "74b5fc26bd9111151c3187d35916b2920d9fec47",
          "url": "https://github.com/sycamore-rs/sycamore/commit/82ef5f025e5ac65245fd246e83e8f5dc8534f114"
        },
        "date": 1632011284160,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43823,
            "range": "± 3261",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 537614,
            "range": "± 30678",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23525,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39066,
            "range": "± 3027",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1485,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 56208,
            "range": "± 4195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arctic_hen7@pm.me",
            "name": "arctic_hen7",
            "username": "arctic-hen7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6846726edcfad8cc42bcac539082a7f5a608d570",
          "message": "Added docs on topological dependency tracking (#253)\n\n* docs: 📝 added docs on topological dependency tracking\r\n\r\n* Update docs/versioned_docs/v0.6/basics/reactivity.md\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-09-19T09:24:41-07:00",
          "tree_id": "1eb3d8a315f063b8895ef87d0ee6e20eea938858",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6846726edcfad8cc42bcac539082a7f5a608d570"
        },
        "date": 1632069044135,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39217,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 568859,
            "range": "± 3125",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24683,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39459,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1461,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60168,
            "range": "± 113",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c0e279a45aeb5eeb85301ee2a30459500343093",
          "message": "Add reactivity common pitfalls section from v0.6 to next",
          "timestamp": "2021-09-19T15:02:31-07:00",
          "tree_id": "1bca7a19dd649737ac05e7ec09440cfd40a1197a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4c0e279a45aeb5eeb85301ee2a30459500343093"
        },
        "date": 1632089199795,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45494,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 667122,
            "range": "± 16068",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 29135,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 44751,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1690,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69362,
            "range": "± 1156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3416e295e1391463e80897878358adbf9b735cc5",
          "message": "Add Perseus and other alternatives to README.md\n\nhttps://github.com/yewstack/yew/pull/2066",
          "timestamp": "2021-09-19T20:13:43-07:00",
          "tree_id": "f551dbfd8b09021eb29cf2812d26f141d3f5f1db",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3416e295e1391463e80897878358adbf9b735cc5"
        },
        "date": 1632107879801,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46916,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 676046,
            "range": "± 2745",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 29230,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 46475,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1752,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70519,
            "range": "± 124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "54370171+jquesada2016@users.noreply.github.com",
            "name": "jquesada2016",
            "username": "jquesada2016"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88006b98e38ae48ac9a0fb0492a5f71a9a3f5da6",
          "message": "impl Default for Signal (#257)",
          "timestamp": "2021-09-22T12:57:14-07:00",
          "tree_id": "52ddf189c17af3b5dab71d70ebedb0f1ad2f72a8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/88006b98e38ae48ac9a0fb0492a5f71a9a3f5da6"
        },
        "date": 1632340878335,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45755,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 694017,
            "range": "± 2778",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 30023,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47731,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1749,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70291,
            "range": "± 121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "54370171+jquesada2016@users.noreply.github.com",
            "name": "jquesada2016",
            "username": "jquesada2016"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae0b06b1beb3af953f39c1abe886f17eb46f9d4c",
          "message": "impl Default for StateHandle<T: Default> (#260)\n\n* impl Default for Signal\r\n\r\n* removed static requirement for Signal and impl Default for StateHandle<T: Default>",
          "timestamp": "2021-09-23T10:25:39-07:00",
          "tree_id": "637e147259663c53d879579565676a35626f029b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ae0b06b1beb3af953f39c1abe886f17eb46f9d4c"
        },
        "date": 1632418192990,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44854,
            "range": "± 793",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 681132,
            "range": "± 13052",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 29832,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 46632,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1742,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70513,
            "range": "± 938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c424ad5867b98f0d7c168fdd1e4adc0e1b64993c",
          "message": "v0.6.1",
          "timestamp": "2021-09-25T12:04:33-07:00",
          "tree_id": "8b8b5e0ea721bf52e40039816515141cfa885735",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c424ad5867b98f0d7c168fdd1e4adc0e1b64993c"
        },
        "date": 1632596934481,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47685,
            "range": "± 2907",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 680332,
            "range": "± 22355",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 28412,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 45169,
            "range": "± 1564",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1755,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70527,
            "range": "± 6633",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "54370171+jquesada2016@users.noreply.github.com",
            "name": "jquesada2016",
            "username": "jquesada2016"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca21aba027af442114549dd98002ac7f07221281",
          "message": "Add `GenericNode::remove_property` method (#267)\n\nThis is useful to have, especially for some serializers which require certain properties to not exist, not just be `undefined`.",
          "timestamp": "2021-09-26T17:10:24-07:00",
          "tree_id": "64f58e006269cfd0acf55b714e40afeb5c649c5d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ca21aba027af442114549dd98002ac7f07221281"
        },
        "date": 1632701631711,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35112,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 499620,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21725,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34093,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1284,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 52003,
            "range": "± 122",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "54370171+jquesada2016@users.noreply.github.com",
            "name": "jquesada2016",
            "username": "jquesada2016"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99a3ff0fc4d6499276748277f87e1ddadd5b067f",
          "message": "Added node! convenience macro (#265)\n\n* added node! convenience macro\r\n\r\n* Apply suggested changes\r\n\r\nCo-authored-by: Luke Chu <lukewchu@outlook.com>",
          "timestamp": "2021-09-30T15:32:54-07:00",
          "tree_id": "8b019eed478f3e4c36f0d2da6ca61a0b5b32b088",
          "url": "https://github.com/sycamore-rs/sycamore/commit/99a3ff0fc4d6499276748277f87e1ddadd5b067f"
        },
        "date": 1633041400515,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39153,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 566980,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24449,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38747,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1463,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59685,
            "range": "± 132",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "adb68daa35c4a0c886170245ccc130537ac3ba98",
          "message": "If only 1 child, directly set innerText",
          "timestamp": "2021-10-04T22:44:06-07:00",
          "tree_id": "a70d594a4283eca37749415e8d3c0dc4605c58c2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/adb68daa35c4a0c886170245ccc130537ac3ba98"
        },
        "date": 1633412866571,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40086,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 584770,
            "range": "± 3607",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24630,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38812,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1355,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58768,
            "range": "± 1763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d94f0a4466418fccb4c3584ebc2c00a9a4cbed4",
          "message": "Fix Perseus link README.md",
          "timestamp": "2021-10-05T21:23:24-07:00",
          "tree_id": "16e9844a79ab88705571af88bca57874487697a1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0d94f0a4466418fccb4c3584ebc2c00a9a4cbed4"
        },
        "date": 1633494433244,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38807,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 562457,
            "range": "± 2707",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24227,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38427,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1355,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58887,
            "range": "± 85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "268d0084eedae44f0120fd45a4aac74fd29b92ed",
          "message": "Update trunk to v0.14.0 in .gitpod.Dockerfile",
          "timestamp": "2021-10-07T22:37:08-07:00",
          "tree_id": "5f51ec2b79d0827e8012f802a5c08be274b6fff2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/268d0084eedae44f0120fd45a4aac74fd29b92ed"
        },
        "date": 1633671644970,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38590,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 569070,
            "range": "± 2984",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24285,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39903,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1363,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58447,
            "range": "± 141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a22d4b50fbbd3a1b62db25ca80424a0ac5ff4b31",
          "message": "Update prebuild tasks",
          "timestamp": "2021-10-07T22:44:37-07:00",
          "tree_id": "25011e52bbb880359aaf008693aae179b4d75276",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a22d4b50fbbd3a1b62db25ca80424a0ac5ff4b31"
        },
        "date": 1633672099791,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38671,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 567392,
            "range": "± 2840",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24893,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38246,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1338,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60158,
            "range": "± 94",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ba05c13560f9c853f7c24e1629b2545b50b95706",
          "message": "Sort sitemap.xml entries in order by file name",
          "timestamp": "2021-10-08T05:55:40Z",
          "tree_id": "54ecec326c77a6efbcf33386ad24ad3466b11787",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ba05c13560f9c853f7c24e1629b2545b50b95706"
        },
        "date": 1633672760406,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39183,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 570072,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24343,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38268,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1346,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59394,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7fe7ddb70841e5fc72ab46ac40f5b0bd80fd9954",
          "message": "Fix .gitpod.yml syntax error",
          "timestamp": "2021-10-08T05:56:43Z",
          "tree_id": "0f7fce5fbb4dd13eb3a27b730fb7977a38880a2a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7fe7ddb70841e5fc72ab46ac40f5b0bd80fd9954"
        },
        "date": 1633673015153,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46420,
            "range": "± 2204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 691422,
            "range": "± 27589",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 28581,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 44873,
            "range": "± 6041",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1634,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74928,
            "range": "± 6219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b0f0b1cd84206e3097eaff96eb1229528bea528",
          "message": "Do not strip leading `/` from pathname (#271)\n\n* Remove prefix strip\r\n\r\n* Remove prefix strip for navigate function\r\n\r\n* Rename variable\r\n\r\n* Do not strip initial `/` from path\r\n\r\n* Appease clippy\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\nCo-authored-by: Luke Chu <lukewchu@outlook.com>",
          "timestamp": "2021-10-09T04:04:37Z",
          "tree_id": "96f8c5467fade4913a88ad9fdda95c7ce41132db",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2b0f0b1cd84206e3097eaff96eb1229528bea528"
        },
        "date": 1633752532889,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45794,
            "range": "± 2075",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 668440,
            "range": "± 32157",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 27585,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41750,
            "range": "± 2261",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1549,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69650,
            "range": "± 3327",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7487a221a1157e22b7737736f869359d044dd118",
          "message": "Remove period after SolidJS slogan in",
          "timestamp": "2021-10-09T12:37:40-07:00",
          "tree_id": "2fe268c407fc1a4238af70cafbae4de40f09725f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7487a221a1157e22b7737736f869359d044dd118"
        },
        "date": 1633808477401,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38766,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 566267,
            "range": "± 2977",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24302,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38350,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1491,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64149,
            "range": "± 152",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55689a1d976d4817f5f09bd2f29b5f442f345e16",
          "message": "Remove period after SolidJS slogan in \"Alternatives\" section\n\nConsistency",
          "timestamp": "2021-10-09T12:37:57-07:00",
          "tree_id": "2fe268c407fc1a4238af70cafbae4de40f09725f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/55689a1d976d4817f5f09bd2f29b5f442f345e16"
        },
        "date": 1633808493211,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38609,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 565103,
            "range": "± 3222",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24716,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38588,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1383,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59569,
            "range": "± 88",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57e33cfe7cf4012259c2d7b13e1297933d70cc01",
          "message": "Remove ToTokens impl for TagName (#273)",
          "timestamp": "2021-10-09T13:07:44-07:00",
          "tree_id": "ec2a7024e5e4d2ecd5c4b8d04eacc49bafd3e630",
          "url": "https://github.com/sycamore-rs/sycamore/commit/57e33cfe7cf4012259c2d7b13e1297933d70cc01"
        },
        "date": 1633810287155,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38572,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571158,
            "range": "± 2972",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25442,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39815,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1351,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59792,
            "range": "± 123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ab60c8bd455e68cbcb5d22ceeea01ad65f42acac",
          "message": "v0.6.2",
          "timestamp": "2021-10-09T13:46:02-07:00",
          "tree_id": "ea525a818b8cd07d21419071e3c975a2dc85362f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ab60c8bd455e68cbcb5d22ceeea01ad65f42acac"
        },
        "date": 1633812604742,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45741,
            "range": "± 2198",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 645942,
            "range": "± 23397",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 28602,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 43577,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1507,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 67837,
            "range": "± 2578",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19a685d5a665ec9fa7fd881310b7cae9816c694c",
          "message": "Fix router not respecting basename when navigating (#275)",
          "timestamp": "2021-10-10T09:29:30-07:00",
          "tree_id": "4be10a8aa9c8fe0f70c213242051140506d50f3c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/19a685d5a665ec9fa7fd881310b7cae9816c694c"
        },
        "date": 1633883615852,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50208,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 702329,
            "range": "± 11405",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 31135,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 48908,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1701,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74599,
            "range": "± 181",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a6baf3d94c84ca3aacc57a5bf95c97dfd9be1f1d",
          "message": "v0.6.3",
          "timestamp": "2021-10-10T09:35:16-07:00",
          "tree_id": "b54ebac2fe47853d8257462ec1466f20a83d3575",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a6baf3d94c84ca3aacc57a5bf95c97dfd9be1f1d"
        },
        "date": 1633883944792,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38931,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 561657,
            "range": "± 5009",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24027,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38393,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1349,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59535,
            "range": "± 174",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "z@zoey.dev",
            "name": "Zoey",
            "username": "Zoeycode"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21509aa6c8944cd0ddb113708c6eeb9cb1bd2907",
          "message": "Prevent binding from panicking when not in wasm (#278)\n\n* Prevent binding from panicking when not in wasm\r\n\r\n* Fix cfg attributes",
          "timestamp": "2021-10-14T20:26:11-07:00",
          "tree_id": "e83f7d002b130781e3a5539c0b92f4996a48d665",
          "url": "https://github.com/sycamore-rs/sycamore/commit/21509aa6c8944cd0ddb113708c6eeb9cb1bd2907"
        },
        "date": 1634268596363,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39496,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 565283,
            "range": "± 3250",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24709,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38679,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1427,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60160,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c8eb9c5b3e7e88a257a5f9ee8286e72d54dedad",
          "message": "Extend `ReactiveScope` into scopes that are siblings (#280)\n\n* Add ReactiveScope::extend\r\n\r\n* spawn_local_in_scope\r\n\r\n* Update documentation\r\n\r\n* Fix doc test\r\n\r\n* Run more tests in Miri\r\n\r\n* Do not test router in miri\r\n\r\n* Fix doc test again",
          "timestamp": "2021-10-14T21:28:50-07:00",
          "tree_id": "6791e7aaf51530956f37fcdf276ebd9768112356",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2c8eb9c5b3e7e88a257a5f9ee8286e72d54dedad"
        },
        "date": 1634272339997,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38261,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 570033,
            "range": "± 6762",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24849,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38543,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1406,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59490,
            "range": "± 93",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a05eb60c125db059f7e70beb939529fadb33be12",
          "message": "Implement `TryFromSegments` for `impl Route` for nested routes (#281)",
          "timestamp": "2021-10-14T22:26:15-07:00",
          "tree_id": "5510a9fa3bdd5911f3c3535338c7e1447406df16",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a05eb60c125db059f7e70beb939529fadb33be12"
        },
        "date": 1634275797265,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38742,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 577691,
            "range": "± 2655",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25945,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39085,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1383,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59442,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49726028+karx1@users.noreply.github.com",
            "name": "Yash Karandikar",
            "username": "karx1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a3d39f422fb48828a9f48bd542f7cce7c0a9dad",
          "message": "Add a solution for CSS in the docs (#286)",
          "timestamp": "2021-10-17T23:35:45Z",
          "tree_id": "8914f474ead79437cfec333b6eed5be5e2567106",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0a3d39f422fb48828a9f48bd542f7cce7c0a9dad"
        },
        "date": 1634513959753,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39512,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 573420,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25065,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38953,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1393,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58916,
            "range": "± 71",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emi2k01@gmail.com",
            "name": "Emilio González",
            "username": "emi2k01"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e764fb2b08760d0aceea558cf53980a9e4adc3f",
          "message": "Allow skipping parenthesis in `cloned!` macro (#283)",
          "timestamp": "2021-10-19T16:06:14Z",
          "tree_id": "e03c816df60f1f0d0821489540615cc2949055d0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9e764fb2b08760d0aceea558cf53980a9e4adc3f"
        },
        "date": 1634659791710,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39229,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 578902,
            "range": "± 7374",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25104,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38951,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1390,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59171,
            "range": "± 144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "colin@colinyates.co.uk",
            "name": "Colin Yates",
            "username": "yatesco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59ed9743be33c328e084a937c645bfdad1c1124a",
          "message": "Update typo in README.md (#287)",
          "timestamp": "2021-10-24T02:11:14Z",
          "tree_id": "181c4a31c699444fbadc9ccffa724c567e399b0e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/59ed9743be33c328e084a937c645bfdad1c1124a"
        },
        "date": 1635041695150,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39400,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 551826,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24198,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38613,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1364,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58235,
            "range": "± 108",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82add180a7a72e4c832bb907215f473163255789",
          "message": "Fix `Lerp` implementation for integers (#289)",
          "timestamp": "2021-10-25T05:01:00Z",
          "tree_id": "8b36f2882640cd398c35a21939be3d5c7453eb13",
          "url": "https://github.com/sycamore-rs/sycamore/commit/82add180a7a72e4c832bb907215f473163255789"
        },
        "date": 1635138286705,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39596,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 556824,
            "range": "± 2333",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24437,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38363,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1366,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58459,
            "range": "± 35558",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "54370171+jquesada2016@users.noreply.github.com",
            "name": "jquesada2016",
            "username": "jquesada2016"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "924ed0c028348ffe35a8ff5e97f6c9f387d63f18",
          "message": "Builder API (#269)\n\n* added node! convenience macro\r\n\r\n* added add_class and remove_class to\r\n\r\n* changed name from value to class\r\n\r\n* initial implementation of render-agnostic builder API\r\n\r\n* converted from self to &self\r\n\r\n* implemented add_dyn_child and add_dyn_only_child\r\n\r\n* added add_dyn_text\r\n\r\n* added all currently supported HTML tags\r\n\r\n* fixed type error when compiling with ssr\r\n\r\n* added top level component fn and ability to add child components\r\n\r\n* renamed all functions to be more declarative and concise\r\n\r\n* renamed add_dyn_class to dyn_class\r\n\r\n* added bool_attr and dyn_bool_attr\r\n\r\n* added fragment fn\r\n\r\n* fixed clippy warnings\r\n\r\n* fixed use of unstable feature, intersperse_with, and removed unneeded mut\r\n\r\n* gated builder mod behind feature flag\r\n\r\n* fully documented current iteration of the Builder API\r\n\r\n* Apply suggested changes\r\n\r\n* added #[allow(dead_code)] to unimplemented functions\r\n\r\n* Update packages/sycamore/src/generic_node/ssr_node.rs\r\n\r\n* Update packages/sycamore/src/builder/agnostic/mod.rs\r\n\r\n* Apply suggestions from review\r\n\r\n* Fix clippy\r\n\r\n* Add an example for builder API hello world\r\n\r\nCo-authored-by: Luke Chu <lukewchu@outlook.com>\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-11-04T21:05:21-07:00",
          "tree_id": "876036d9d0d6de012ea42a1aa146e21b663c1a63",
          "url": "https://github.com/sycamore-rs/sycamore/commit/924ed0c028348ffe35a8ff5e97f6c9f387d63f18"
        },
        "date": 1636085334212,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39873,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 573044,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24412,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38139,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1411,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59454,
            "range": "± 108",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1a775bf6def9d65a51de4c93e3de79e05dc83b7",
          "message": "Fix contexts in Keyed and Indexed (#293)",
          "timestamp": "2021-11-04T21:57:34-07:00",
          "tree_id": "08aae04c3348dd793d7b3c750aa178608fe05469",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d1a775bf6def9d65a51de4c93e3de79e05dc83b7"
        },
        "date": 1636088467189,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40943,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 563887,
            "range": "± 2993",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25391,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39579,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1407,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58584,
            "range": "± 159",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f23012751f95de5aee3e728be019e32e3e24af1f",
          "message": "Collect code coverage in CI (#294)\n\n* Add code coverage\r\n\r\n* Add some tests for context not found for type\r\n\r\n* Add some tests for ssr\r\n\r\n* Add some tests for NodeRef\r\n\r\n* Add tests for easing functions",
          "timestamp": "2021-11-04T23:09:19-07:00",
          "tree_id": "e7a15a4b7911b9b0290ee900824b6ed48ef53ad1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f23012751f95de5aee3e728be019e32e3e24af1f"
        },
        "date": 1636092777650,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40932,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 556758,
            "range": "± 5717",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25735,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39316,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1404,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59189,
            "range": "± 118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryanhaywoodj@gmail.com",
            "name": "Ryan Haywood",
            "username": "haywoood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4c246992be48405295ca247dd7cd2bc9b3f24cf",
          "message": "Update TodoMVC example to use Context API (#295)\n\nDoes what it says on the tin.\r\n\r\nCloses https://github.com/sycamore-rs/sycamore/issues/279",
          "timestamp": "2021-11-06T11:24:48-07:00",
          "tree_id": "ae30e717fd755e793591ba97634f6582db1ec5df",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d4c246992be48405295ca247dd7cd2bc9b3f24cf"
        },
        "date": 1636223304590,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41472,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 557674,
            "range": "± 2931",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25121,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39946,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1516,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60448,
            "range": "± 133",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "f7e2b24cc5b3d3c144ae345aa7e9ae5d578c4ca0",
          "message": "Add navigate_replace function",
          "timestamp": "2021-11-06T11:34:36-07:00",
          "tree_id": "afe64ff0b5752c48c22b8423bf35fba47f634408",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f7e2b24cc5b3d3c144ae345aa7e9ae5d578c4ca0"
        },
        "date": 1636223906351,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41690,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 555035,
            "range": "± 4573",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25200,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39406,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1434,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58612,
            "range": "± 96",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "59765a1d6312cc0e3910774193fd9b31fb1651a7",
          "message": "cargo fmt",
          "timestamp": "2021-11-06T11:35:32-07:00",
          "tree_id": "f3a52dbd25403ae42dc1e3fb5776a6035570c553",
          "url": "https://github.com/sycamore-rs/sycamore/commit/59765a1d6312cc0e3910774193fd9b31fb1651a7"
        },
        "date": 1636223965970,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49702,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 676002,
            "range": "± 3543",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 30614,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47031,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1669,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69294,
            "range": "± 219",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "865bea0a0f55b2882fa42b7b5403ad2c5c51b8f9",
          "message": "Add `IS_BROWSER` constant to `GenericNode` (#274)\n\n* Add a IS_BROWSER consant to GenericNode\r\n\r\n* Add `Html` trait\r\n\r\n* Fix conditional compilation\r\n\r\n* Fix ui tests\r\n\r\n* Move IS_BROWSER constant to Html trait\r\n\r\n* Fix doctests",
          "timestamp": "2021-11-06T12:15:52-07:00",
          "tree_id": "a470f9f0edd04292a8228034e88dec862be5a741",
          "url": "https://github.com/sycamore-rs/sycamore/commit/865bea0a0f55b2882fa42b7b5403ad2c5c51b8f9"
        },
        "date": 1636226364775,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41607,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 555089,
            "range": "± 2330",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25182,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39637,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1406,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58821,
            "range": "± 101",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c890039af9ffb3f3d12c4cc4c597919820fe8b93",
          "message": "Fix typo",
          "timestamp": "2021-11-06T12:22:08-07:00",
          "tree_id": "2c1adba066f396c34ea20a374772421c49d3846d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c890039af9ffb3f3d12c4cc4c597919820fe8b93"
        },
        "date": 1636226775401,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41535,
            "range": "± 2760",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 545446,
            "range": "± 30659",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24971,
            "range": "± 1595",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37869,
            "range": "± 2034",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1378,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60069,
            "range": "± 4119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe60fe046324ebac7052e97eab1bcaf79a578e42",
          "message": "Make `wasm-bindgen-interning` a feature (#296)\n\n* Add module docs for futures\r\n\r\n* Make wasm-bindgen-interning a feature flag",
          "timestamp": "2021-11-06T12:44:03-07:00",
          "tree_id": "e72823195dfaeab628c8e84cfd4c1f6560526f40",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fe60fe046324ebac7052e97eab1bcaf79a578e42"
        },
        "date": 1636228099669,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44808,
            "range": "± 2483",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 609746,
            "range": "± 30921",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26553,
            "range": "± 1145",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41382,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1555,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64480,
            "range": "± 3518",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d17e776a2e3f2d44ae99783ac70c67b5736c87d2",
          "message": "Do not run CI tests on macos and windows\n\nWe can safely assume that chrome and firefox will behave the same regardless of the underlying os. Running the test suite on 3 different OSs is a waste of resources (wastes energy, CI resources and makes the CI queue longer)",
          "timestamp": "2021-11-06T12:46:45-07:00",
          "tree_id": "83edba7e4d49701b497b9b17ee3342165a7ff079",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d17e776a2e3f2d44ae99783ac70c67b5736c87d2"
        },
        "date": 1636228221243,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41877,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 554594,
            "range": "± 3633",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25292,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34721,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1401,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 52378,
            "range": "± 163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f444a5faab212574a18b46d8333d44754b5f2f62",
          "message": "Make `GenericNode` generic over the event type (#297)\n\n* Make GenericNode generic over the event type\r\n\r\n* Fix doctests",
          "timestamp": "2021-11-06T13:04:46-07:00",
          "tree_id": "17ff60c81f3b2e213d1e9ee18ccb6929f7b6e881",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f444a5faab212574a18b46d8333d44754b5f2f62"
        },
        "date": 1636229298153,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41961,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 554708,
            "range": "± 3050",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26511,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40019,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1424,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58833,
            "range": "± 167",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ecf86a9bb420824172e10fd23e6116cdc346e47",
          "message": "Rename `Template` to `View` (#298)\n\n* Rename `Template` to `View`\r\n\r\n* Rename template! to view!\r\n\r\n* Update docs\r\n\r\n* Update docs once more\r\n\r\n* Update tests\r\n\r\n* Fix sycamore-macro doctest\r\n\r\n* Fix trybuild ui tests",
          "timestamp": "2021-11-06T15:08:37-07:00",
          "tree_id": "9a9c224845879e467b8e158171479abb2516ae74",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3ecf86a9bb420824172e10fd23e6116cdc346e47"
        },
        "date": 1636236734396,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42051,
            "range": "± 6210",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 551119,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25439,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39375,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1421,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58714,
            "range": "± 117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "628d6f0076c1f45a417d21da3f80007c4ba79437",
          "message": "Fix typo in link to quick start template",
          "timestamp": "2021-11-11T21:17:09-08:00",
          "tree_id": "f2d6945388cb06255ac50bfc04ca4bd885e05688",
          "url": "https://github.com/sycamore-rs/sycamore/commit/628d6f0076c1f45a417d21da3f80007c4ba79437"
        },
        "date": 1636694464454,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48799,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 678877,
            "range": "± 3110",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 30111,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47183,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1612,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69708,
            "range": "± 240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6dd47f4f5679efdb603cc82e5bd82e6a9f57720c",
          "message": "Update docs/build.rs to sort by file name when walking dir",
          "timestamp": "2021-11-13T12:09:52-08:00",
          "tree_id": "24037fcf412e1fca8c8248380ea25f1f04bbe354",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6dd47f4f5679efdb603cc82e5bd82e6a9f57720c"
        },
        "date": 1636834429118,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41834,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 558369,
            "range": "± 3994",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25569,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39453,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1400,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59176,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86343315e8cd921f8c4618b6dc32fc0191ddceba",
          "message": "Rename `StateHandle` to `ReadSignal` (#300)\n\n* Rename `StateHandle` to `ReadSignal`\r\n\r\n* Update docs",
          "timestamp": "2021-11-13T12:20:11-08:00",
          "tree_id": "f25c950b3c9373ec2ec692ad0f600db5eb6ce4a4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/86343315e8cd921f8c4618b6dc32fc0191ddceba"
        },
        "date": 1636835041339,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44731,
            "range": "± 2203",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 596074,
            "range": "± 31682",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 27059,
            "range": "± 1639",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41831,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1473,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 61518,
            "range": "± 3493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df16d18ad29933316aa666185e7e2dd7002eb662",
          "message": "Autocomplete should not be boolean attribute (#301)",
          "timestamp": "2021-11-13T12:27:42-08:00",
          "tree_id": "33165a4290c46d40237342d5bc7bb2a77c5a5bbb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/df16d18ad29933316aa666185e7e2dd7002eb662"
        },
        "date": 1636835491346,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39565,
            "range": "± 3058",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 526564,
            "range": "± 31803",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23584,
            "range": "± 2604",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39416,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1424,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69342,
            "range": "± 6799",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alsuren@gmail.com",
            "name": "David Laban",
            "username": "alsuren"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63ec4244701887a9163f078de5beee3099b4148e",
          "message": "render_temporarily_to() helper (#303)\n\n* render_temporarily_to() helper\r\n\r\n* reexport render_temporarily_to() at top level\r\n\r\n* rename to render_get_scope; dry",
          "timestamp": "2021-11-23T12:53:20-08:00",
          "tree_id": "4f23f088b141cba9bae8a640e16915f49853216e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/63ec4244701887a9163f078de5beee3099b4148e"
        },
        "date": 1637701020805,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38934,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 564244,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25071,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38921,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1494,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58019,
            "range": "± 161",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d10e0d4525557f2513cad58aed69bf308dfdf95e",
          "message": "Hydrate (#240)\n\n* wip\r\n\r\n* Refactor component\r\n\r\n* Fix conditional compilation\r\n\r\n* Fix conditional compilation\r\n\r\n* Get next marker\r\n\r\n* HydrateNode\r\n\r\n* Implement HydrateNode\r\n\r\n* Hydration context\r\n\r\n* Generate hydration keys\r\n\r\n* Fix clippy\r\n\r\n* Do not reset parent node for hydrate\r\n\r\n* Enable USE_HYDRATION_CONTEXT\r\n\r\n* Fix panic\r\n\r\n* Do not append nodes when hydrating\r\n\r\n* Move hydrate into utils mod\r\n\r\n* wip\r\n\r\n* macro support for hydration\r\n\r\n* Add hydrate example\r\n\r\n* Make \"hydrate\" feature experimental\r\n\r\n* Fix gitpod prebuilds\r\n\r\n* Add hydrate tests\r\n\r\n* Fix wasm-pack test\r\n\r\n* Add some tests for hydration\r\n\r\n* Hydrate reactivity\r\n\r\n* Add hydrate with siblings test\r\n\r\n* Add GenericNode::marker_with_text\r\n\r\n* Remove redundant clones\r\n\r\n* Update SSR docs about hydration\r\n\r\n* Fix error handling in hydrate utils\r\n\r\n* Refactor sycamore-macro\r\n\r\n* Update expect test\r\n\r\n* Add hydration example\r\n\r\n* Fix logic error in get_next_marker\r\n\r\n* Fix hydrate bug not replacing at initial render\r\n\r\n* Fix hydration tests\r\n\r\n* Fix ssr test\r\n\r\n* Add dynamic template test\r\n\r\n* Allow clippy lint in proc-macro\r\n\r\n* Add hydrate_get_scope",
          "timestamp": "2021-11-26T09:31:41-08:00",
          "tree_id": "03a2f5e1eb47a88cb8f04e10ed74ef38608520d8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d10e0d4525557f2513cad58aed69bf308dfdf95e"
        },
        "date": 1637948131049,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41456,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 555926,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25155,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39444,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2752,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 103731,
            "range": "± 183",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a67686f2c7bd181307ac3c649f8dee0600febfb2",
          "message": "Update dependencies",
          "timestamp": "2021-11-26T12:04:25-08:00",
          "tree_id": "f33b9e851f504c797344fd0d3320861223fdb364",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a67686f2c7bd181307ac3c649f8dee0600febfb2"
        },
        "date": 1637957294027,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34830,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 568454,
            "range": "± 2558",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24160,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38641,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2279,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84052,
            "range": "± 89",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6f2360f40f3fef8c0afa75074ed368de03c2c485",
          "message": "Fix typo in rustdocs about feature flags",
          "timestamp": "2021-11-26T13:29:16-08:00",
          "tree_id": "dad7ff80f9763bf05a20f91fc93984adf6098032",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6f2360f40f3fef8c0afa75074ed368de03c2c485"
        },
        "date": 1637962387767,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36412,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 487563,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22079,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34986,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1869,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75203,
            "range": "± 60",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ea47c6aa5c6459fd0de7795919a7af61d1800627",
          "message": "Fix links to templates in docs",
          "timestamp": "2021-11-26T13:31:48-08:00",
          "tree_id": "1905f1e8979ad6e69fbb7981ea27cb419eef4042",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ea47c6aa5c6459fd0de7795919a7af61d1800627"
        },
        "date": 1637962567655,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49775,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 664182,
            "range": "± 3797",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 29981,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47172,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2483,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 99418,
            "range": "± 151",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "056841fb53da8b448c0855d829ff2e7197edb7f9",
          "message": "Do not show experimental badge",
          "timestamp": "2021-11-26T13:35:18-08:00",
          "tree_id": "f5bc45007eec1cb8bdf17d5efff093c69bfcb615",
          "url": "https://github.com/sycamore-rs/sycamore/commit/056841fb53da8b448c0855d829ff2e7197edb7f9"
        },
        "date": 1637962786628,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50687,
            "range": "± 3021",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 696897,
            "range": "± 29780",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 30289,
            "range": "± 1388",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 48222,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2714,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 108320,
            "range": "± 4756",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "9f9163b73bbeec59c5f687acda27b259ec18e647",
          "message": "Update js-framework-benchmark screenshot in v0.6.0 release post",
          "timestamp": "2021-11-26T13:41:12-08:00",
          "tree_id": "3eacc79c59a55979870e82454b774800d3a0d19d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9f9163b73bbeec59c5f687acda27b259ec18e647"
        },
        "date": 1637963166524,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41325,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 555761,
            "range": "± 3278",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 24971,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39139,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2104,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84244,
            "range": "± 102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "b0e0d9812a37bd7ac4b86705a07a89fbf2096fc6",
          "message": "Add _headers file",
          "timestamp": "2021-11-26T14:04:04-08:00",
          "tree_id": "9befce6622c8f5fe617258fff467bf424bed0087",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b0e0d9812a37bd7ac4b86705a07a89fbf2096fc6"
        },
        "date": 1637964481499,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41322,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 612276,
            "range": "± 3292",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 28431,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 43712,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2188,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84681,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6b739b82c46f2f939c23b78b745cd0ec5a309ad8",
          "message": "Fix netlify _headers file",
          "timestamp": "2021-11-26T15:20:24-08:00",
          "tree_id": "ebd5de0c6c546b043a4b21ab0ad983102263f832",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6b739b82c46f2f939c23b78b745cd0ec5a309ad8"
        },
        "date": 1637969057788,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35567,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571705,
            "range": "± 10016",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25199,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38957,
            "range": "± 1075",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2387,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83992,
            "range": "± 87",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31050ae6ed60a6569fbd7157f1273a9fe1107654",
          "message": "Fix parenthesizing of expressions in view! interpolation syntax (#304)",
          "timestamp": "2021-11-26T15:55:23-08:00",
          "tree_id": "d7d72b17c6c89dac3701b6964f09d14a0308c764",
          "url": "https://github.com/sycamore-rs/sycamore/commit/31050ae6ed60a6569fbd7157f1273a9fe1107654"
        },
        "date": 1637971169280,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48887,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 667993,
            "range": "± 8428",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 30026,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 46125,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2487,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 97444,
            "range": "± 2255",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4663c7c99078f4fd6f6745c875a2d0e8e4d54e0e",
          "message": "Track caller for use_context (#306)",
          "timestamp": "2021-11-28T15:32:05-08:00",
          "tree_id": "defaecc7a48fc5bf3e531b47d8bedd09b0b72a76",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4663c7c99078f4fd6f6745c875a2d0e8e4d54e0e"
        },
        "date": 1638142553906,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41886,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 567752,
            "range": "± 2531",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25266,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39397,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2145,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83605,
            "range": "± 110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16ff0a91c80abf8b40ce8f23e3748c73c09b37ed",
          "message": "Better debugging for `ReactiveScope`s (#307)\n\n* Store ReactiveScope creation Location\r\n\r\n* DebugScopeHierarchy\r\n\r\n* Add track_caller attributes\r\n\r\n* Add more track_callers\r\n\r\n* Attach all attributes except doc comments to function instead of struct",
          "timestamp": "2021-11-29T21:08:35-08:00",
          "tree_id": "2331508b0da3bb95e742ddf94771dd87afd99873",
          "url": "https://github.com/sycamore-rs/sycamore/commit/16ff0a91c80abf8b40ce8f23e3748c73c09b37ed"
        },
        "date": 1638249130781,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34571,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 489049,
            "range": "± 5335",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23308,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 35167,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1821,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73553,
            "range": "± 816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "676e7a4f9a04f626a294bd95d171d5ba46f7e069",
          "message": "Deprecate create_root in favor of create_scope (#309)",
          "timestamp": "2021-11-30T09:00:37-08:00",
          "tree_id": "e1a9f270ba682838fae6eb00bdfa0be3c03e9b82",
          "url": "https://github.com/sycamore-rs/sycamore/commit/676e7a4f9a04f626a294bd95d171d5ba46f7e069"
        },
        "date": 1638291868876,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41127,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 558397,
            "range": "± 3066",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26287,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40327,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2220,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84086,
            "range": "± 89",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "eda853668ed34c8d574fdce181f7ff42744ff4e7",
          "message": "Add some missing track_caller attributes",
          "timestamp": "2021-11-30T09:08:29-08:00",
          "tree_id": "df9e94171da54e293d40d1a6999a8dc31dab2cbb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/eda853668ed34c8d574fdce181f7ff42744ff4e7"
        },
        "date": 1638292414635,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45725,
            "range": "± 2031",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 656616,
            "range": "± 32481",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 30678,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 46779,
            "range": "± 3943",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2442,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 95848,
            "range": "± 7892",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36d4a2942080cf400f2901a1abba106bef77b518",
          "message": "Fix contexts inside effects (#310)\n\n* Fix nested contexts\r\n\r\n* Add context test\r\n\r\n* Remove useless clippy attribute\r\n\r\n* Make sure create_effect recreates scopes in right hierarchy\r\n\r\n* Fix root create_effect\r\n\r\n* Refactor create_child_scope_in\r\n\r\nBREAKING CHANGE: changed some function signatures\r\n\r\n* Fix compile errors\r\n\r\n* Fix get old scope's parent so that new scope does not change scope hierarchy",
          "timestamp": "2021-11-30T21:54:35-08:00",
          "tree_id": "d6139a78634469a5146583dacb8a9f4e2d154cdf",
          "url": "https://github.com/sycamore-rs/sycamore/commit/36d4a2942080cf400f2901a1abba106bef77b518"
        },
        "date": 1638338301351,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39992,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 570419,
            "range": "± 2717",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26535,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40686,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2138,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84089,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c45b713446c92f806933a8156a3d4fd35dff04b9",
          "message": "Use Trunk hooks to build tailwindcss",
          "timestamp": "2021-12-01T21:05:35-08:00",
          "tree_id": "44b07e88517e5ead143410b7b4b0390683fd2728",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c45b713446c92f806933a8156a3d4fd35dff04b9"
        },
        "date": 1638421772572,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39711,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 571607,
            "range": "± 2849",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26722,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40723,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2194,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84428,
            "range": "± 80",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7738584ae1d95da5ad53cf5574816ddd36d1efc4",
          "message": "Fix tailwind.css path",
          "timestamp": "2021-12-01T21:15:40-08:00",
          "tree_id": "54a377074590feb52186ffa1948aaf43688c23df",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7738584ae1d95da5ad53cf5574816ddd36d1efc4"
        },
        "date": 1638422369177,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39872,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 576718,
            "range": "± 3999",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26850,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41368,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2117,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83940,
            "range": "± 83",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c62e700fcafa08a2c0ce0a2ebab9dd96bc59ed7",
          "message": "Filter phantom_generics to contain types only (#312)",
          "timestamp": "2021-12-07T09:31:05-08:00",
          "tree_id": "c4ffc666a9df6f93d5eb4ef637f2f5a949a4259f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0c62e700fcafa08a2c0ce0a2ebab9dd96bc59ed7"
        },
        "date": 1638898528089,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 66916,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 521905,
            "range": "± 3420",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19624,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39000,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1680,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 71182,
            "range": "± 880",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07333c23723f6de6215d5c9c338ad5cb44e68bac",
          "message": "Fix website npm script (#313)\n\n* Fix npm production script not building docs\r\n\r\n* Remove responsive temporarily",
          "timestamp": "2021-12-08T15:30:11-08:00",
          "tree_id": "f3178f992d4d69308a7be7afa31e15e268068adf",
          "url": "https://github.com/sycamore-rs/sycamore/commit/07333c23723f6de6215d5c9c338ad5cb44e68bac"
        },
        "date": 1639006450407,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53033,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 508804,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19823,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 41179,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1758,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69807,
            "range": "± 1445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a3fc6cbd4dce89d381f56ef1172c134e2edbf286",
          "message": "Fix hydration counters",
          "timestamp": "2021-12-08T15:50:03-08:00",
          "tree_id": "83dd27de7ba11e61c306fd80343f75c979213b43",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a3fc6cbd4dce89d381f56ef1172c134e2edbf286"
        },
        "date": 1639007648911,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 66826,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 521489,
            "range": "± 2351",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19775,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38992,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1681,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 71239,
            "range": "± 1286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "89dfb824cba3eb0b96dcf2fb8c23c51a86e6b578",
          "message": "v0.7.0",
          "timestamp": "2021-12-08T17:11:18-08:00",
          "tree_id": "4dbd3adb2a807d57f3f881f7cd92ed7f0a1bcd95",
          "url": "https://github.com/sycamore-rs/sycamore/commit/89dfb824cba3eb0b96dcf2fb8c23c51a86e6b578"
        },
        "date": 1639012515349,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58946,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 517037,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19334,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38627,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1786,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 71793,
            "range": "± 1994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "69a38d2fd177ebf7ef317022a4a531e3f5cb39b2",
          "message": "Fix CHANGELOG.md typo in url",
          "timestamp": "2021-12-08T17:14:42-08:00",
          "tree_id": "53eb89890a70830897de6e0e9f8dc516815e8fa3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/69a38d2fd177ebf7ef317022a4a531e3f5cb39b2"
        },
        "date": 1639012699229,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58625,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 456536,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 17063,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34997,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1536,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70884,
            "range": "± 2045",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a36446d2b353111cab9ecae55c1c97793caee139",
          "message": "Add some more details to release post",
          "timestamp": "2021-12-08T17:21:21-08:00",
          "tree_id": "ddc25e237c84f6ec6b6afda0df7df8acf9d0c8de",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a36446d2b353111cab9ecae55c1c97793caee139"
        },
        "date": 1639013110613,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50111,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 503025,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19283,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39759,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1789,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69750,
            "range": "± 173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10a9a83dd2bd86cd0fb41d6746dd8bd1b3974879",
          "message": "Update latest version number on website",
          "timestamp": "2021-12-08T19:58:54-08:00",
          "tree_id": "df42b743c730de1306322d4e20638cc108f30ff4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/10a9a83dd2bd86cd0fb41d6746dd8bd1b3974879"
        },
        "date": 1639022588677,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 82805,
            "range": "± 1545",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 621584,
            "range": "± 14114",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22932,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47202,
            "range": "± 2155",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2114,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84576,
            "range": "± 176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43192714+langbamit@users.noreply.github.com",
            "name": "langbamit",
            "username": "langbamit"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6572ea570719e66a3b67811ad4a1219691476cb2",
          "message": "Support Rust 2021 edition in macro codegen (#316)\n\nFix a codegen issue with hydration producing invalid syntax in Rust 2021 edition.",
          "timestamp": "2021-12-14T17:08:48Z",
          "tree_id": "80a5ec5d57179005dc70bb8bf1216e53463fe1ea",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6572ea570719e66a3b67811ad4a1219691476cb2"
        },
        "date": 1639501959864,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 69128,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 524647,
            "range": "± 2293",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19899,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39042,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1682,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70237,
            "range": "± 74",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71940863+AMNRG@users.noreply.github.com",
            "name": "AMNRG",
            "username": "AMNRG"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e64f95be2a1c63b2e6e55caa06dee7a2e9c65870",
          "message": "Fix example code in iteration docs (#317)",
          "timestamp": "2021-12-14T17:10:15Z",
          "tree_id": "c2c8e243c76a4aca77190f26fc98c08ad557c922",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e64f95be2a1c63b2e6e55caa06dee7a2e9c65870"
        },
        "date": 1639502071634,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 81874,
            "range": "± 3552",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 608913,
            "range": "± 14016",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22470,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 45242,
            "range": "± 851",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1899,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80043,
            "range": "± 1771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dc8cbeb8ac059e52f61274b2dea2dc42ce32939",
          "message": "Hack to fix duplicate text when hydrating (#321)",
          "timestamp": "2021-12-15T12:26:18-08:00",
          "tree_id": "177593054f3265f6cf8292680adc2a0241122f3e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7dc8cbeb8ac059e52f61274b2dea2dc42ce32939"
        },
        "date": 1639600223797,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 78861,
            "range": "± 1696",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 620988,
            "range": "± 23879",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23138,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 46043,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1998,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 86251,
            "range": "± 1476",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d0239c87d3e07df860f595c7d5ac067852f583b",
          "message": "Make builder API play well with hydration (#322)",
          "timestamp": "2021-12-16T03:41:22Z",
          "tree_id": "19aa756548f76b196b6a7a9a222f4e766b32710b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8d0239c87d3e07df860f595c7d5ac067852f583b"
        },
        "date": 1639626310662,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 68104,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 520983,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19115,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39036,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1668,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74391,
            "range": "± 1314",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "bb526b9b7a39727d38baf0019c11d3b372344df6",
          "message": "v0.7.1",
          "timestamp": "2021-12-15T20:22:43-08:00",
          "tree_id": "03d9f4e96cd745af5e8e7ad893d522806130ce42",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bb526b9b7a39727d38baf0019c11d3b372344df6"
        },
        "date": 1639628833730,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 82781,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 625919,
            "range": "± 4081",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22984,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 47113,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 2005,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 88498,
            "range": "± 3772",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2ae80f496bb83ca9457accaa4e2b7fb8855ecd7d",
          "message": "Fix date in CHANGELOG.md",
          "timestamp": "2021-12-15T20:44:52-08:00",
          "tree_id": "8a00f7124ad00eb96fe15fb59b22fc1af36cd9ab",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2ae80f496bb83ca9457accaa4e2b7fb8855ecd7d"
        },
        "date": 1639630133702,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 69131,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 522666,
            "range": "± 2996",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19232,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38626,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1672,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75015,
            "range": "± 477",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "9ccb2d2918180a83da11a887036d3b8eafc2e418",
          "message": "Fix CHANGELOG.md version number",
          "timestamp": "2021-12-15T21:13:47-08:00",
          "tree_id": "2dc2c4e94ebb5fd1da2fbb70d2d13b048741bb71",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9ccb2d2918180a83da11a887036d3b8eafc2e418"
        },
        "date": 1639631890399,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 69537,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 521826,
            "range": "± 2955",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19110,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38911,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1673,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74557,
            "range": "± 355",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "galaster@foxmail.com",
            "name": "SasakiSaki",
            "username": "oovm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9c308904063cee663d271b560ee4219951bff0a",
          "message": "Make SsrNode attribute order stable (#323)\n\nThis makes it possible to use SSR'd output as snapshot test by making the attribute order deterministic.\r\n\r\n* Stable output of render_to_string\r\n\r\n* Run cargo fmt & cargo clippy\r\n\r\n* The output result of `render_to_string` is now fixed\r\n\r\n* Rearrange the import order",
          "timestamp": "2021-12-16T21:51:54-08:00",
          "tree_id": "5a4f1b60b646a3a3289f84ce46f76a4a1b7658d2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b9c308904063cee663d271b560ee4219951bff0a"
        },
        "date": 1639720583593,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 76377,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 608583,
            "range": "± 31428",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21840,
            "range": "± 1382",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 42728,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1938,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 88877,
            "range": "± 5100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31190113+attriaayush@users.noreply.github.com",
            "name": "Aayush Attri",
            "username": "attriaayush"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0194a5ddf2a2e4c8be26387fc51ad6cbbd7ee2a5",
          "message": "An HTTP request example and a tailwindcss styling example (#305)\n\n* adding an example that fetches data over network and styling using tailwindcss\r\n\r\n* updating the root cargo.toml to include new example\r\n\r\n* removing the tailwindcss setup\r\n\r\n* extending the page visit counter example to include tailwindcss setup\r\n\r\n* updating the root cargo.toml to include new examples\r\n\r\n* removing link to tailwind\r\n\r\nUpdate examples/page-visit-counter-tailwindcss/Trunk.toml\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\n\r\nUpdate examples/page-visit-counter-tailwindcss/src/main.rs\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\n\r\nUpdate examples/page-visit-counter-tailwindcss/src/main.rs\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* addressing comments\r\n\r\n* Update reqwasm to v0.4.0 and remove non-tailwind example\r\n\r\nThe non-tailwind example is not needed and is only duplicate code\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2021-12-28T13:43:23-08:00",
          "tree_id": "13977c1280f789e61cb5b7894fcf91e4064d7c12",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0194a5ddf2a2e4c8be26387fc51ad6cbbd7ee2a5"
        },
        "date": 1640728050005,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 71621,
            "range": "± 2837",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 558597,
            "range": "± 22882",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20893,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 40540,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1799,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83746,
            "range": "± 2827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfafaafb3b9908d781e6ad58144cbbdabb4d51e4",
          "message": "Add `.map` utility for `ReadSignal` as a wrapper around `create_memo` (#326)\n\n* Add .map shorthand for Signal\r\n\r\n* Add some docs",
          "timestamp": "2021-12-29T08:57:45-08:00",
          "tree_id": "19cc11996385ecfda00963ee2056dc66c5363984",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bfafaafb3b9908d781e6ad58144cbbdabb4d51e4"
        },
        "date": 1640797317206,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 83207,
            "range": "± 5016",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 622925,
            "range": "± 3263",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 23981,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 46674,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1976,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 95824,
            "range": "± 220",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arctic_hen7@pm.me",
            "name": "arctic_hen7",
            "username": "arctic-hen7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "619c300d5fbe86042b837e3b912149285dd45c06",
          "message": "chore: update license for 2022 (#328)",
          "timestamp": "2022-01-04T19:12:32-08:00",
          "tree_id": "6c3c8071c32958b6f8799d2db40b1e16c8e3db05",
          "url": "https://github.com/sycamore-rs/sycamore/commit/619c300d5fbe86042b837e3b912149285dd45c06"
        },
        "date": 1641352562611,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 67197,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 523919,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19591,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39199,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1647,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80451,
            "range": "± 174",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@dav1d.de",
            "name": "David Herberth",
            "username": "Dav1dde"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1fd670c5306e39892f0190d059fcde2e4516e71",
          "message": "Fix spellcheck and translate attributes (#333)",
          "timestamp": "2022-01-14T18:04:47-08:00",
          "tree_id": "ab119f8fc270d9c4ae1b1817c8a076c20b306662",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f1fd670c5306e39892f0190d059fcde2e4516e71"
        },
        "date": 1642212509799,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 63751,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 523642,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 19392,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38466,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1602,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78784,
            "range": "± 118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lictex_steaven@outlook.com",
            "name": "lictex_",
            "username": "xyning"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56e8f048061e6ec99f424eef9242cabb15ec15c6",
          "message": "Website improvements for small screens (#331)\n\n* Show a hamburger menu\r\n\r\n* fix mobile website rendering\r\n\r\n* implement a hamburger menu for the website\r\nalso some minor tweaks for small screens\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-01-17T12:55:55-08:00",
          "tree_id": "8a59d0c85e0aa953bc267725686d1d038fc58988",
          "url": "https://github.com/sycamore-rs/sycamore/commit/56e8f048061e6ec99f424eef9242cabb15ec15c6"
        },
        "date": 1642453174898,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 59992,
            "range": "± 3004",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 491537,
            "range": "± 24651",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 18564,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 38577,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1550,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77190,
            "range": "± 5391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca56171d7554c7a7f844a394d5877ded62b3fb0a",
          "message": "Reactive Primitives v2! 🎉 (#337)\n\n* replace with new code\r\n\r\n* Fix compile errors\r\n\r\n* Add SSR benchmark back\r\n\r\n* Update MSRV from 1.53.0 to 1.57.0\r\n\r\nThis change is required, first of all, to satisfy bumpalo whose MSRV is 1.54.0, second of all, because edition 2021 support is required for new reactivity system.\r\n\r\n* Update MSRV from 1.57.0 to 1.58.0 for identifies in format\r\n\r\n* Temporarily silence clippy\r\n\r\nBug in wasm-bindgen codegen triggering clippy lint\r\n\r\n* Add children support\r\n\r\n* Update Router naming to be consistent\r\n\r\n* Fix trybuild UI tests\r\n\r\n* Update router to take advantage of new reactive system\r\n\r\n* Fix website build\r\n\r\n* Re-add all website features\r\n\r\n* Fix website versions\r\n\r\n* Use dynamic dispatch to reduce code-bloat for create_effect\r\n\r\n* Add tests for signal Debug and Display implementations\r\n\r\n* Fix soundness bug with create_child_scope\r\n\r\nSee description of create_child_scope_tracked\r\n\r\n* Add raf demo\r\n\r\n* Add tweened signals\r\n\r\n* Add portals\r\n\r\n* Re-enable integration tests for Portal\r\n\r\n* Update getting_started section in docs\r\n\r\n* Fix support for custom elements in sycamore-macro\r\n\r\n* Update docs in basics\r\n\r\n* Update missed docs\r\n\r\n* Update advanced docs\r\n\r\n* Fix soundness bug in sycamore-reactive\r\n\r\n* Remove unsafe fn create_child_scope_tracked\r\n\r\nThis is no longer needed now that the soundness bug regarding signals that are destroyed before effects complete is fixed.\r\n\r\n* For some reason, `bind:value` syntax works again\r\n\r\nMaybe it's because of edition 2021?\r\n\r\n* Generate slightly less code for components in view!",
          "timestamp": "2022-01-29T20:12:35-08:00",
          "tree_id": "b685459137119bc12ef6b040adae496226a198fd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ca56171d7554c7a7f844a394d5877ded62b3fb0a"
        },
        "date": 1643516203081,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42532,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 298517,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56043,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 69465,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68434,
            "range": "± 180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "53595243+teenjuna@users.noreply.github.com",
            "name": "teenjuna",
            "username": "teenjuna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b05695354078c2fbb22b7c8eb432736a83597bc",
          "message": "Fix typo in components example (#340)",
          "timestamp": "2022-01-29T21:42:10-08:00",
          "tree_id": "a2e1e5a55e719b433eb96d3bbb64d554e653dddd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0b05695354078c2fbb22b7c8eb432736a83597bc"
        },
        "date": 1643521591947,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51497,
            "range": "± 1708",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 330475,
            "range": "± 8334",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58613,
            "range": "± 3139",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 78449,
            "range": "± 3847",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1486,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83288,
            "range": "± 1288",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cff17a490eaebf99fa67550dcb58bafb77e1b06f",
          "message": "Update website index style (#341)\n\n* Restyle website index page\r\n\r\nUpgrade tailwindcss version to v3.0",
          "timestamp": "2022-01-29T21:49:58-08:00",
          "tree_id": "608d21dd4ee55aa0318284d6ffb6920947bc5a23",
          "url": "https://github.com/sycamore-rs/sycamore/commit/cff17a490eaebf99fa67550dcb58bafb77e1b06f"
        },
        "date": 1643522039678,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44393,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 285104,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56145,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 71764,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1257,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70396,
            "range": "± 832",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "5e2d5584eb70e647679d9120728ac32b3d956fec",
          "message": "Update tailwind commands",
          "timestamp": "2022-01-30T19:10:37-08:00",
          "tree_id": "aab63b80d9d31a8ab900970f60140901b53b236c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5e2d5584eb70e647679d9120728ac32b3d956fec"
        },
        "date": 1643598926165,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49963,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 377571,
            "range": "± 18272",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62617,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 83502,
            "range": "± 4764",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1445,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 76438,
            "range": "± 4173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6f3f1d968fae49568ee8bbb585187e4699b0e76a",
          "message": "Remove useless configuration in tailwind.config.js",
          "timestamp": "2022-01-30T19:15:58-08:00",
          "tree_id": "ede1ea2ac5b5dde8a5ad42a9f5d272aa5f4a50c9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6f3f1d968fae49568ee8bbb585187e4699b0e76a"
        },
        "date": 1643599227848,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46838,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 303138,
            "range": "± 8146",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62267,
            "range": "± 3317",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 77703,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1381,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73630,
            "range": "± 2250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "62abadd869f692a6e7088c3fc283f9074222eb60",
          "message": "Add postcss as a dependency",
          "timestamp": "2022-01-30T19:32:29-08:00",
          "tree_id": "72f2db113290f3c898fee228b9aa769b4074dc4b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/62abadd869f692a6e7088c3fc283f9074222eb60"
        },
        "date": 1643600199694,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44332,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 285613,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55885,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73510,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1254,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70999,
            "range": "± 529",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "821ea66d9a21f26bac318a0464189fcc157b4380",
          "message": "Remove outline class from wrapper div element",
          "timestamp": "2022-01-30T20:16:42-08:00",
          "tree_id": "8b608cf99559dad335d925a5fae25465e7ac4ae0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/821ea66d9a21f26bac318a0464189fcc157b4380"
        },
        "date": 1643602888918,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53980,
            "range": "± 2488",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 310428,
            "range": "± 16837",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 64105,
            "range": "± 5791",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 80479,
            "range": "± 5525",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1393,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74627,
            "range": "± 4129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "881cddb3b4f37e9cc8bc32152a24c6cd5b1338c7",
          "message": "Make empty props implicit",
          "timestamp": "2022-02-01T08:44:29-08:00",
          "tree_id": "5e7bc3a359b41d55a80701d443a71a66000969ee",
          "url": "https://github.com/sycamore-rs/sycamore/commit/881cddb3b4f37e9cc8bc32152a24c6cd5b1338c7"
        },
        "date": 1643734153523,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47724,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 308487,
            "range": "± 8496",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 61493,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 80787,
            "range": "± 4358",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1359,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75995,
            "range": "± 9195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "710bb9482638f7dbde48c29d25d8a2dfe0f13dbb",
          "message": "v0.8.0-beta.1",
          "timestamp": "2022-02-01T08:54:37-08:00",
          "tree_id": "abdf1c16b5bc7e7831f55ea1d81eaa4f70ac6eea",
          "url": "https://github.com/sycamore-rs/sycamore/commit/710bb9482638f7dbde48c29d25d8a2dfe0f13dbb"
        },
        "date": 1643734734195,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44523,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 284127,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56463,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 75016,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1248,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70804,
            "range": "± 94",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "151f69871aef040b532045b6fecdb0a65ae95c22",
          "message": "Add blog post about the new reactive primitives (#342)\n\n* Add blog post about the new reactive primitives\r\n\r\n* Fix typo\r\n\r\n* Fix typo\r\n\r\n* Make a few sentences clearer",
          "timestamp": "2022-02-01T19:41:36-08:00",
          "tree_id": "29917c52210f36cf1d000f3f24d7849402d6249e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/151f69871aef040b532045b6fecdb0a65ae95c22"
        },
        "date": 1643773549618,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44294,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 289071,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55835,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72756,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1262,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70577,
            "range": "± 188",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33847f164224222a7cd9a523934b9820288418dd",
          "message": "Fix typo",
          "timestamp": "2022-02-02T08:53:09-08:00",
          "tree_id": "a6a6e9721e4ff6f9656c0f629367e20916f53648",
          "url": "https://github.com/sycamore-rs/sycamore/commit/33847f164224222a7cd9a523934b9820288418dd"
        },
        "date": 1643821043454,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42544,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 299619,
            "range": "± 1471",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54939,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 71027,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1300,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68252,
            "range": "± 125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de89dab817836da4c7459b78e5d2f016fdfcec17",
          "message": "Make dispose an unsafe fn (#344)\n\n* Make dispose an unsafe fn\r\n\r\n* Remove test file\r\n\r\n* Fix tests\r\n\r\n* Fix doc tests",
          "timestamp": "2022-02-03T20:41:07-08:00",
          "tree_id": "eb1f895e612fb5a3d6749382bc0ce88bf9804eb6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/de89dab817836da4c7459b78e5d2f016fdfcec17"
        },
        "date": 1643949934939,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52313,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 339561,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 75570,
            "range": "± 2735",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 100677,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1534,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 85734,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "4d95c40e063f167c294dcfc84b3a0bf97e5a1d1a",
          "message": "Add missing feature on syn in sycamore-macro",
          "timestamp": "2022-02-05T20:05:18-08:00",
          "tree_id": "65da74f9305a2f6ba098329d1266235301c46fb5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4d95c40e063f167c294dcfc84b3a0bf97e5a1d1a"
        },
        "date": 1644120616966,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43703,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 285386,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62879,
            "range": "± 2537",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 82379,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1275,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72089,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "211ec6660cd6b86f372ee91ef1cacfca6329d0f3",
          "message": "0.8.0-beta.2",
          "timestamp": "2022-02-05T20:10:30-08:00",
          "tree_id": "47683f4735a274f0cbfeec06afce3ff63dadf1e7",
          "url": "https://github.com/sycamore-rs/sycamore/commit/211ec6660cd6b86f372ee91ef1cacfca6329d0f3"
        },
        "date": 1644120892359,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42467,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 286545,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 64229,
            "range": "± 1344",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 83574,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1267,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 71496,
            "range": "± 375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bb3eb0554c1c43e00f478c38191bf67f07ff39b",
          "message": "Add unit test for Signal::split (#346)\n\n* Add unit test for Signal::split\r\n\r\n* Fix compile error\r\n\r\n* Re-enable ssr bind test",
          "timestamp": "2022-02-05T20:32:42-08:00",
          "tree_id": "7c719957df20cd77c1c3c67b7dc4ed5e07e64666",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2bb3eb0554c1c43e00f478c38191bf67f07ff39b"
        },
        "date": 1644122218776,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42561,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 313840,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 63546,
            "range": "± 3408",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 83597,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1268,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 71779,
            "range": "± 90",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b6f4f836299d7c6974d6dac497452107fb38bff",
          "message": "Refresh README.md and add example list (#347)",
          "timestamp": "2022-02-06T06:16:43Z",
          "tree_id": "1269e0ff43a81ef723ad49b5ad65c742c057b52b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5b6f4f836299d7c6974d6dac497452107fb38bff"
        },
        "date": 1644128467538,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41643,
            "range": "± 2399",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 276743,
            "range": "± 11354",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 61365,
            "range": "± 4664",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 88396,
            "range": "± 5770",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1260,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69406,
            "range": "± 3686",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab3e5b08773bf4916454a0ecfc3b2a23094dd53b",
          "message": "Fix markdown link",
          "timestamp": "2022-02-07T19:14:05-08:00",
          "tree_id": "00cec75a12ed103fed1a1b891cd2edddb62d8898",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ab3e5b08773bf4916454a0ecfc3b2a23094dd53b"
        },
        "date": 1644290295013,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42299,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 288857,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 75944,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 96246,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1301,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72213,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "923c23c3164d4ada8835d046ba699989df537aa9",
          "message": "Transitions (#353)\n\n* Add docs for Suspense\r\n\r\n* Add some docs for Suspense and await_suspense\r\n\r\n* Add TransitionHandle\r\n\r\n* Add some more docs\r\n\r\n* Refactor Suspense implementation to not use nested contexts\r\n\r\n* wip\r\n\r\n* Fix transitions suspense tracking\r\n\r\n* Add unit test for transitions\r\n\r\n* Remove ContextProvider",
          "timestamp": "2022-02-08T15:02:44-08:00",
          "tree_id": "eac6b901289782d4bbbd57ac603ac10a4bdc1733",
          "url": "https://github.com/sycamore-rs/sycamore/commit/923c23c3164d4ada8835d046ba699989df537aa9"
        },
        "date": 1644361673060,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57200,
            "range": "± 2765",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 363152,
            "range": "± 25350",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 80311,
            "range": "± 6272",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 105587,
            "range": "± 6781",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1622,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 89902,
            "range": "± 6172",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fb20c61311425adfbc9014e664c6859961c20d3",
          "message": "Type-checking and IDE completions for HTML tags (#354)\n\n* Add unit structs for all html tags\r\n\r\n* Add type-checked HTML element names\r\n\r\n* Add docs for more elements",
          "timestamp": "2022-02-08T21:03:40-08:00",
          "tree_id": "b9d3b6e04109314020109954eaf61431de1d6a61",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8fb20c61311425adfbc9014e664c6859961c20d3"
        },
        "date": 1644383280033,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43689,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 311501,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 64423,
            "range": "± 2202",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 84971,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1318,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69737,
            "range": "± 122",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfad5df6c58dd52ba7b94a290bd6d5f347e61678",
          "message": "Add workflow for monitoring performance (#355)\n\n* Add workflow\r\n\r\n* Fix workflow typo\r\n\r\n* Install trunk v0.14.0\r\n\r\n* Fix missing Rust target\r\n\r\n* Fix cp command\r\n\r\n* Fix configure_bench commands\r\n\r\n* Fix writeFileSync options\r\n\r\n* Fix workflow\r\n\r\n* Fix workflow commands\r\n\r\n* Fix path for results.json",
          "timestamp": "2022-02-09T12:57:11-08:00",
          "tree_id": "aa5a0387f6da88a85f92a47033a8776ba09cfe54",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bfad5df6c58dd52ba7b94a290bd6d5f347e61678"
        },
        "date": 1644440515090,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50560,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 334220,
            "range": "± 11422",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 70490,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 96129,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1446,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 81252,
            "range": "± 3049",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cbf71ce200ad9b3a1edae2dd0cd933361b1742b",
          "message": "Enable wasm-opt for js-framework-benchmark (#356)\n\n* Enable wasm-opt for js-framework-benchmark\r\n\r\n* Fix website prod command",
          "timestamp": "2022-02-09T20:23:05-08:00",
          "tree_id": "92300dfdde470394afd19324323a3a643b9af7bb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2cbf71ce200ad9b3a1edae2dd0cd933361b1742b"
        },
        "date": 1644467306319,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54891,
            "range": "± 2724",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 365924,
            "range": "± 18608",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 77315,
            "range": "± 14097",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 102513,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1569,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 86190,
            "range": "± 3660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e0bb4309599f9a5332b6496f276ad9d49869e6c5",
          "message": "Call cleanup callbacks in map_keyed and map_indexed (#357)\n\n* Call cleanup callbacks in map_keyed\r\n\r\n* Call dispose functions in map_indexed\r\n\r\n* Fix map_indexed\r\n\r\n* Improve unit tests",
          "timestamp": "2022-02-09T21:27:14-08:00",
          "tree_id": "a831d0bd0f257164042bf391cc8d87dbb4857c29",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e0bb4309599f9a5332b6496f276ad9d49869e6c5"
        },
        "date": 1644471129943,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53347,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 340236,
            "range": "± 2287",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56948,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 80855,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1518,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84215,
            "range": "± 514",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "025b79c4530fa66b0a2fb5238726084d1bbb5019",
          "message": "Use a SmallVec for ScopeArena (#358)",
          "timestamp": "2022-02-09T21:58:35-08:00",
          "tree_id": "f72c2364a904eb3abe88cc47d3b2df8283e05621",
          "url": "https://github.com/sycamore-rs/sycamore/commit/025b79c4530fa66b0a2fb5238726084d1bbb5019"
        },
        "date": 1644472968162,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39142,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 295493,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46531,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66587,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1308,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69024,
            "range": "± 134",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19b2cffceb83496b30f0eccb1557858efc971229",
          "message": "Remove unnecessary heap allocation in create_effect (#359)\n\n* Remove unnecessary heap allocation in create_effect\r\n\r\n* Use top-level RefCell\r\n\r\n* Move parent out of inner\r\n\r\n* Prevent creating an useless memo for dynamic views\r\n\r\n* Only call borrow_mut once in dispose\r\n\r\n* Re-enable wasm-opt",
          "timestamp": "2022-02-10T08:46:47-08:00",
          "tree_id": "ac8b7aee739f2a0c6801e05ba5b67a009f3d4583",
          "url": "https://github.com/sycamore-rs/sycamore/commit/19b2cffceb83496b30f0eccb1557858efc971229"
        },
        "date": 1644511860016,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42690,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 260852,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47234,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66893,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1277,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69593,
            "range": "± 87",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4dcf624a5f16e8d0fcff2e3c7347a6c3c7f8723",
          "message": "Remove lexical and pass number directly to JS (#360)\n\n* Remove lexical and pass number directly to JS\r\n\r\n* Fix html header levels in docs\r\n\r\n* Improve docs build tool",
          "timestamp": "2022-02-10T15:35:13-08:00",
          "tree_id": "4d1c4c1e768d5f3eed0bcab133e9c8119c227af8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e4dcf624a5f16e8d0fcff2e3c7347a6c3c7f8723"
        },
        "date": 1644536370363,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42323,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 257700,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46703,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66674,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1281,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70387,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "20cd8c1ab8c920d75de0b4e81affa0db9613aa2a",
          "message": "Update .gitpod.Dockerfile",
          "timestamp": "2022-02-17T04:16:59Z",
          "tree_id": "6416cfbd84088a73fdc0262ede17dea47906332f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/20cd8c1ab8c920d75de0b4e81affa0db9613aa2a"
        },
        "date": 1645071678519,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41546,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 257457,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47312,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66951,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1290,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69707,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "8322008f416e9048c19afb419045f7bd032c39ed",
          "message": "Fix markdown output for docs",
          "timestamp": "2022-02-17T04:18:42Z",
          "tree_id": "912aacbfb66e4927940cc774b7a3e54abe45d10a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8322008f416e9048c19afb419045f7bd032c39ed"
        },
        "date": 1645071805852,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49892,
            "range": "± 4217",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 315738,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56318,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 79661,
            "range": "± 922",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1523,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83319,
            "range": "± 252",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "48afd2debf3142ef704872d93f2fa9be8ffd7f61",
          "message": "Fix .gitpod.Dockerfile",
          "timestamp": "2022-02-17T04:56:06Z",
          "tree_id": "ce88d8bdfe5b2aea685aac0ad4aee5e52812e1ce",
          "url": "https://github.com/sycamore-rs/sycamore/commit/48afd2debf3142ef704872d93f2fa9be8ffd7f61"
        },
        "date": 1645074078211,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53636,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 332975,
            "range": "± 21168",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 60925,
            "range": "± 6138",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 86134,
            "range": "± 4414",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1730,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 89432,
            "range": "± 2896",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a71d31dd2b854ff752c9d2f06bb3483a3832407d",
          "message": "Use workspace-full for nodejs",
          "timestamp": "2022-02-17T05:57:37Z",
          "tree_id": "a0250ff6400c6723b2b3a21e3f1245f71c115f69",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a71d31dd2b854ff752c9d2f06bb3483a3832407d"
        },
        "date": 1645077708249,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38653,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 282047,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45933,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65796,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1326,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 67215,
            "range": "± 149",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b7ea15877b28fe58fc3ae435eb20819eb0d379a",
          "message": "Create a new nested scope if `ctx` is used within a dyn fragment (#364)\n\n* Create a new nested scope if ctx is used within dyn\r\n\r\n* Add a unit test for needs_ctx\r\n\r\n* Fix test\r\n\r\n* Fix needs_ctx\r\n\r\n* Make sure the right ctx identifier is used in Codegen\r\n\r\n* Add an additional test for context with existing type\r\n\r\n* Exclude context should_panic test from miri",
          "timestamp": "2022-02-17T11:48:14-08:00",
          "tree_id": "1a7f4fd7c3f8b92ad77c9f6bcf4a0cb4ba7ead19",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9b7ea15877b28fe58fc3ae435eb20819eb0d379a"
        },
        "date": 1645127556495,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39201,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 286730,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44590,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65240,
            "range": "± 1488",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1321,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 67833,
            "range": "± 987",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maccesch@synphonyte.com",
            "name": "Marc-Stefan Cassola",
            "username": "maccesch"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "499c9bb70c6b79849b436fc05554f74ab4f8c4c3",
          "message": "Fixed iteration.md (#366)",
          "timestamp": "2022-02-22T01:22:33Z",
          "tree_id": "64b9a07e7f685f3e04d643115bada7518bc2409f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/499c9bb70c6b79849b436fc05554f74ab4f8c4c3"
        },
        "date": 1645493248576,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50475,
            "range": "± 3414",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 290128,
            "range": "± 19838",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50709,
            "range": "± 4899",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 71369,
            "range": "± 5334",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1413,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73694,
            "range": "± 3816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alsuren@gmail.com",
            "name": "David Laban",
            "username": "alsuren"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7475e37e3b95e3f9aae113fc4e4cc665729d0f7",
          "message": "port builder example to 0.8 (#369)\n\n* resurrect hello-builder example\r\n\r\n* port builder example to 0.8\r\n\r\n* Fix clippy errors\r\n\r\nCo-authored-by: Luke Chu <lukewchu@outlook.com>",
          "timestamp": "2022-02-24T18:12:37-08:00",
          "tree_id": "66e8ff02c83cc6c894444607ed94f9db129caa90",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d7475e37e3b95e3f9aae113fc4e4cc665729d0f7"
        },
        "date": 1645755443755,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51781,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 323927,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58431,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 84076,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1552,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 86603,
            "range": "± 122",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ekanna.net@gmail.com",
            "name": "koti",
            "username": "ekanna"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24a1c15830e91a0a0785b48d470ad62f2d13b8b7",
          "message": "Fix typo in docs/next/basics/iteration.md (#371)\n\nAdded missing ctx to view! macro",
          "timestamp": "2022-02-25T16:17:38-08:00",
          "tree_id": "f97c4083ef360aba7d66d0eac9a3e94c3dc40cbb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/24a1c15830e91a0a0785b48d470ad62f2d13b8b7"
        },
        "date": 1645834906553,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41553,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 260678,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46911,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67354,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1258,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69748,
            "range": "± 349",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b2beb5f8cec73ca67aae25fc113326831bdfed5",
          "message": "Builder API v2 (#373)\n\n* Reworked builder API\r\n\r\n* Reorganize module structure\r\n\r\n* BREAKING CHANGE: Remove unused feature flag\r\n\r\n* Make child and dynamic child directly accept a ElementBuilder\r\n\r\n* Add a dyn_if helper method\r\n\r\n* Add doc tests for new builder API\r\n\r\n* Remove old builder API\r\n\r\n* Test all features in CI\r\n\r\n* Fix doctests\r\n\r\n* Fix clippy lint\r\n\r\n* Use new format strings syntax\r\n\r\n* Do not test all features in miri\r\n\r\n* Fix clippy lints",
          "timestamp": "2022-03-05T19:27:52-08:00",
          "tree_id": "cbb3a6a78eeb4c4e838390936152c4d039f1fef0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8b2beb5f8cec73ca67aae25fc113326831bdfed5"
        },
        "date": 1646537483907,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41577,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 261041,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 41352,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65540,
            "range": "± 3948",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1271,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 61640,
            "range": "± 255",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "879501d954ce004d6c05c70ced2992c7bd1c7499",
          "message": "Fix top-level dynamics nodes with hydration (#374)\n\n* Re-enable builder hydration tests\r\n\r\n* format\r\n\r\n* Provide parent children as initial nodes to insert\r\n\r\n* Add docs for the builder API\r\n\r\nBREAKING CHANGE: rename experimental-builder-agnostic to builder",
          "timestamp": "2022-03-06T17:07:58Z",
          "tree_id": "9637e5112f89e30be9409a62a0428188a7b48f73",
          "url": "https://github.com/sycamore-rs/sycamore/commit/879501d954ce004d6c05c70ced2992c7bd1c7499"
        },
        "date": 1646586721133,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47263,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 290268,
            "range": "± 14945",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48457,
            "range": "± 2398",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 70093,
            "range": "± 1877",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1354,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73340,
            "range": "± 6003",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7ea937e0486a874b4694c9b34b2ea5dfb4151747",
          "message": "cargo upgrade",
          "timestamp": "2022-03-06T14:33:31-08:00",
          "tree_id": "764e262c3cab9fde4090534d0c4e77703035531e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7ea937e0486a874b4694c9b34b2ea5dfb4151747"
        },
        "date": 1646606573578,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40977,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 258572,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47189,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67173,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1266,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69553,
            "range": "± 405",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c193a59cd637de62cd1d87bda319ee7313ac1570",
          "message": "Add some docs to `sycamore-futures` and deprecate `create_resource` (#376)\n\n* BREAKING CHANGE: Rename spawn_future to spawn_local\r\n\r\n* Add some docs and deprecate create_resource",
          "timestamp": "2022-03-06T14:59:42-08:00",
          "tree_id": "b22a60a5e4677c8161884fd8662057d8ff543aaa",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c193a59cd637de62cd1d87bda319ee7313ac1570"
        },
        "date": 1646607801617,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41004,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 259387,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48782,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67138,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1263,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69643,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5075e4b80c4917afc20f4ab9089be0e5f8a6f413",
          "message": "Add warn(missing_docs) to sycamore crate (#377)",
          "timestamp": "2022-03-06T16:01:05-08:00",
          "tree_id": "993d409f49a9f83b9ee223709edd7bfae127f11e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5075e4b80c4917afc20f4ab9089be0e5f8a6f413"
        },
        "date": 1646611489452,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42716,
            "range": "± 895",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 280846,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 43333,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 64807,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1320,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 67551,
            "range": "± 257",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "56c236924b27091c2a5d75cfb871050a4fe99e72",
          "message": "v0.8.0-beta.3",
          "timestamp": "2022-03-06T16:11:02-08:00",
          "tree_id": "dd374247f53678b65308ccca15332c4c7f3cd17f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/56c236924b27091c2a5d75cfb871050a4fe99e72"
        },
        "date": 1646612097609,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44172,
            "range": "± 3658",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 282889,
            "range": "± 20453",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 52594,
            "range": "± 3872",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73627,
            "range": "± 4410",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1377,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 76336,
            "range": "± 5902",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a49998b3b0b0358d6e9b2dca61549a92381b3af6",
          "message": "Fix header nesting in docs/next/basics/view.md",
          "timestamp": "2022-03-07T21:22:58-08:00",
          "tree_id": "c4ab5eece047fcf1c42816594e7891f9abe338b1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a49998b3b0b0358d6e9b2dca61549a92381b3af6"
        },
        "date": 1646717201686,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42338,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 262016,
            "range": "± 1531",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47328,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67240,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1246,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69574,
            "range": "± 380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5003b8350cce9b00b405c8b5b48cad45a5d730f8",
          "message": "Fix typo in docs/next/basics/view.md",
          "timestamp": "2022-03-07T21:24:33-08:00",
          "tree_id": "c7cfc3229f40f131545ab245689c6e192ceca8aa",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5003b8350cce9b00b405c8b5b48cad45a5d730f8"
        },
        "date": 1646717307931,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43334,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 262270,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47877,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 68441,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1266,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70153,
            "range": "± 212",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45f73e7bb3b74418ebb17c2b3153d25bc9bf9296",
          "message": "Allocate the contexts HashMap on the heap to reduce struct size (#381)",
          "timestamp": "2022-03-12T07:40:19-08:00",
          "tree_id": "876de261db4283b56ac5a3bcc8677a673656e351",
          "url": "https://github.com/sycamore-rs/sycamore/commit/45f73e7bb3b74418ebb17c2b3153d25bc9bf9296"
        },
        "date": 1647099843574,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42507,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 269220,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46862,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66181,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1238,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69447,
            "range": "± 206",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "747825d15d90afe4ce00fbb2fcc14e6d8a15f6c7",
          "message": "Refactor sycamore-reactive crate to unify `Scope` and `BoundedScope` (#382)\n\n* Refactor sycamore-reactive crate\r\n\r\n* Update sycamore and sycamore-router crates\r\n\r\n* Update website, docs, examples\r\n\r\n* Update trybuild tests\r\n\r\n* Update docs that were missed earlier",
          "timestamp": "2022-03-12T09:41:13-08:00",
          "tree_id": "5deeadae014a979b4ca07ca4e33fe92c6cb778e5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/747825d15d90afe4ce00fbb2fcc14e6d8a15f6c7"
        },
        "date": 1647107111341,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42484,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 262684,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45638,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66038,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1248,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69968,
            "range": "± 226",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "534bda2d14027cc304a686ef20fc62f13101f04c",
          "message": "Clearlify specify behavior of GenericNode::add_class to split multiple classes at whitespace (#383)",
          "timestamp": "2022-03-12T12:47:14-08:00",
          "tree_id": "68fa446fd271c28c3e0efc299db77b032d1448ad",
          "url": "https://github.com/sycamore-rs/sycamore/commit/534bda2d14027cc304a686ef20fc62f13101f04c"
        },
        "date": 1647118297585,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 47464,
            "range": "± 2198",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 294348,
            "range": "± 10562",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49816,
            "range": "± 2935",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 68476,
            "range": "± 3032",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1441,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75381,
            "range": "± 3319",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "b219e85c7f71fe5457fe62c52290d4367e83702e",
          "message": "Make top-level crate re-exports more consistent",
          "timestamp": "2022-03-12T12:48:52-08:00",
          "tree_id": "de9fb3580a5eb2840120b3d377cfdb1772f75474",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b219e85c7f71fe5457fe62c52290d4367e83702e"
        },
        "date": 1647118370479,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42450,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 261981,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45463,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 64323,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1251,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69785,
            "range": "± 90",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "1d5f1646814bafd999ad26f2d3bb7489873e7c91",
          "message": "Fix docs for <input>",
          "timestamp": "2022-03-12T12:50:25-08:00",
          "tree_id": "f3aef1fffba3d9727ee6380a822834de5b121f5c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/1d5f1646814bafd999ad26f2d3bb7489873e7c91"
        },
        "date": 1647118486424,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48717,
            "range": "± 3635",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 313226,
            "range": "± 26371",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54286,
            "range": "± 3946",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 78209,
            "range": "± 5138",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1455,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 81118,
            "range": "± 4945",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "9fdff59b9c0c399cd8793ae73fe7fd1e7d7ec3a3",
          "message": "Fix missing needs_ctx check in top-level dyn node",
          "timestamp": "2022-03-13T10:58:29-07:00",
          "tree_id": "e7a2835f44d8a19495c189664978f75cfb3e7355",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9fdff59b9c0c399cd8793ae73fe7fd1e7d7ec3a3"
        },
        "date": 1647194528128,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43073,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 258639,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46552,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56693,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1111,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 61696,
            "range": "± 168",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c3a6ba408ab2961e899c6bd2b0d87cb713a1bda1",
          "message": "Make DomNode::remove_class consistent with add_class",
          "timestamp": "2022-03-17T09:31:06-07:00",
          "tree_id": "3017740aeeb4552ecc372be404d53966d179350f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c3a6ba408ab2961e899c6bd2b0d87cb713a1bda1"
        },
        "date": 1647534923865,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51318,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 321139,
            "range": "± 5134",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54900,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 77687,
            "range": "± 2023",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1466,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80865,
            "range": "± 1665",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "923feeb29c7f44b70e9f7de570a7e71f40e9879a",
          "message": "Add support for SVG (#389)",
          "timestamp": "2022-03-17T11:46:29-07:00",
          "tree_id": "35ae302ecee97b0f0a9174428e0a529949ead3ba",
          "url": "https://github.com/sycamore-rs/sycamore/commit/923feeb29c7f44b70e9f7de570a7e71f40e9879a"
        },
        "date": 1647543038185,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50949,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 308831,
            "range": "± 6292",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54055,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 75506,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1428,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75563,
            "range": "± 2150",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d46a1cea5480dadef7753a61e0dfdc12020281a2",
          "message": "Fix compile error introduced by #385",
          "timestamp": "2022-03-17T20:30:42-07:00",
          "tree_id": "5c4f651dad10ae0431a4a279fcfb11cba7f2d5f1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d46a1cea5480dadef7753a61e0dfdc12020281a2"
        },
        "date": 1647574507178,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49959,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 302214,
            "range": "± 9573",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54799,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 77019,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1478,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77889,
            "range": "± 1110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48bdd726e2b49f06f3ba043875c4cfa9e40347c7",
          "message": "Add SVG example (#390)",
          "timestamp": "2022-03-18T03:50:51Z",
          "tree_id": "4fd7a1fae4b2a440e51abd21e32e69daf6523d4c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/48bdd726e2b49f06f3ba043875c4cfa9e40347c7"
        },
        "date": 1647575676499,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43453,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 261278,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46568,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67688,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1242,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66113,
            "range": "± 98",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fde706a0420b8995fdc2dac3c3ca7aa2369321bf",
          "message": "Fix and simplify SsrNode and HydrateNode codegen in view! macro (#392)\n\n* Use a function to prevent code duplication for getting initial node\r\n\r\n* Remove unused comment\r\n\r\n* Fix unused variable warning when hydrate is disabled\r\n\r\n* Do not duplicate codegen for Component and Dyn with SSR",
          "timestamp": "2022-03-18T20:48:42-07:00",
          "tree_id": "4e729041d986f6795612a008cf9777997b782a35",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fde706a0420b8995fdc2dac3c3ca7aa2369321bf"
        },
        "date": 1647661943314,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43633,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 260704,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46661,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65471,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1237,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65406,
            "range": "± 98",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "4ba6a199bdf98620ec0e43de32a20542486b952a",
          "message": "Remove \"experimental\" from hydrate feature flag",
          "timestamp": "2022-03-19T21:38:48-07:00",
          "tree_id": "5169ef5d7208e718c8c3db132b666a011e6b3f40",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4ba6a199bdf98620ec0e43de32a20542486b952a"
        },
        "date": 1647751383735,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52466,
            "range": "± 1166",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 305112,
            "range": "± 4664",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55907,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 77662,
            "range": "± 1250",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1466,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77879,
            "range": "± 2379",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0551019ac56cc8bcbedd81675e5b8a186dabbc1",
          "message": "Router refactor (#393)\n\n* Add warn(missing_docs) to sycamore-router\r\n\r\n* Remove unnecessary Rc<RefCell<Option<_>>>\r\n\r\n* Cleanup codebase",
          "timestamp": "2022-03-20T15:00:32-07:00",
          "tree_id": "c37ed1ea8b089be7ce7382a482a3e081c03d6d0c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b0551019ac56cc8bcbedd81675e5b8a186dabbc1"
        },
        "date": 1647813882833,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55543,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 327285,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56816,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 82279,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1532,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 81566,
            "range": "± 83",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8eecc8fcc29739dc9e8226cb5210ccfe09ba0758",
          "message": "Change reactive hooks from associated methods to free functions (#396)\n\n* Replace `ctx` with `cx`\r\n\r\n* Fix trybuild tests\r\n\r\n* Change associated methods to free-standing functions\r\n\r\n* Remove ScopeMotionExt\r\n\r\n* Remove final extension traits\r\n\r\n* Fix remaining compile errors\r\n\r\n* Fix intra-doc links and cargo fmt",
          "timestamp": "2022-03-21T12:30:05-07:00",
          "tree_id": "0f70e7e5a962fc9acb6b740fb44d99f7468fad88",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8eecc8fcc29739dc9e8226cb5210ccfe09ba0758"
        },
        "date": 1647891247161,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43582,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 259340,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48431,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66136,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1224,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66339,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a3bc95c158902c9b632f29bc9daa75c64306e31a",
          "message": "Add set_rc and set_rc_silent methods to Signal",
          "timestamp": "2022-03-21T12:40:16-07:00",
          "tree_id": "3681c68dd84e08febacef6f72bb5ba9ce838b7de",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a3bc95c158902c9b632f29bc9daa75c64306e31a"
        },
        "date": 1647891848689,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41475,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 256539,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48053,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65615,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1262,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65261,
            "range": "± 184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "3a65c9aca1dde05148c67b44c95623f8a8ec2353",
          "message": "Support setting class on SVG elements",
          "timestamp": "2022-03-21T14:20:46-07:00",
          "tree_id": "eac49223560348c8860d9546b4c414dbce156bf2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3a65c9aca1dde05148c67b44c95623f8a8ec2353"
        },
        "date": 1647897883721,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40548,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 287670,
            "range": "± 1479",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44869,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 64361,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1319,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64701,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "a3bc95c158902c9b632f29bc9daa75c64306e31a",
          "message": "Add set_rc and set_rc_silent methods to Signal",
          "timestamp": "2022-03-21T12:40:16-07:00",
          "tree_id": "3681c68dd84e08febacef6f72bb5ba9ce838b7de",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a3bc95c158902c9b632f29bc9daa75c64306e31a"
        },
        "date": 1647897949016,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40697,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 279998,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46060,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65146,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1307,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63888,
            "range": "± 133",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfd697b5e8cee38c3f2b324e671be88b1c9d1b20",
          "message": "Implement AddAssign and friends for Signal (#397)\n\n* Implement AddAssign and friends for Signal\r\n\r\n* Make GenericNode::event generic over closure type\r\n\r\n* Add missing import to doctest\r\n\r\n* Add tests and fix implementation for Mul and Div",
          "timestamp": "2022-03-21T14:52:10-07:00",
          "tree_id": "1a7f78917304a5c00ca1681f85603798c0ec0871",
          "url": "https://github.com/sycamore-rs/sycamore/commit/cfd697b5e8cee38c3f2b324e671be88b1c9d1b20"
        },
        "date": 1647899763931,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40066,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 281310,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45573,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 64407,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1411,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64045,
            "range": "± 117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75850ef50704c3b4db3c4de3932497314d84486c",
          "message": "Support setting class on SVG elements (#398)",
          "timestamp": "2022-03-21T14:52:30-07:00",
          "tree_id": "7532ce7cee3706d719d3726b431e12f9bbc382a5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/75850ef50704c3b4db3c4de3932497314d84486c"
        },
        "date": 1647899801644,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49696,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 310503,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56398,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 78365,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1471,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77719,
            "range": "± 234",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f471b189ce69216ad3eb0cba11bfc3b57764eb44",
          "message": "Add Signal::modify to mutate a value (#399)\n\n* Add Signal::modify to mutate a value\r\n\r\n* Use .modify() in todomvc example",
          "timestamp": "2022-03-21T15:53:04-07:00",
          "tree_id": "72f98ae9c23c00326135d451256947dab8f81a23",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f471b189ce69216ad3eb0cba11bfc3b57764eb44"
        },
        "date": 1647903440320,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44634,
            "range": "± 3479",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 302569,
            "range": "± 24707",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58271,
            "range": "± 2738",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 80093,
            "range": "± 6502",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1318,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65685,
            "range": "± 4477",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f095d70da958793749c64b6b307a3b6c8cd2efc2",
          "message": "Fix typo in blog post",
          "timestamp": "2022-03-21T16:58:07-07:00",
          "tree_id": "dd657fc12c3c9968cbb6c758eeaea40e04171b3c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f095d70da958793749c64b6b307a3b6c8cd2efc2"
        },
        "date": 1647907321069,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41914,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 256855,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47963,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66430,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1229,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66494,
            "range": "± 109",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "982b83f59fd08fb06b12d47a2552af968065785c",
          "message": "Bump minimist from 1.2.5 to 1.2.6 in /website (#401)\n\nBumps [minimist](https://github.com/substack/minimist) from 1.2.5 to 1.2.6.\r\n- [Release notes](https://github.com/substack/minimist/releases)\r\n- [Commits](https://github.com/substack/minimist/compare/1.2.5...1.2.6)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: minimist\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-03-31T09:48:28-07:00",
          "tree_id": "54cda9b97ad30edcead7b4f78d7c7288359c20fc",
          "url": "https://github.com/sycamore-rs/sycamore/commit/982b83f59fd08fb06b12d47a2552af968065785c"
        },
        "date": 1648745528703,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43288,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 254523,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48808,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 68483,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1211,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65368,
            "range": "± 104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aac8b3a86ba3355edc172631ad418d373021479b",
          "message": "Fix misspelled tag (#402)",
          "timestamp": "2022-04-02T16:13:54-07:00",
          "tree_id": "8de3ab5804f5aff4b400c781209b50235a31730d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/aac8b3a86ba3355edc172631ad418d373021479b"
        },
        "date": 1648941463676,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43276,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 259161,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49781,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66472,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1220,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65310,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff34f393db357100c9d7e9c2def4ab45d73b2f23",
          "message": "Allow field init shorthand for component prop fields (#403)\n\n* Allow field init shorthand\r\n\r\n* Test for field init shorthand",
          "timestamp": "2022-04-04T10:03:38-07:00",
          "tree_id": "e2049eb0d3679c5e5471f12520503a880de7bfed",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ff34f393db357100c9d7e9c2def4ab45d73b2f23"
        },
        "date": 1649092078335,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51109,
            "range": "± 1809",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 311555,
            "range": "± 11052",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55448,
            "range": "± 3526",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 77524,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1456,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75734,
            "range": "± 3968",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c8ba236cef2d62a5b51d36ffc217e281af0c4326",
          "message": "Re-export render_to_string_await_suspense at top level",
          "timestamp": "2022-04-06T20:21:12-07:00",
          "tree_id": "cd2079a8f1a085bf4708f0f11d40b3437f5a0f81",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c8ba236cef2d62a5b51d36ffc217e281af0c4326"
        },
        "date": 1649301937853,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51437,
            "range": "± 3370",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 292864,
            "range": "± 16765",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54385,
            "range": "± 4470",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74133,
            "range": "± 3627",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1357,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74207,
            "range": "± 4224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "aad3684157f19a68a6b96cee8e8b432098fe6a0f",
          "message": "Make nodes rendered in suspense also run in hydration context",
          "timestamp": "2022-04-06T20:47:56-07:00",
          "tree_id": "4270c31d90efcf8ff5376727ef0b781448bec964",
          "url": "https://github.com/sycamore-rs/sycamore/commit/aad3684157f19a68a6b96cee8e8b432098fe6a0f"
        },
        "date": 1649303509654,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40909,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 286962,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 43930,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65073,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1299,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62937,
            "range": "± 342",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2705414398f4132e7f016c1f7a5ef74d9f223e88",
          "message": "Add missing cfg feature flag",
          "timestamp": "2022-04-06T20:59:26-07:00",
          "tree_id": "41a9c9d67e289f3d61321cfcb6aed26da4af4bd5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2705414398f4132e7f016c1f7a5ef74d9f223e88"
        },
        "date": 1649304255274,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 56205,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 354112,
            "range": "± 15342",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 60799,
            "range": "± 1861",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 86612,
            "range": "± 6813",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1595,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 84218,
            "range": "± 2783",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2bc26465699c0e03b7840f36f7150c0d454d98db",
          "message": "cargo fmt",
          "timestamp": "2022-04-09T15:31:10-07:00",
          "tree_id": "db218c57b517e22fafdb833406ab2e5f7e39bc9c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2bc26465699c0e03b7840f36f7150c0d454d98db"
        },
        "date": 1649543913742,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38642,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 282189,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46493,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66914,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1351,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63713,
            "range": "± 96",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "85274bf24177c8ff3ebf3f66f8354fcd6739c25c",
          "message": "Add a workflow for checking with cargo fmt",
          "timestamp": "2022-04-09T15:34:45-07:00",
          "tree_id": "8e155ae7333df5ba1353aa5e05adec549ed542f3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/85274bf24177c8ff3ebf3f66f8354fcd6739c25c"
        },
        "date": 1649543923670,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38160,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 283553,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46228,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66563,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1382,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64383,
            "range": "± 97",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6339e58ddd5dd912d4cfe16320ea70db7015249c",
          "message": "Fix clippy suggestion",
          "timestamp": "2022-04-09T15:45:32-07:00",
          "tree_id": "c271e97d9ca284c79ac825ff62b36d861d4fcb61",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6339e58ddd5dd912d4cfe16320ea70db7015249c"
        },
        "date": 1649544604474,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50270,
            "range": "± 2329",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 314407,
            "range": "± 15376",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55773,
            "range": "± 3666",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 79341,
            "range": "± 5313",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1412,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73644,
            "range": "± 6197",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "e21beca7c6488a6efb5438feccc29aeee01e24ea",
          "message": "v0.8.0-beta.4",
          "timestamp": "2022-04-09T15:57:28-07:00",
          "tree_id": "c108234cb72420897176ee159c19b57f3d204111",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e21beca7c6488a6efb5438feccc29aeee01e24ea"
        },
        "date": 1649545286583,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38446,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 291872,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46676,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 68213,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1338,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63909,
            "range": "± 156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaabe008b990336f772b1f3d9d9919f87e5b306f",
          "message": "Slightly simplify the http-request example\n\nRemove useless div and useless class attribute",
          "timestamp": "2022-04-10T16:39:20-07:00",
          "tree_id": "05fc613c6b020836014fc4c63a200ae1273a655c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/aaabe008b990336f772b1f3d9d9919f87e5b306f"
        },
        "date": 1649634198645,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42785,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 240634,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 43195,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 205297,
            "range": "± 2140",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1287,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66361,
            "range": "± 181",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7b98d59703b2a003d0a81055e1c8da4f7218ca2c",
          "message": "Add functions to create signals from Rc",
          "timestamp": "2022-04-10T17:09:07-07:00",
          "tree_id": "27ad9cb6e733c6ddab97584b8ec559c2ca34b279",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7b98d59703b2a003d0a81055e1c8da4f7218ca2c"
        },
        "date": 1649636003288,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38369,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 295744,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45753,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66667,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1335,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63406,
            "range": "± 216",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "e0f1d2299f2ae8a229f762803ea1c5068ad09fd2",
          "message": "Add an on_mount wrapper around queueMicrotask",
          "timestamp": "2022-04-10T17:44:00-07:00",
          "tree_id": "0cbe82b30b367eae1e4eb8609f3c346b77b00c0b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e0f1d2299f2ae8a229f762803ea1c5068ad09fd2"
        },
        "date": 1649638079843,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42839,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 272510,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50413,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67612,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1265,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66506,
            "range": "± 141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewaldhorn@gmail.com",
            "name": "Ewald",
            "username": "ewaldhorn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41fc140675389389b10d1175de260cf9f51ebb5d",
          "message": "Fix spelling mistake in README.md (#408)\n\nReplace 'cheek' with 'check'.",
          "timestamp": "2022-04-12T11:16:05-07:00",
          "tree_id": "ea69916570703a8a4ec29b789df219c501066543",
          "url": "https://github.com/sycamore-rs/sycamore/commit/41fc140675389389b10d1175de260cf9f51ebb5d"
        },
        "date": 1649787601787,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 37900,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 241744,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44386,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60449,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1144,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58811,
            "range": "± 239",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7584042561b72e77e00edff5a0beb35bd9f2db3f",
          "message": "Remove spellcheck from boolean attributes",
          "timestamp": "2022-04-21T11:05:26-07:00",
          "tree_id": "415fedb8f27b6f1e31e3e837c4a76da3211e9348",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7584042561b72e77e00edff5a0beb35bd9f2db3f"
        },
        "date": 1650564565640,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39854,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 301303,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45122,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65936,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1320,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64907,
            "range": "± 131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b4ecbfd91aec5ae0c9cbe2589465f10cf80f55",
          "message": "Fix some macro edge cases and improve macro hygiene/diagnostics (#413)\n\n* Slightly improve component macro diagnostics\r\n\r\n* Make async component macro more hygienic\r\n\r\n* Add component with props UI tests\r\n\r\n* Improve component macro diagnostic spans\r\n\r\n* Run UI tests for coverage\r\n\r\n* Add TRYBUILD: wip to code coverage CI\r\n\r\n* TRYBUILD=overwrite\r\n\r\n* Better span for dangerously_set_inner_html with children error\r\n\r\n* cargo fmt\r\n\r\n* cargo clippy",
          "timestamp": "2022-04-26T15:17:43-07:00",
          "tree_id": "aac7acd4e3d95394b689f17d72b9bb8ee88444f7",
          "url": "https://github.com/sycamore-rs/sycamore/commit/97b4ecbfd91aec5ae0c9cbe2589465f10cf80f55"
        },
        "date": 1651011749885,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49846,
            "range": "± 2672",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 327873,
            "range": "± 16729",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57550,
            "range": "± 3228",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 80118,
            "range": "± 4798",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1486,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78405,
            "range": "± 4140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "e21b5767c2000b50f35c256fb9fc1b242c8263c3",
          "message": "Fix documentation typos",
          "timestamp": "2022-04-29T02:44:38Z",
          "tree_id": "700c78520cf7d3ac4c8b58833429821c6fdf9f9e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e21b5767c2000b50f35c256fb9fc1b242c8263c3"
        },
        "date": 1651200546415,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 53888,
            "range": "± 2966",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 318459,
            "range": "± 3047",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58893,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 81282,
            "range": "± 3178",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1598,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 79576,
            "range": "± 576",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7365d2a5efeb3b8bcbe528d531cba97318e1e1e2",
          "message": "Use bumpalo instead of hand-rolled arena implementation (#407)\n\n* Use bumpalo instead of hand-rolled arena implementation\r\n\r\n* allow using arena to allocate arbitrary boxes\r\n\r\n* Fix compile errors\r\n\r\n* Appease clippy\r\n\r\n* Allocate the EffectState in the arena\r\n\r\n* Fix UI test\r\n\r\n* Remove unused field from ScopeInner",
          "timestamp": "2022-04-28T20:34:31-07:00",
          "tree_id": "93f9949b9ce999171bb940d0ec93a6d44e966351",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7365d2a5efeb3b8bcbe528d531cba97318e1e1e2"
        },
        "date": 1651203554658,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51462,
            "range": "± 2391",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 317850,
            "range": "± 10796",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62518,
            "range": "± 4402",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 95512,
            "range": "± 9519",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1525,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 76425,
            "range": "± 9327",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0b0bbb7c14e41e67f9cf1e55b6d7151c98ee7d7",
          "message": "Simplify `Suspense` code and add finished callback to `transition.start` (#414)\n\n* Simplify Suspense code and add additional param to transition.start\r\n\r\n* Fix comment\r\n\r\n* Improve transition unit test",
          "timestamp": "2022-04-29T19:13:16-07:00",
          "tree_id": "b826a2cfaced29a3a7f891be70497359f8aec7e2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b0b0bbb7c14e41e67f9cf1e55b6d7151c98ee7d7"
        },
        "date": 1651285081219,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50049,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 312209,
            "range": "± 16772",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58032,
            "range": "± 3540",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 89119,
            "range": "± 5894",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1407,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74589,
            "range": "± 4499",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "73768f923019a4c2a2f59908d3848c5945126daa",
          "message": "Improve span for empty props mismatched type",
          "timestamp": "2022-04-30T19:31:18Z",
          "tree_id": "d75ca058cd9f24c598d5da386ab822b187690b8f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/73768f923019a4c2a2f59908d3848c5945126daa"
        },
        "date": 1651347372412,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50572,
            "range": "± 2471",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 313465,
            "range": "± 11254",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 68034,
            "range": "± 5021",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 101449,
            "range": "± 4183",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1547,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80586,
            "range": "± 5314",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "864f158717a03723c091789764e8f7c8c8a6b1e0",
          "message": "Add NoHydrate and NoSsr utility components (#409)\n\n* Add NoHydrate and NoSsr components\r\n\r\n* Add missing feature flags\r\n\r\n* Fixes\r\n\r\n* Add missing hydration completed\r\n\r\n* Add example usage to examples/hydrate\r\n\r\n* Add some tests for NoHydrate and NoSsr\r\n\r\n* cargo fmt",
          "timestamp": "2022-04-30T13:35:59-07:00",
          "tree_id": "c3d1fac7a69ae5ea2f7cbc722579f923b72729a6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/864f158717a03723c091789764e8f7c8c8a6b1e0"
        },
        "date": 1651351193556,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40000,
            "range": "± 2114",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 246620,
            "range": "± 13283",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 52660,
            "range": "± 3206",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 78993,
            "range": "± 5755",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1213,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63926,
            "range": "± 3543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "1564724415d7f47e61914a339af8c683006b901c",
          "message": "Add missing cfg(feature = \"hydrate\") to prop structs",
          "timestamp": "2022-04-30T20:48:31Z",
          "tree_id": "b6f548f6a1c31a2270a711cfb77ea4ab36076a74",
          "url": "https://github.com/sycamore-rs/sycamore/commit/1564724415d7f47e61914a339af8c683006b901c"
        },
        "date": 1651351949052,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39823,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 323989,
            "range": "± 1373",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50332,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 77105,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1335,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63900,
            "range": "± 158",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "111ab46aa9180d52420041eaf224cc54e6ea5a2c",
          "message": "Rename template to view in fn hydrate",
          "timestamp": "2022-04-30T20:59:45Z",
          "tree_id": "3120461220c90c1a9991a677159866e39831228c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/111ab46aa9180d52420041eaf224cc54e6ea5a2c"
        },
        "date": 1651352628658,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41505,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 259094,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54601,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 82619,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1292,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66237,
            "range": "± 117",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "62a4ecc50f67f8083ae0e615a5579ee21ef50465",
          "message": "Add use_context_or_else_ref utility",
          "timestamp": "2022-04-30T21:14:47Z",
          "tree_id": "c50db2c562aacbc4683eb458d903a3549161762c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/62a4ecc50f67f8083ae0e615a5579ee21ef50465"
        },
        "date": 1651353546962,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41846,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 254401,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 53084,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 83212,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66886,
            "range": "± 90",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "5284b8de87fb731ea19642e81df370c178ebd159",
          "message": "v0.8.0-beta.5",
          "timestamp": "2022-04-30T21:18:36Z",
          "tree_id": "db841348ff37986a52a688316f17341b7111c014",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5284b8de87fb731ea19642e81df370c178ebd159"
        },
        "date": 1651353754816,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42899,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 253338,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 53289,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 81172,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1298,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 57783,
            "range": "± 295",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9e7623a366c92ffcfa7bc362cddee395500e44c",
          "message": "Handle parsing of child view with attributes (#417)\n\nTest with component using function syntax\r\n\r\nCo-authored-by: danielalvsaaker <daniel.alvsaaker@protonmail.com>",
          "timestamp": "2022-05-07T12:23:54-07:00",
          "tree_id": "fbac4f3db6a61c31643765f0b126a8f08c41b587",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c9e7623a366c92ffcfa7bc362cddee395500e44c"
        },
        "date": 1651951706508,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39211,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 280470,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 51946,
            "range": "± 543",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 79624,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1360,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64704,
            "range": "± 207",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49135bde95d6903507fbac1c67ab8c699f92b7a0",
          "message": "Add the http-request-builder example (#418)\n\n* Add the http-request-builder example\r\n\r\nThis adds the same example as the http-request but using the builder\r\nsyntax.\r\n\r\nMost of the code is the same and a fair degree of the change from macro\r\nto builder syntax is trivial. Using `Suspense` with the builder syntax\r\nis not covered in the documentation. This also shows off that structs\r\nthat derive `Prop` have public builders which may be required using the\r\nbuilder syntax - such as with `SuspenseProps`.\r\n\r\n* Add http-request-builder to examples README table\r\n\r\n* Update title in index.html\r\n\r\nMake title more consistent with other examples\r\n\r\nCo-authored-by: Luke Chu <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-05-08T21:40:43-07:00",
          "tree_id": "1a6512a83bfe1a7bc660defc28ad27e19c7f389b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/49135bde95d6903507fbac1c67ab8c699f92b7a0"
        },
        "date": 1652071554914,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 52580,
            "range": "± 2058",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 316806,
            "range": "± 9690",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 63840,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 97466,
            "range": "± 3703",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1561,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 82477,
            "range": "± 4045",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffa26f73de8ab139e50457525bc287bda5653612",
          "message": "Fix destructuring async props (#419)\n\n* Add failing trybuild test\r\n\r\nAdds a test for destructed struct pattern using an async component that\r\nis currently failing just like in #410.\r\n\r\n* Fix destructuring props in async components\r\n\r\nThis change fixes `#[component]` proc macro generation to support the\r\nstruct destructured pattern. This was different than non-async structs as\r\nasync structs are converted into non-async structs.\r\n\r\n* Remove map and unwrap early\r\n\r\nWe can unwrap so avoid the nesting with map and just unwrap immediately\r\nand perform the match on the prop argument.\r\n\r\n* Remove incorrect comment regarding sync args\r\n\r\n* Improve test to include generic and lifetimes\r\n\r\nReplace the simple destructuring test with the more complicated one to\r\nshow that destructuring works even with lifetimes and generics\r\nincluded.\r\n\r\n* Fix async component test\r\n\r\nMakes the `AsyncComponentWithPropDestructuring` function actually async..",
          "timestamp": "2022-05-10T08:57:33-07:00",
          "tree_id": "4aa87c18b77259fd4035d38d6ec82ee47cffccf2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ffa26f73de8ab139e50457525bc287bda5653612"
        },
        "date": 1652198527874,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44841,
            "range": "± 3417",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 282410,
            "range": "± 13868",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58849,
            "range": "± 5035",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 90924,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1355,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73606,
            "range": "± 3421",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukewchu@outlook.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "33c4f0f12c5173613563795dac420b68ab628d61",
          "message": "Drop references in reverse order",
          "timestamp": "2022-05-14T18:46:40Z",
          "tree_id": "3caed4910b39f25fec030be577f55fbb43ca712c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/33c4f0f12c5173613563795dac420b68ab628d61"
        },
        "date": 1652554269631,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51721,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 308415,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 63570,
            "range": "± 2800",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 96194,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1525,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 79671,
            "range": "± 1212",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arctic_hen7@pm.me",
            "name": "arctic_hen7",
            "username": "arctic-hen7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3e39e57afcfc5432bc62733cf93038b7b2592a",
          "message": "Add support for `body` (#420)\n\n* feat: added support for `body` element\r\n\r\n* Fix http-request-builder example\r\n\r\nThe previous change added the `<body>` html tag which conflicts with the identifiers used in this example\r\n\r\n* Satisfy cargo clippy\r\n\r\nCo-authored-by: Luke Chu <lukewchu@outlook.com>",
          "timestamp": "2022-05-16T09:50:59-07:00",
          "tree_id": "db7680777b3ec78e02a287adf1c41d3e2c7b05ce",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3b3e39e57afcfc5432bc62733cf93038b7b2592a"
        },
        "date": 1652720161513,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55658,
            "range": "± 2452",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 341514,
            "range": "± 17191",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 69653,
            "range": "± 2487",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 103584,
            "range": "± 5362",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1631,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83717,
            "range": "± 4079",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3293b1d4744113e68486f9daee3579e2f3cabf5e",
          "message": "Extract `sycamore` crate into multiple crates (#416)\n\n* Create a new sycamore-core crate\r\n\r\n* Fix compile errors\r\n\r\n* Add missing feature flag\r\n\r\n* Move noderef.rs back to sycamore crate\r\n\r\n* Fix remove logic in reconcile_fragments\r\n\r\n* Fix doctests\r\n\r\n* perf: remove useless dyn_into() when static also works\r\n\r\n* Update builder API to use free functions\r\n\r\nThis is a BREAKING CHANGE\r\n\r\n* Create sycamore-web crate\r\n\r\n* Move more modules into sycamore-core crate\r\n\r\n* Restructure wip\r\n\r\n* cargo fmt\r\n\r\n* Move DomNode, HydrateNode, and SsrNode to sycamore-web\r\n\r\n* Fix compile errors when rebasing\r\n\r\n* Restructure sycamore-web exports\r\n\r\n* Fix import ambiguitiy\r\n\r\n* Fix doctests for builder API\r\n\r\n* Fix builder intra-doc link\r\n\r\n* Make SsrNode internal representation private\r\n\r\n* Remove pub from Comment\r\n\r\n* Doc fixes\r\n\r\n* Make sycamore compile without default features\r\n\r\n* Fix compile with no default features on wasm32\r\n\r\n* Fix suspense unit test\r\n\r\n* Fix tests\r\n\r\n* Fix tests and update CI config\r\n\r\n* cargo fmt\r\n\r\n* Fix compile error in motion.rs\r\n\r\n* Fix conditional compilation",
          "timestamp": "2022-05-16T17:43:54-07:00",
          "tree_id": "9ff1b449708ff1382db501de23c7f10ed101a4b4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3293b1d4744113e68486f9daee3579e2f3cabf5e"
        },
        "date": 1652748528934,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 51176,
            "range": "± 3552",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 322712,
            "range": "± 7929",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62908,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 99030,
            "range": "± 3060",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1515,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78689,
            "range": "± 1978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0df5861919a9b4ad6d87b728d23e5bea986db00b",
          "message": "Use create_ref instead of on_cleanup for allocating event handlers (#421)\n\n* Use create_ref instead of on_cleanup for allocating event handlers\r\n\r\n* Remove unsafe transmute of pointer lifetime",
          "timestamp": "2022-05-16T17:55:36-07:00",
          "tree_id": "a372a9fc334866b78f95a9af9ac839b9c58772a9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0df5861919a9b4ad6d87b728d23e5bea986db00b"
        },
        "date": 1652749233028,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54234,
            "range": "± 2371",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 314358,
            "range": "± 7684",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 61922,
            "range": "± 2253",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 97212,
            "range": "± 2718",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1543,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 79864,
            "range": "± 1954",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6860e2bf2c1d9511cd43063196a2a7484588b185",
          "message": "v0.8.0-beta.6",
          "timestamp": "2022-05-16T17:58:45-07:00",
          "tree_id": "fe08e942084574326a0788f0c7137dc53d15c736",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6860e2bf2c1d9511cd43063196a2a7484588b185"
        },
        "date": 1652749384586,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39002,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 269504,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50623,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 78818,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1367,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64363,
            "range": "± 128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "977baf051e9e40323a85dd0fbd88e2c7f8bb3a5d",
          "message": "Remove some allocations in `sycamore-reactive` (#422)\n\n* Make SignalEmitter::trigger_subscribers slightly faster\r\n\r\n* Reset subscribers in trigger_subscribers\r\n\r\n* Use create_ref instead of Rc in create_selector_with\r\n\r\n* Use ahash in sycamore-reactive\r\n\r\n* Remove useless box around create_effect_scoped\r\n\r\n* Simplify map_indexed and map_keyed\r\n\r\nThis removes quite a few allocations, Rcs, and unsafe\r\n\r\n* Make bump private in arena",
          "timestamp": "2022-05-20T10:20:47-07:00",
          "tree_id": "4cf204306e0cfd80ed5c52a0657d2b5d847c4888",
          "url": "https://github.com/sycamore-rs/sycamore/commit/977baf051e9e40323a85dd0fbd88e2c7f8bb3a5d"
        },
        "date": 1653067547371,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40875,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 248319,
            "range": "± 20784",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 66704,
            "range": "± 3425",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 89585,
            "range": "± 6408",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1491,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78791,
            "range": "± 4845",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "487877f2aee232b4a04c0dd6589a3b2240d292d3",
          "message": "Simplify reconcile_fragments (#423)",
          "timestamp": "2022-05-20T13:19:37-07:00",
          "tree_id": "46fa1399c8dee377dd3f852efbc376be651c3c60",
          "url": "https://github.com/sycamore-rs/sycamore/commit/487877f2aee232b4a04c0dd6589a3b2240d292d3"
        },
        "date": 1653078288811,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42247,
            "range": "± 3118",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 261363,
            "range": "± 15661",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 78168,
            "range": "± 4333",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 97493,
            "range": "± 6157",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1650,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 85145,
            "range": "± 5545",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "24f12846c8328c85352887c7e15ccceb842e005e",
          "message": "Remove `builder` feature doc on website (#425)\n\nRemove builder feature doc on website\r\n\r\nThe builder feature flag was removed in #416 but the website still\r\ncontained a sentence about adding the feature flag before using the\r\nbuilder syntax.",
          "timestamp": "2022-05-22T08:30:46-07:00",
          "tree_id": "07b4335b67d6bfb2847dc6eaae6fad22b9617831",
          "url": "https://github.com/sycamore-rs/sycamore/commit/24f12846c8328c85352887c7e15ccceb842e005e"
        },
        "date": 1653233710365,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36049,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 205394,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54309,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 76541,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1287,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66574,
            "range": "± 380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc30dfa81d47a1c7c19b6f5f0b2e12838e27a719",
          "message": "Fix `scope_depth` to return 0 for root scope (#424)\n\n* Add `scope_depth` tests\r\n\r\n* Fix `scope_depth` to return 0 for root scope\r\n\r\n* Update to simpler implementation\r\n\r\n* Add the SAFETY comment back in",
          "timestamp": "2022-05-25T15:10:13-07:00",
          "tree_id": "8ce70794b79c444729b4806482d00ca668a161b9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bc30dfa81d47a1c7c19b6f5f0b2e12838e27a719"
        },
        "date": 1653516877130,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34249,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 227435,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 52346,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72522,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1354,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64647,
            "range": "± 124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94eef354f3bc6b7e416caa67225264d292e0553a",
          "message": "Add missing crates to rustdoc command for website",
          "timestamp": "2022-05-26T20:50:08Z",
          "tree_id": "81292389f7f17f8e82c36afe2cd93fbbd969c35d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/94eef354f3bc6b7e416caa67225264d292e0553a"
        },
        "date": 1653598487984,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36392,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 206906,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55275,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74178,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1277,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66453,
            "range": "± 70",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f58fe37599e125fdc4a85cbd51e4e1c3d359791",
          "message": "Fix removing old nodes from parent (#428)\n\nFix removal node condition in reconcile_fragments",
          "timestamp": "2022-05-30T14:57:01-07:00",
          "tree_id": "27e25a9ccbfa7929ca65a1f14b4ccb986485bc94",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5f58fe37599e125fdc4a85cbd51e4e1c3d359791"
        },
        "date": 1653948079434,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36338,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 214722,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55021,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74363,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1306,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69142,
            "range": "± 130",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "215a0152d04146de718fa91170bd4770684a0e3c",
          "message": "Fix default Unit property on Component (#431)\n\n* Fix default unit Property on Component\r\n\r\nRemoves the adding of a default `()` unit property when none are\r\nspecified in the Component definition.\r\n\r\nFixes the above assumption in the `view` macro codegen.\r\n\r\n* Remove Prop impl for Unit",
          "timestamp": "2022-06-08T07:35:32-07:00",
          "tree_id": "1ef2928481bf7d807919b37b8a72b34baed67b5c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/215a0152d04146de718fa91170bd4770684a0e3c"
        },
        "date": 1654699198759,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31751,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 215284,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45625,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 58003,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1325,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63309,
            "range": "± 90",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53ec292b33bac79b68c43cbe21d9062b40dc4929",
          "message": "Add a generic `from_web_sys` function (#432)\n\n* Add a generic from_web_sys function\r\n\r\nAdds a new function that creates a `GenericNode` from a\r\n`web_sys::Element` and depending on the type will reuse\r\nthe element in the DOM.\r\n\r\n* Fix suggestions\r\n\r\n* Fix panic case and imports",
          "timestamp": "2022-06-11T08:57:24-07:00",
          "tree_id": "3f1f9fd72965308bd38664bab5d543df08f87752",
          "url": "https://github.com/sycamore-rs/sycamore/commit/53ec292b33bac79b68c43cbe21d9062b40dc4929"
        },
        "date": 1654963298761,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36394,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 205556,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48699,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 61046,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1279,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65711,
            "range": "± 352",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "m.cripps1@uni.brighton.ac.uk",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b68c9df0c49b0f84153424d8dd6401c82b72155",
          "message": "Add doc test example for `from_web_sys` (#436)\n\n* Add doc test example for `from_web_sys`\r\n\r\n* Remove comment line in example\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-06-12T19:23:58-07:00",
          "tree_id": "8b9c2e0b4ceebed6cf09862808ac415858a98745",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8b68c9df0c49b0f84153424d8dd6401c82b72155"
        },
        "date": 1655087343292,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44622,
            "range": "± 3664",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 248342,
            "range": "± 14994",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57764,
            "range": "± 4508",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 70811,
            "range": "± 6854",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1634,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78626,
            "range": "± 4265",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43726912+mc1098@users.noreply.github.com",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95a7e14ab52ad12329fc27728e8c428650b931df",
          "message": "Add the `prop:*` directive to the view macro (#435)\n\n* Add the `prop:*` directive to the view macro\r\n\r\nAdds the ability to set properties directly in the view macro that\r\naccepts any value that can be coverted into the `JsValue`.\r\n\r\nSupports both static and dynamic values in the same manner that\r\nattributes do currently.\r\n\r\nUpdates some of the examples to use the new directive when the type can\r\nbe used directly as a property instead of cloning or serializing the\r\nvalue.\r\n\r\n* Add test for static property value\r\n\r\nChecks that literal values are accepted as property values.\r\n\r\nCo-authored-by: mc1098 <m.cripps1@uni.brighton.ac.uk>",
          "timestamp": "2022-06-18T13:38:54-07:00",
          "tree_id": "4e46daefe94763ed2058dc7dba50084413ec8fad",
          "url": "https://github.com/sycamore-rs/sycamore/commit/95a7e14ab52ad12329fc27728e8c428650b931df"
        },
        "date": 1655585034875,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39112,
            "range": "± 2007",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 229889,
            "range": "± 10344",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54326,
            "range": "± 3530",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 69156,
            "range": "± 3797",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1498,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75547,
            "range": "± 4857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alsuren@gmail.com",
            "name": "David Laban",
            "username": "alsuren"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "adc2abb59bd595da694438c0ae906eec797a8385",
          "message": "Add .dangerously_set_inner_html() to the builder API (#378)\n\n* add .inner_html() builder method\r\n\r\n* Fix errors and add dynamic variant\r\n\r\n* Update builder example title\r\n\r\n* Fix doctests\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-06-18T21:39:29Z",
          "tree_id": "afdb4fbd05df34119708bdefb36bf2b3f19a8a43",
          "url": "https://github.com/sycamore-rs/sycamore/commit/adc2abb59bd595da694438c0ae906eec797a8385"
        },
        "date": 1655588626959,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35649,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 207005,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47437,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59455,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1276,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66414,
            "range": "± 84",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43726912+mc1098@users.noreply.github.com",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c06c9b41bfd6e657bfc7f5d12d4c40b8d006a20",
          "message": "Add `trigger_subscribers` to `Signal` (#438)\n\n* Add `trigger_subscribers` to `Signal`\r\n\r\n* Update internals to use `self.trigger_subscribers`\r\n\r\nCo-authored-by: mc1098 <m.cripps1@uni.brighton.ac.uk>",
          "timestamp": "2022-06-20T16:25:44-07:00",
          "tree_id": "e03ec7a6680cebad21a084c188ee07ed351fac84",
          "url": "https://github.com/sycamore-rs/sycamore/commit/1c06c9b41bfd6e657bfc7f5d12d4c40b8d006a20"
        },
        "date": 1655767816152,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35688,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 217130,
            "range": "± 11531",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48381,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 52028,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 58105,
            "range": "± 50",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arctic_hen7@pm.me",
            "name": "arctic_hen7",
            "username": "arctic-hen7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8deaeef8e7a1ee263a025c12bb8b80830ec82c3",
          "message": "Add Debug implementations for all public items (#441)\n\nfeat: added Debug implementations to everything",
          "timestamp": "2022-06-23T10:31:24-07:00",
          "tree_id": "5f916ad799c261bcf2a30e9099f81f7e0ac09331",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c8deaeef8e7a1ee263a025c12bb8b80830ec82c3"
        },
        "date": 1656005749097,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30291,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 224904,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44693,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57719,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1428,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62827,
            "range": "± 133",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arctic_hen7@pm.me",
            "name": "arctic_hen7",
            "username": "arctic-hen7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a865f15d5aec851df5d8f9cb8aa055355006a37a",
          "message": "Add support for `struct` `Route`s (#434)\n\n* feat: added support for `struct` `Route`s\r\n\r\nThis makes artic-hen7/perseus#151 and more advanced custom router\r\npatterns feasible.\r\n\r\n* fix: made `try_from_segments()` not take `&self`\r\n\r\nThis stuffed up some tests, and I'm fairly certain it actually isn't necessary.\r\n\r\n* fix: used absolute path to `Default` in proc macro\r\n\r\n* refactor: moved comment",
          "timestamp": "2022-06-26T09:04:01-07:00",
          "tree_id": "28ccc11282e749f6ad08c3e6808fe740222ba6c9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a865f15d5aec851df5d8f9cb8aa055355006a37a"
        },
        "date": 1656259719642,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31842,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 214438,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44583,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57931,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1385,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63020,
            "range": "± 125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43726912+mc1098@users.noreply.github.com",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "496eef3ef89d1acac2a659fba6b0c131a7179ae0",
          "message": "Update boolean attributes in the view macro (#440)\n\n* Update boolean attributes in the view macro\r\n\r\nThis adds some attributes but mostly removes attributes which are not\r\npart of the standard.\r\n\r\n* Add WHATWG link for attributes\r\n\r\nCo-authored-by: mc1098 <m.cripps1@uni.brighton.ac.uk>",
          "timestamp": "2022-06-26T09:05:57-07:00",
          "tree_id": "76b42a7117030665b0cd3d2963fb61f13827e7cf",
          "url": "https://github.com/sycamore-rs/sycamore/commit/496eef3ef89d1acac2a659fba6b0c131a7179ae0"
        },
        "date": 1656259834433,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30472,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 212892,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44589,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57826,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1400,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62965,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "ea676489715c02c8e9cd57f41ed520b9691f124d",
          "message": "v0.8.0-beta.7",
          "timestamp": "2022-06-26T09:20:28-07:00",
          "tree_id": "1a9d23ed69d6668faf20fe49924644b872b602a9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ea676489715c02c8e9cd57f41ed520b9691f124d"
        },
        "date": 1656260727673,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35654,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 208726,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48073,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60576,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1309,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66178,
            "range": "± 98",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43726912+mc1098@users.noreply.github.com",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41af3c101413f834d55e0893d856a38d196d894f",
          "message": "Add debug impl for RouterBaseProps (#442)",
          "timestamp": "2022-06-26T16:59:31-07:00",
          "tree_id": "d3be6267c3a891d8d46b1f99c636c6a57c68eb46",
          "url": "https://github.com/sycamore-rs/sycamore/commit/41af3c101413f834d55e0893d856a38d196d894f"
        },
        "date": 1656288249687,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31378,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 221881,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46391,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57206,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1358,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63232,
            "range": "± 99",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugenesvk@users.noreply.github.com",
            "name": "Evgeny",
            "username": "eugenesvk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26ba0a91ddcd25b5a7e6c22d337ce99ea48f3856",
          "message": "Fix a typo in hello_world.md (#443)",
          "timestamp": "2022-06-28T14:42:58Z",
          "tree_id": "4f4e039a23cfd8ed0e58f5734e8464b39b2da8c0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/26ba0a91ddcd25b5a7e6c22d337ce99ea48f3856"
        },
        "date": 1656427700676,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42808,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 252603,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 59282,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72700,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1567,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 79312,
            "range": "± 1346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99ca4f63f1e560dab8ae090afd3dc2eec52264de",
          "message": "Print hydration key when an element tag mismatch is encountered (#444)\n\n* Print hydration key when element tag mismatch\r\n\r\n* Fix line endings",
          "timestamp": "2022-06-28T20:28:02-07:00",
          "tree_id": "2cd8f441d88f1d005aba6475c3f21015ce4043bc",
          "url": "https://github.com/sycamore-rs/sycamore/commit/99ca4f63f1e560dab8ae090afd3dc2eec52264de"
        },
        "date": 1656473579078,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41597,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 234840,
            "range": "± 6782",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 52768,
            "range": "± 2639",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72128,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1557,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78351,
            "range": "± 1142",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugenesvk@users.noreply.github.com",
            "name": "Evgeny",
            "username": "eugenesvk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6414fa9ffe6debc9245e0df5111e89eeece2fea",
          "message": "Fix typo in docs/next/basics/iteration.md (#445)\n\nAdded missing curly brackets to a list node inside a view! macro",
          "timestamp": "2022-06-29T09:05:28-07:00",
          "tree_id": "fad6a42813b26ffc582a006a5b6de58d8632964b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b6414fa9ffe6debc9245e0df5111e89eeece2fea"
        },
        "date": 1656519010102,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35529,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 208789,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49064,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60585,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1263,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65876,
            "range": "± 64",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugenesvk@users.noreply.github.com",
            "name": "Evgeny",
            "username": "eugenesvk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5bbf1781a12c5498d20465a56f83710c94df171",
          "message": "Fix wrong import in docs/next/advanced/tweened.md (#446)",
          "timestamp": "2022-06-29T09:05:04-07:00",
          "tree_id": "f7edb44fa6a35f7a2e162772fa3a8c2458f9a784",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e5bbf1781a12c5498d20465a56f83710c94df171"
        },
        "date": 1656519071855,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 45435,
            "range": "± 2625",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 255133,
            "range": "± 16240",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57563,
            "range": "± 6524",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 75702,
            "range": "± 4133",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1586,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78473,
            "range": "± 4548",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43726912+mc1098@users.noreply.github.com",
            "name": "mc1098",
            "username": "mc1098"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62f63c4437396fdf85a9f7335664bf6c7ca4e27b",
          "message": "Refactor web tests (#449)\n\n* Refactor web tests\r\n\r\nAdd utility function for querying elements and html element by selectors.\r\nAdd utility macro for asserting the text content of an element.\r\nAdd assertion to the svg test.\r\n\r\n* Add documentation for new functions and macro",
          "timestamp": "2022-07-02T13:06:16-07:00",
          "tree_id": "a0e45427f323482cf9d08c7c1b4c8d076e71887e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/62f63c4437396fdf85a9f7335664bf6c7ca4e27b"
        },
        "date": 1656792665402,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35497,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 207818,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48441,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 61017,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1269,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65728,
            "range": "± 360",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "johansmitsnl@users.noreply.github.com",
            "name": "Johan Smits",
            "username": "johansmitsnl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "167d3e19a90f12ceaaa3b3a086c959bf76988503",
          "message": "Improve router and components documentation (#451)\n\n* Add Clippy warning non_snake_case to the components\r\n\r\n* Clear confusion on sub routes not need to have name Route derive might\r\nsuggest.\r\n\r\n* Describe how to make nested components\r\n\r\n* Describe how to use default prop values\r\n\r\n* Implemented suggestion of danielalvsaaker\r\n\r\n* More document changes\r\n\r\n* Make changes also to the next documentation\r\n\r\n* Fix indentation in view! macro\r\n\r\nIndentation should be 4 spaces like normal Rust code.\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-07-14T23:35:35-07:00",
          "tree_id": "4ecbdc727d4da228d713552b54e39457d2218339",
          "url": "https://github.com/sycamore-rs/sycamore/commit/167d3e19a90f12ceaaa3b3a086c959bf76988503"
        },
        "date": 1657867174609,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35290,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 212913,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48185,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59623,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1287,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65767,
            "range": "± 73",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba0efba3cc2ef38cb35a01395f833b28e951d18f",
          "message": "Require `{}` or `()` after empty elements in `view!` (#456)\n\n* Require `{}` or `()` after plain elements\r\n\r\n* Fix syntax error in ssr test\r\n\r\n* Fix line endings\r\n\r\n* Change line endings to LF\r\n\r\n* fix ui tests again",
          "timestamp": "2022-07-19T14:32:32-07:00",
          "tree_id": "831e558d9567602e94c4bb5c8c9b7389fb4153f0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ba0efba3cc2ef38cb35a01395f833b28e951d18f"
        },
        "date": 1658266627335,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42094,
            "range": "± 1581",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 262774,
            "range": "± 18458",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57546,
            "range": "± 3968",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72280,
            "range": "± 2448",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1575,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80132,
            "range": "± 3459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49d30f15524e660e52437b278bdf103706f77589",
          "message": "Parse new view syntax (#460)\n\n* Add ui test for missing `()` and `{}` after element\r\n\r\n* Parse new component syntax\r\n\r\n* Parse new component syntax\r\n\r\n* Fix ssr benchmark compiler error",
          "timestamp": "2022-07-25T19:57:20-07:00",
          "tree_id": "6092f687f183c2f041bb109101c1c8d80ea3b9f3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/49d30f15524e660e52437b278bdf103706f77589"
        },
        "date": 1658804494113,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35310,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 211800,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49337,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 61101,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1264,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66031,
            "range": "± 2011",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fbee1c9b74ff8b2438b1faf1a6206efef81eba4",
          "message": "Fix some clippy lints (#462)\n\nFix some new clippy lints in new rustc version",
          "timestamp": "2022-07-25T20:03:54-07:00",
          "tree_id": "60882294e6a6190de28cb8e0f72095d1dfd48095",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9fbee1c9b74ff8b2438b1faf1a6206efef81eba4"
        },
        "date": 1658804882086,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35337,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 207239,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 42926,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 53067,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1264,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65168,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53735aab9ef72b98439b4d2eaeb85a97f7f32775",
          "message": "Relax restriction on `T` in `Keyed` from `Eq` to `PartialEq` (#461)\n\nRelax restriction of T in Keyed from Eq to PartialEq",
          "timestamp": "2022-07-25T20:09:04-07:00",
          "tree_id": "2ae3e286802ffa0601047f824178e8de97e808b7",
          "url": "https://github.com/sycamore-rs/sycamore/commit/53735aab9ef72b98439b4d2eaeb85a97f7f32775"
        },
        "date": 1658805179196,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35309,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 209434,
            "range": "± 11715",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 42910,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60936,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1270,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 67002,
            "range": "± 89",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "eac3c48a13fa3494dc2f0b2b84345432b523fce6",
          "message": "minor: Fix casing of WithCxArg",
          "timestamp": "2022-07-25T20:11:00-07:00",
          "tree_id": "e354f44ff6394c5eb5b0e029d89ff7c28fefeabb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/eac3c48a13fa3494dc2f0b2b84345432b523fce6"
        },
        "date": 1658805300029,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30341,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 231699,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44405,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59500,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1354,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63830,
            "range": "± 139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bb51c3b5a4cef21d4d1b0e6757096b3a2b5e08b",
          "message": "Add more examples/doc tests to rustdocs and update book to latest syntax (#463)\n\n* Add some doc comments and doc tests\r\n\r\n* Update book to latest syntax",
          "timestamp": "2022-07-26T19:13:33-07:00",
          "tree_id": "03b79173c1d6295c488624a544fe258e67a7f5c1",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2bb51c3b5a4cef21d4d1b0e6757096b3a2b5e08b"
        },
        "date": 1658888237717,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30579,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 220099,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44618,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59617,
            "range": "± 2430",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63112,
            "range": "± 133",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75be1ca489c63203f0b83afcc0df8398cb71aaab",
          "message": "Update MSRV to 1.63.0 and remove some unsafes (#470)\n\n* Update MSRV to 1.63.0\r\n\r\n* Remove some unsafes from sycamore-reactive\r\n\r\n* BREAKING: remove redundant Children::call_with_bounded_scope\r\n\r\n* Fix clippy lints introduced in 1.63.0\r\n\r\n* Update ui tests for 1.63.0",
          "timestamp": "2022-08-21T09:13:11-07:00",
          "tree_id": "b871c4e629142eb6fa5890346a0b9956f88af144",
          "url": "https://github.com/sycamore-rs/sycamore/commit/75be1ca489c63203f0b83afcc0df8398cb71aaab"
        },
        "date": 1661098619915,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31644,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 223569,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46660,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 58560,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1338,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62833,
            "range": "± 104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfe8ef27cb2c234499403c9ec84b58ee69fa0556",
          "message": "Allow fragments and dynamic views in `RouterBase` (#471)\n\nAllow fragments and dynamic views in Router",
          "timestamp": "2022-08-27T14:58:48+02:00",
          "tree_id": "9b813c2e61384fc748e4b2857b922e625ec9d14e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/cfe8ef27cb2c234499403c9ec84b58ee69fa0556"
        },
        "date": 1661605387873,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35637,
            "range": "± 2277",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 225313,
            "range": "± 12144",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54768,
            "range": "± 4662",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65094,
            "range": "± 4040",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1372,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72178,
            "range": "± 3711",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "deb98ef9f7be14231bf110413fb2a6d91824acab",
          "message": "Fix hydration with `Router` and `StaticRouter` (#472)\n\nFix hydration with Router and StaticRouter",
          "timestamp": "2022-08-27T14:59:02+02:00",
          "tree_id": "9dbe4b786b0b1721db911649239ebe250a804cf9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/deb98ef9f7be14231bf110413fb2a6d91824acab"
        },
        "date": 1661605535938,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40850,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 240553,
            "range": "± 4030",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58515,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73422,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1615,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78933,
            "range": "± 1608",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd83a30ad6b56d975ebd8b688a103aa92c92e3c9",
          "message": "v0.8\n\nPrepare v0.8 release (#473)\r\n\r\n* Add migration guide for v0.7 to v0.8\r\n\r\n* Rename migration_guides to migration\r\n\r\n* Update changelog\r\n\r\n* Update Cargo.toml descriptions\r\n\r\n* Add release post\r\n\r\n* Update version number.",
          "timestamp": "2022-08-28T13:38:11+02:00",
          "tree_id": "3d337b05fcb3a2b272cb45071f4803ec0bb3d35c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fd83a30ad6b56d975ebd8b688a103aa92c92e3c9"
        },
        "date": 1661686921381,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30712,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 223267,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48097,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59144,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1363,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63123,
            "range": "± 106",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "252639b15225da495bd3f15ba2d4bba56c7645b5",
          "message": "Add v0.8.0 release blog post to news page",
          "timestamp": "2022-08-28T13:48:59+02:00",
          "tree_id": "d870357c43f09b735db2e6831f7c54702c948b6b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/252639b15225da495bd3f15ba2d4bba56c7645b5"
        },
        "date": 1661687579538,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30419,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 225526,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45641,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57117,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1322,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62901,
            "range": "± 88",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "5e0fd42c0242a80ed7da77d400b1398010af3785",
          "message": "Fix v0.8 blog post typo",
          "timestamp": "2022-08-28T13:54:21+02:00",
          "tree_id": "ab3692e47eb9366ca332ac4991497e6697428365",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5e0fd42c0242a80ed7da77d400b1398010af3785"
        },
        "date": 1661687897750,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35767,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 207847,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49741,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60273,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1268,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65652,
            "range": "± 112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b2ef1c0bdf564ec854404a76498df42c308168c",
          "message": "Fix link to builder pattern docs in book for v0.8 release post",
          "timestamp": "2022-08-28T19:41:10+02:00",
          "tree_id": "0793a45568d4a69cf8a92f1067e00665782170dd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4b2ef1c0bdf564ec854404a76498df42c308168c"
        },
        "date": 1661708704560,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35481,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 221081,
            "range": "± 4634",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50146,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 62791,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1275,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65795,
            "range": "± 269",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "74a3718e7dcffa7e72c8744dbf196679d246440d",
          "message": "Update versioned 0.8 docs",
          "timestamp": "2022-08-29T18:10:58+02:00",
          "tree_id": "458d25853fe28b147710885a0a9c9df304e85539",
          "url": "https://github.com/sycamore-rs/sycamore/commit/74a3718e7dcffa7e72c8744dbf196679d246440d"
        },
        "date": 1661789701155,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31078,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 220434,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49738,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59871,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1305,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66361,
            "range": "± 94",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "c2d84befce9de13a381e65e693036ac64f5a5dbe",
          "message": "Fix link to builder API book in migration docs",
          "timestamp": "2022-08-31T10:06:46+02:00",
          "tree_id": "51a25d0dfdded8a6b3078f4aff2f9b3743da7dd6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c2d84befce9de13a381e65e693036ac64f5a5dbe"
        },
        "date": 1661933439256,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35679,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 209359,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49859,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 61427,
            "range": "± 2055",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1291,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65744,
            "range": "± 110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github35764891676564198441@oli-obk.de",
            "name": "Oli Scherer",
            "username": "oli-obk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5de8f760aea42200c7c31bb3a137b148355e4d76",
          "message": "Forward compatibility fix for breakage due to a soundness fix in rustc (#475)",
          "timestamp": "2022-08-31T11:40:16+02:00",
          "tree_id": "ebfed9e84e94c1b93be090ae5d866ad62522f984",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5de8f760aea42200c7c31bb3a137b148355e4d76"
        },
        "date": 1661939074216,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41737,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 242715,
            "range": "± 13714",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 59160,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 70152,
            "range": "± 1879",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1575,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77322,
            "range": "± 970",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbdd575a94239a51abfd2127d901511134f9f173",
          "message": "Avoid possible shadowing of existing bindings in macro expansion (#477)\n\nAvoid possible shadowing of existing bindings",
          "timestamp": "2022-08-31T18:02:41+02:00",
          "tree_id": "8e1db33ae7ec9c1400c44fa7fbe3a6092407fc50",
          "url": "https://github.com/sycamore-rs/sycamore/commit/cbdd575a94239a51abfd2127d901511134f9f173"
        },
        "date": 1661962061546,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35773,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 205371,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48800,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59872,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1288,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65499,
            "range": "± 864",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "1d13fda9e1939d543de8bb866608edf4827f8d8c",
          "message": "Update routing.md docs to 0.8 component props syntax",
          "timestamp": "2022-09-01T14:17:44+02:00",
          "tree_id": "ba806d090af80300e188e7498288c24a01d2edf2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/1d13fda9e1939d543de8bb866608edf4827f8d8c"
        },
        "date": 1662034944023,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41779,
            "range": "± 3995",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 267303,
            "range": "± 16389",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 59395,
            "range": "± 2986",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74740,
            "range": "± 2621",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1586,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 81039,
            "range": "± 5498",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74ddddb2ee1b2fcab6fed32af242c1a5d3e82d0b",
          "message": "Reuse some allocations in `map_keyed` and `map_indexed` (#478)\n\n* Reuse some Vec allocations\r\n\r\n* Simplify code for map_indexed\r\n\r\n* Update js_framework_bench workflow",
          "timestamp": "2022-09-01T16:04:36+02:00",
          "tree_id": "97d89f2eafe29d9e117af9ad4e4b4e950dedc9c3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/74ddddb2ee1b2fcab6fed32af242c1a5d3e82d0b"
        },
        "date": 1662041310156,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35878,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 202504,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49169,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60725,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1276,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65904,
            "range": "± 803",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "4bddf4bfb42afd919afda42adaeef225254bf333",
          "message": "Upgrade ahash dependency to 0.8",
          "timestamp": "2022-09-02T17:42:15+02:00",
          "tree_id": "56804b66f9c837deb582cf8007f978e134f4caf4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4bddf4bfb42afd919afda42adaeef225254bf333"
        },
        "date": 1662133626975,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40838,
            "range": "± 3604",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 249073,
            "range": "± 29017",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 63419,
            "range": "± 7061",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73345,
            "range": "± 5228",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1698,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 80983,
            "range": "± 6953",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "6aab0c2e455c903e4acf936dd148183db892feb1",
          "message": "Revert \"Upgrade ahash dependency to 0.8\"\n\nThis reverts commit 4bddf4bfb42afd919afda42adaeef225254bf333.",
          "timestamp": "2022-09-03T07:29:05+02:00",
          "tree_id": "97d89f2eafe29d9e117af9ad4e4b4e950dedc9c3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6aab0c2e455c903e4acf936dd148183db892feb1"
        },
        "date": 1662183187511,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35359,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 204494,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48721,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59639,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1259,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65201,
            "range": "± 382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7b24afa5a99d54147b52240e1b3512dbbe7b53df",
          "message": "Update UI tests for children",
          "timestamp": "2022-09-03T07:41:02+02:00",
          "tree_id": "6ef23f999e9327d3a3fb79a7e34c75f1465b0fa4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7b24afa5a99d54147b52240e1b3512dbbe7b53df"
        },
        "date": 1662183929295,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41893,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 279714,
            "range": "± 4000",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57546,
            "range": "± 927",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 71615,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1534,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78452,
            "range": "± 3674",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0220bcb5dab88c17bc625193ebca14a37caa88",
          "message": "Add workaround for svg element tags that clash with HTML elements (#479)\n\n* Re-enable the missing svg elements\r\n\r\n* Add some tests for svg",
          "timestamp": "2022-09-03T07:41:27+02:00",
          "tree_id": "93013fe7ca8b6dd2809d9ea70dd0cb1459cc83ac",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0e0220bcb5dab88c17bc625193ebca14a37caa88"
        },
        "date": 1662183942536,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42835,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 245272,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58857,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 71241,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1513,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77644,
            "range": "± 112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "17e9110b2691b1a85668a068aaefb08696ff4189",
          "message": "v0.8.1",
          "timestamp": "2022-09-03T07:57:00+02:00",
          "tree_id": "5f142f5bd05f72da5750066c3c3278b6d813fdf5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/17e9110b2691b1a85668a068aaefb08696ff4189"
        },
        "date": 1662184850649,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30332,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 218662,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45166,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57673,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1317,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63215,
            "range": "± 288",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "e6cc745813da853edd63926f919739c3c6ae7dab",
          "message": "sycamore-macro v0.8.1",
          "timestamp": "2022-09-04T09:34:49+02:00",
          "tree_id": "b49a4dcafad3e01b94858269963f47e9e275c290",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e6cc745813da853edd63926f919739c3c6ae7dab"
        },
        "date": 1662277164162,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35934,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 233310,
            "range": "± 10922",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56834,
            "range": "± 2339",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67433,
            "range": "± 5257",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1501,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78803,
            "range": "± 7367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b48d3f2b52f20d367764203ec6d9b9a97e0a6d57",
          "message": "Inline props (#486)\n\n* Implement inline props\r\n\r\n* Update some examples to use inline_props\r\n\r\n* Add doc comments to generated prop structs\r\n\r\n* Add section in book about inline_props\r\n\r\n* cargo fmt\r\n\r\n* Add UI test for bad component macro arg",
          "timestamp": "2022-09-19T16:42:17+02:00",
          "tree_id": "1f6917bbd86f754d9a7d8706561bd7eb651e1c72",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b48d3f2b52f20d367764203ec6d9b9a97e0a6d57"
        },
        "date": 1663598807184,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41078,
            "range": "± 2375",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 309368,
            "range": "± 14728",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58135,
            "range": "± 3217",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 70914,
            "range": "± 4075",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1510,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74468,
            "range": "± 3473",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d9c3fc6b9783be36b73097aff0137a90f0358214",
          "message": "Implement Default for Children",
          "timestamp": "2022-09-20T22:02:32+02:00",
          "tree_id": "c6bfc0a83434a52b575020dc5aafa2a1c7a457a7",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d9c3fc6b9783be36b73097aff0137a90f0358214"
        },
        "date": 1663704394934,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35683,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 208851,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49070,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59881,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66106,
            "range": "± 1044",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2210e94a66edaa5bf4305ef7bd06c0ca694fdff0",
          "message": "Add impl From<View> for Children",
          "timestamp": "2022-09-20T22:05:27+02:00",
          "tree_id": "079ca73d30eb6b696c3064229ee155121176f735",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2210e94a66edaa5bf4305ef7bd06c0ca694fdff0"
        },
        "date": 1663704616765,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 44070,
            "range": "± 3203",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 271725,
            "range": "± 6510",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62024,
            "range": "± 2590",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73866,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1640,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 83608,
            "range": "± 3378",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "aa4eccb7df767174530958fd3e4d1995b4d9a0df",
          "message": "Fix hydration of nodes created using G::element_with_tag",
          "timestamp": "2022-09-22T20:03:59+02:00",
          "tree_id": "8bc9755cf86058c54178cfe5e619b58f36a4cd19",
          "url": "https://github.com/sycamore-rs/sycamore/commit/aa4eccb7df767174530958fd3e4d1995b4d9a0df"
        },
        "date": 1663870085183,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30875,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 221444,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45413,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56346,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63316,
            "range": "± 459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "7a741f29547ac154269dc653d05e7cd924aa5c5a",
          "message": "cargo fmt",
          "timestamp": "2022-09-22T20:05:01+02:00",
          "tree_id": "792a00b1673f0bcca8b64a013e8a9e1f00216fb2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7a741f29547ac154269dc653d05e7cd924aa5c5a"
        },
        "date": 1663870150949,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30668,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 219168,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44801,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57675,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1338,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 61944,
            "range": "± 170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a7d015b68af1f49430e8800930c4394d7b7bfc8",
          "message": "Add a `Html::to_web_sys` method (#490)\n\nAdd a Html::to_web_sys method\r\n\r\nBREAKING: This is technically a breaking change but is minor enough that it doesn't warrant a major release.",
          "timestamp": "2022-09-22T20:27:39+02:00",
          "tree_id": "718ed3ae1bfa0b35a9ecbaaf48afbb6e2c4e3b41",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2a7d015b68af1f49430e8800930c4394d7b7bfc8"
        },
        "date": 1663871539740,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39731,
            "range": "± 1337",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 258790,
            "range": "± 10346",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62685,
            "range": "± 2260",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66667,
            "range": "± 4273",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1477,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72914,
            "range": "± 3809",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "9d82cdd65fa511a65d40b7bcb74b5d16f4fbd1e7",
          "message": "v0.8.2",
          "timestamp": "2022-09-24T20:59:54+02:00",
          "tree_id": "9565906da16d82c083fa9d0dd86d5fd1e9e89c86",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9d82cdd65fa511a65d40b7bcb74b5d16f4fbd1e7"
        },
        "date": 1664046222696,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30459,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 217353,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45856,
            "range": "± 700",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56150,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1323,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63021,
            "range": "± 251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "bcf311d5a4b1da27ed04fc9a7b430b56cc79e99e",
          "message": "sycamore-core v0.8.2",
          "timestamp": "2022-09-24T21:11:17+02:00",
          "tree_id": "b18bcce80b40ffffbc82f97302188997ca32fc37",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bcf311d5a4b1da27ed04fc9a7b430b56cc79e99e"
        },
        "date": 1664046915515,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30667,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 216051,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46242,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56635,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 62391,
            "range": "± 124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sokratisvasiliou@protonmail.com",
            "name": "Sokratis Vasiliou",
            "username": "sokratisvas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddd9f89743f04bb76f6b07008c234502891f4271",
          "message": "Change NAME_SPACE to NAMESPACE (#482)",
          "timestamp": "2022-09-29T09:53:56+02:00",
          "tree_id": "f35813e4afbcba9bdca7c622d330a4b04682c147",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ddd9f89743f04bb76f6b07008c234502891f4271"
        },
        "date": 1664438296544,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41735,
            "range": "± 740",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 238153,
            "range": "± 3523",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57086,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 69848,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1523,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77098,
            "range": "± 1428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8326aa6fa3fb31c5c5e76fabca22db1fdd52bd83",
          "message": "Improve binding ergonomics for `RcSignal` (#489)\n\n* Allow any signal to be bound\r\n\r\n* Improve signal binding ergonomics for view macro\r\n\r\n* Fix lifetime issue introduced in newer nightly release",
          "timestamp": "2022-10-07T13:41:59+01:00",
          "tree_id": "9cb073909d9b8d2b95db541863daa118ab36176b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8326aa6fa3fb31c5c5e76fabca22db1fdd52bd83"
        },
        "date": 1665146790555,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 37198,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 240567,
            "range": "± 14916",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 54035,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 61755,
            "range": "± 2708",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1481,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 72599,
            "range": "± 6180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20b6069c470a51d2ba6197bb322036e8324ff297",
          "message": "Use fully qualified method calls in macro for bound signals (#499)\n\nUse fully qualified method calls for signal operations",
          "timestamp": "2022-10-08T10:40:17+01:00",
          "tree_id": "b7c0d5d839eab411ceeabfdf228fa764a85b9ae8",
          "url": "https://github.com/sycamore-rs/sycamore/commit/20b6069c470a51d2ba6197bb322036e8324ff297"
        },
        "date": 1665222297666,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42566,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 240674,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 59312,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72076,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1559,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78546,
            "range": "± 229",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "inetpwnz@icloud.com",
            "name": "Daniel Nehrig",
            "username": "danielnehrig"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3e5e42e11dc0a003e24a250f08a5aa65601b21a",
          "message": "Fix wrong tag names for special cased HTML/SVG tag structs\n\nSigned-off-by: Daniel Nehrig <daniel.nehrig@dnehrig.com>\r\n\r\nSigned-off-by: Daniel Nehrig <daniel.nehrig@dnehrig.com>",
          "timestamp": "2022-10-14T21:48:44+01:00",
          "tree_id": "be1c5019f46eb0a2d3cbb3c0f7f8c1f769571c45",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b3e5e42e11dc0a003e24a250f08a5aa65601b21a"
        },
        "date": 1665780768034,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35643,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 216499,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50074,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60848,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1279,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66496,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexisfontaine@users.noreply.github.com",
            "name": "Alexis Fontaine",
            "username": "alexisfontaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8870559b94b0655632acb6412c7bd5d7c43eea34",
          "message": "Rename derive proc-macro `Prop` to `Props` (#503)\n\n* Rename derive proc-macro `Prop` to `Props`\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-10-14T22:08:08+01:00",
          "tree_id": "627c0333f388b4d1288651a39d61b236f9b48ec9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8870559b94b0655632acb6412c7bd5d7c43eea34"
        },
        "date": 1665781986615,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40807,
            "range": "± 2038",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 256843,
            "range": "± 13741",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57397,
            "range": "± 22032",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 72093,
            "range": "± 2937",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1528,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 79028,
            "range": "± 7680",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexisfontaine@users.noreply.github.com",
            "name": "Alexis Fontaine",
            "username": "alexisfontaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11d44a10e5427e188b590a74f80c2abde3a33dfb",
          "message": "Fix MDN documentation link for SVG elements (#505)",
          "timestamp": "2022-10-16T20:16:57+01:00",
          "tree_id": "49b46aac0b97c08c0217bbfa8dddf6f99e63d42c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/11d44a10e5427e188b590a74f80c2abde3a33dfb"
        },
        "date": 1665948062117,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35257,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 201241,
            "range": "± 2233",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48702,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60529,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1307,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65194,
            "range": "± 118",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexisfontaine@users.noreply.github.com",
            "name": "Alexis Fontaine",
            "username": "alexisfontaine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6331a1e96a051f35f5050d456d68fc2eadcc276",
          "message": "Rename the derive macro helper attribute `builder` to `prop` (#504)\n\n* Rename the derive macro helper attribute `builder` to `prop`\r\n\r\n* Remove needless borrows",
          "timestamp": "2022-10-16T20:17:47+01:00",
          "tree_id": "965ad53a9ff971135f6d746f036e8b8e5adcdd02",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f6331a1e96a051f35f5050d456d68fc2eadcc276"
        },
        "date": 1665948109989,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30586,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 214112,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46169,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57044,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1316,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63181,
            "range": "± 551",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "5af3dbc32a3da49d8d30f412f86235eaee858689",
          "message": "Update gitpod Dockerfile",
          "timestamp": "2022-10-17T18:58:54Z",
          "tree_id": "b418715d04decc6ecb12a474013b1ec41cfcdc83",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5af3dbc32a3da49d8d30f412f86235eaee858689"
        },
        "date": 1666033402675,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35303,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 205382,
            "range": "± 2778",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 51265,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60379,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1269,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65431,
            "range": "± 98",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wainwrightml@gmail.com",
            "name": "Mark Wainwright",
            "username": "wainwrightmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee5519cbcb9a5f910b61e4741f136b181bd279f2",
          "message": "Make `NodeRef` Reactive (#508)\n\n* Created a test for noderef reactivity\r\n\r\n* made noderef reactive\r\n\r\n* Made noderef_reactivity_test more specific",
          "timestamp": "2022-10-18T07:06:25Z",
          "tree_id": "d7ed12d8236e35fc363f7858a8fdbc10853252a6",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ee5519cbcb9a5f910b61e4741f136b181bd279f2"
        },
        "date": 1666077096218,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42751,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 242154,
            "range": "± 1486",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 60283,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73764,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1520,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77712,
            "range": "± 383",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wainwrightml@gmail.com",
            "name": "Mark Wainwright",
            "username": "wainwrightmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd556cbc02047042dad2ebd04405e455a9b11b2",
          "message": "Add data binding for valueAsNumber property (#511)\n\n* Added data binding for `valueAsNumber` property\r\n\r\n* Cargo fmt\r\n\r\n* Update examples/number-binding/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update packages/sycamore/tests/web/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update packages/sycamore/tests/web/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Added number-binding example to README\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-10-19T20:24:05+01:00",
          "tree_id": "18e783ee8418e8d94c0ce125c27daaeccea7a69c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/abd556cbc02047042dad2ebd04405e455a9b11b2"
        },
        "date": 1666207708625,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35485,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 209019,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49536,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60302,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1296,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65785,
            "range": "± 439",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5eff5ca3db268963b4070517f9c97428b7f2aaab",
          "message": "Fix js-framework-benchmark CI (#520)\n\nIt turns out the problem was because the 'package-lock.json' file was missing for 'sycamore' and 'sycamore-baseline'",
          "timestamp": "2022-10-31T18:33:40Z",
          "tree_id": "897934bf69496ad745a16697adcf3c3f6fce9d71",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5eff5ca3db268963b4070517f9c97428b7f2aaab"
        },
        "date": 1667241488693,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35631,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 209800,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48395,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60039,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1259,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65702,
            "range": "± 1101",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "2e71919ac5c6cdd1911095ffbff8146e92c39167",
          "message": "Fix missing __dirname in CI script",
          "timestamp": "2022-10-31T20:05:40Z",
          "tree_id": "ceceb45cafdbc35b7aa42e54c907a37cd628a930",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2e71919ac5c6cdd1911095ffbff8146e92c39167"
        },
        "date": 1667247083834,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35656,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 200527,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48764,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60048,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1274,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65727,
            "range": "± 87",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "eee11dd44f47732bb14682fce38c95e49332e907",
          "message": "Fix wrong function name in CI script",
          "timestamp": "2022-10-31T21:12:33Z",
          "tree_id": "fa7d736fb67aae48a765ceba690660d34beefcbd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/eee11dd44f47732bb14682fce38c95e49332e907"
        },
        "date": 1667250984503,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 21560,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 157629,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 33143,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 39830,
            "range": "± 2105",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 952,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 45671,
            "range": "± 77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "067b0eb7ac407dbbf70361361c6e31acf899f659",
          "message": "Fix CI script wrong function",
          "timestamp": "2022-10-31T21:58:26Z",
          "tree_id": "e91838ff0557fecd5a945f345070905b54b38908",
          "url": "https://github.com/sycamore-rs/sycamore/commit/067b0eb7ac407dbbf70361361c6e31acf899f659"
        },
        "date": 1667253777578,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 37316,
            "range": "± 1817",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 204266,
            "range": "± 12462",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50103,
            "range": "± 3634",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 62509,
            "range": "± 4140",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1304,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64975,
            "range": "± 3755",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "d2b7ac59e6b40cb9587a681d301cc8eaf5fbe1fc",
          "message": "Fix CI script post comment instead of update comment",
          "timestamp": "2022-10-31T22:48:58Z",
          "tree_id": "0d621da58bdde1c76a58848fe250b3e11088ba33",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d2b7ac59e6b40cb9587a681d301cc8eaf5fbe1fc"
        },
        "date": 1667256810352,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35666,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 201818,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48851,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60678,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1261,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66339,
            "range": "± 816",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "78ad32612d143461ffe6c9bf5ffb54379186e719",
          "message": "CI script upload PR number as artifact",
          "timestamp": "2022-11-01T07:37:14Z",
          "tree_id": "c0df7f27fe72f5c822fdb831ef159a9b9d103255",
          "url": "https://github.com/sycamore-rs/sycamore/commit/78ad32612d143461ffe6c9bf5ffb54379186e719"
        },
        "date": 1667288511912,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35258,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 200644,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50414,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 61554,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1334,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65223,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6eb3422b8821247fd8237025580be02e1fcbb5de",
          "message": "Specify encoding for readFileSync in CI script",
          "timestamp": "2022-11-01T08:12:32Z",
          "tree_id": "1f52acf034aa93c247a3bc6ed17561925e38d108",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6eb3422b8821247fd8237025580be02e1fcbb5de"
        },
        "date": 1667290641879,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30209,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 213872,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46119,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57435,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1327,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63415,
            "range": "± 103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "96471299+nate-sys@users.noreply.github.com",
            "name": "nathan dawit",
            "username": "nate-sys"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c6ad817c0abbcf4e378be4c6c2a6954e8cc085a",
          "message": "Fix mismatched link in examples list (#524)\n\nFix link",
          "timestamp": "2022-11-03T18:19:39Z",
          "tree_id": "ae145c46da0295f57600659423ff8ba258d3de91",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5c6ad817c0abbcf4e378be4c6c2a6954e8cc085a"
        },
        "date": 1667499844489,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30850,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 213273,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46164,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 58460,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1341,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 64413,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de737e53ead0ef1c3348a0a074ba8cdfbae33220",
          "message": "Switch two rows in the examples list for alphabetical ordering",
          "timestamp": "2022-11-04T01:43:06Z",
          "tree_id": "ef02ce52170592dacb11b5e4d670830423784cad",
          "url": "https://github.com/sycamore-rs/sycamore/commit/de737e53ead0ef1c3348a0a074ba8cdfbae33220"
        },
        "date": 1667526492090,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42311,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 234357,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58524,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 71344,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1562,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78693,
            "range": "± 88",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d49777b4a66fb5730c40898fd2ee8cde15bcdc3",
          "message": "Simplify the TodoMVC example code (#526)",
          "timestamp": "2022-11-05T22:59:06Z",
          "tree_id": "074a08150b2632ed8fe8e673ec4f229445203f51",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5d49777b4a66fb5730c40898fd2ee8cde15bcdc3"
        },
        "date": 1667689410836,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34731,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 192174,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49423,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 58882,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1277,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65469,
            "range": "± 280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faichenshing@gmail.com",
            "name": "Blaine Hansen",
            "username": "blainehansen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "568b5b13c80b0296213901cf45c7669a6a496582",
          "message": "adding `set_fn` and `set_fn_silent` (#529)\n\n* adding change and change_silent\r\n\r\n* using name set_fn to more clearly align with set\r\n\r\n* Use `f` for function name\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Use `f` for function name\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-11-14T13:38:53Z",
          "tree_id": "4b55c057fbf816b55b74b5a98d40166f9b54897c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/568b5b13c80b0296213901cf45c7669a6a496582"
        },
        "date": 1668433447460,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 38686,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 227716,
            "range": "± 53611",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 56058,
            "range": "± 4144",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 65898,
            "range": "± 3167",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1532,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 75683,
            "range": "± 3216",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "x774212@gmail.com",
            "name": "Artem Makoven",
            "username": "makoven"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a770858ec5736b93c253a32e471a8bbd251dc2d4",
          "message": "Remove redundant set_value in todomvc example (#530)",
          "timestamp": "2022-11-24T12:12:13Z",
          "tree_id": "158e6465fe04601604ca880ceab18944bd7578dc",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a770858ec5736b93c253a32e471a8bbd251dc2d4"
        },
        "date": 1669292225178,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34735,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 191309,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49934,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 60225,
            "range": "± 764",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1283,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 65801,
            "range": "± 267",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7af243d5e1c16afe00d87b8496b86e8f9c852c",
          "message": "Make `create_ref` only allow `T: 'static` (#519)\n\n* Make create_ref only allow `T: 'static`\r\n\r\n* Add missing safety docs\r\n\r\n* Fix web integration tests\r\n\r\n* Remove some old tests and fix effect cleanup\r\n\r\n* Try to fix github actions bench workflow",
          "timestamp": "2022-11-26T14:37:15Z",
          "tree_id": "d75dd9172a933457b717297704654163253c5c78",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9d7af243d5e1c16afe00d87b8496b86e8f9c852c"
        },
        "date": 1669473735732,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40807,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 216399,
            "range": "± 13896",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 52828,
            "range": "± 5084",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67936,
            "range": "± 4835",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1493,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 76389,
            "range": "± 4394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c33a808ade15aeddc600c11746b08f2ecb4fe648",
          "message": "Update dependencies to latest (#510)\n\n* Update dependencies\r\n\r\n* Update dependencies again\r\n\r\n* Enable cargo resolver v2\r\n\r\n* Use hashbrown instead and add getrandom js feature flag\r\n\r\n* cargo fmt\r\n\r\n* Move benchmark to new crate",
          "timestamp": "2022-11-27T00:04:04Z",
          "tree_id": "b8494a8b282829c12e3d8eff1520730af92952a0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c33a808ade15aeddc600c11746b08f2ecb4fe648"
        },
        "date": 1669507697160,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31983,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 193955,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45982,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56061,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1406,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63934,
            "range": "± 153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74dc73c46f67962ed5a7ae8d6816a2269ee8dd6d",
          "message": "`GenericNode` v2 (#521)\n\n* BREAKING: remove `inner_element` methods from DomNode and HydrateNode\r\n\r\n* BREAKING: Introduce new GenericNodeElements trait for element creation\r\n\r\n* BREAKING: Use Cow<str> for text nodes\r\n\r\nThis should make SSR *significantly* faster\r\n\r\n* cargo fmt\r\n\r\n* Try to fix bench workflow when head repository is different from base\r\n\r\n* Try fixing the benchmark again\r\n\r\n* Make some more methods take Cow<str>\r\n\r\n* BREAKING: Update remaining methods to use Cow<str>\r\n\r\n* Update UI tests\r\n\r\n* Fix builder API doctests\r\n\r\n* Add missing lifetime bounds\r\n\r\n* Convert fn from_web_sys to trait method on Html\r\n\r\n* cargo fmt\r\n\r\n* Make the view base macro backend independent\r\n\r\n* Fix clippy\r\n\r\n* Fix doctest\r\n\r\n* Update UI tests",
          "timestamp": "2022-11-28T15:06:00Z",
          "tree_id": "7d21f9ebb1331e8b30212d5b0a0f522836769cd3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/74dc73c46f67962ed5a7ae8d6816a2269ee8dd6d"
        },
        "date": 1669648220891,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34655,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 186792,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50352,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59914,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1224,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 54541,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke Chu",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "3057f67f6420e9deed726b6598cd5eaef9184d2c",
          "message": "Fix SSR benchmark",
          "timestamp": "2022-11-29T09:52:32Z",
          "tree_id": "ab94b323d668abefac44f19941fb22d95e726353",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3057f67f6420e9deed726b6598cd5eaef9184d2c"
        },
        "date": 1669715815183,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32993,
            "range": "± 1978",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 175609,
            "range": "± 7016",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48084,
            "range": "± 1916",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59263,
            "range": "± 5596",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1161,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 49394,
            "range": "± 3126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c52392c09cc1fe57819470d942d735b3210c94fc",
          "message": "Prevent re-running effects inside themselves (#539)\n\n* add test cases\r\n\r\n* Panic when re-running an effect\r\n\r\n* Fix drop locking location\r\n\r\n* Fix tests\r\n\r\n* Fix compile error caused by merge",
          "timestamp": "2022-12-07T15:04:16-08:00",
          "tree_id": "9e6d7122317e4583be513b4f53691e221448b4f0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c52392c09cc1fe57819470d942d735b3210c94fc"
        },
        "date": 1670454554553,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40497,
            "range": "± 4134",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 235312,
            "range": "± 8629",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57601,
            "range": "± 5571",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66740,
            "range": "± 12079",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1472,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63896,
            "range": "± 3385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b1a290839c6d37ab7b0995037dc19e8717dea39",
          "message": "(Runtime) Templates (#536)\n\n* Templates!\r\n\r\n* Add instantiate_template to GenericNodeElements\r\n\r\n* Split html tags structs and fns\r\n\r\n* Add attributes to template\r\n\r\n* Render template node for DomNode\r\n\r\n* Use hashbrown\r\n\r\n* Remove Debug impl for WalkSteps\r\n\r\n* Optimize DynMarker\r\n\r\n* wip\r\n\r\n* Hydrate using template system\r\n\r\n* counter example works!\r\n\r\n* Fix flag counters order\r\n\r\n* Remove unused function\r\n\r\n* Add missing cx in Dyn codegen\r\n\r\n* Fix some remaining codegen typos\r\n\r\n* Fix bench missing ssr\r\n\r\n* Fix warning in release mode\r\n\r\n* Fix clippy\r\n\r\n* Fix macro hygiene\r\n\r\n* Make all tests compile\r\n\r\n* Update some tests\r\n\r\n* Fix hydration bugs for hydrate\r\n\r\n* Fix hydrate example\r\n\r\n* Update codegen to not warn on non wasm32 arch\r\n\r\n* Delete template example\r\n\r\n* Fix builder hydration keys\r\n\r\n* Fix node macro impl\r\n\r\n* Update bench.yml workflow\r\n\r\n* Update builder_hydrate UI tests\r\n\r\n* Fix hydration with builder API\r\n\r\n* cargo fmt\r\n\r\n* cargo clippy",
          "timestamp": "2022-12-09T09:07:30-08:00",
          "tree_id": "d38d5a99d279c82ab85f8b351f42db547a238178",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8b1a290839c6d37ab7b0995037dc19e8717dea39"
        },
        "date": 1670605916098,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35386,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 186730,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50071,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57573,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 995,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60057,
            "range": "± 154",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30574112+danielalvsaaker@users.noreply.github.com",
            "name": "danielalvsaaker",
            "username": "danielalvsaaker"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e217544788f1d655c768a95c72882b902d59c5d2",
          "message": "Make `Option<T>` prop fields optional by default (#531)\n\n* Make `Option<T>` prop fields optional by default\r\n\r\n* Fix proc-macro hygiene\r\n\r\n* Add optional props UI test\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2022-12-09T09:34:51-08:00",
          "tree_id": "e32b83edd7dca643200fe5e88a22ee43811027ea",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e217544788f1d655c768a95c72882b902d59c5d2"
        },
        "date": 1670607584682,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 30400,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 207986,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45319,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 54517,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1084,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59497,
            "range": "± 220",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "lukechu10",
            "username": "lukechu10"
          },
          "committer": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "lukechu10",
            "username": "lukechu10"
          },
          "distinct": true,
          "id": "764bd6b9e7d21da287ad44a675a977611b22df05",
          "message": "Fix wrong issue_number for comment workflow",
          "timestamp": "2022-12-10T16:45:41-08:00",
          "tree_id": "01e5bef6922a0069bdea086a307316f87809734f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/764bd6b9e7d21da287ad44a675a977611b22df05"
        },
        "date": 1670719819495,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33095,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 207124,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45538,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 54474,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1061,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59807,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4861135f46925f53808ddb21d5f5eb9145013f46",
          "message": "Implement ToView manually for types (#541)\n\n* Implement ToView manually for types\r\n\r\nThis also allows us to implement ToView for Option<T> and [T] where T: ToView among other types\r\n\r\n* Update docs\r\n\r\n* Add some tests for ToView\r\n\r\n* Remove GenericNode::text_node_int",
          "timestamp": "2022-12-10T17:07:57-08:00",
          "tree_id": "3fceb83d762598d80bdcfb9242b565dc8f84a7ee",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4861135f46925f53808ddb21d5f5eb9145013f46"
        },
        "date": 1670721150973,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35462,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 188198,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48049,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57681,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1002,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60142,
            "range": "± 63",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d70a98c333a985ec9e392b99ae45ac530d660e5b",
          "message": "Fix missing `View::new_dyn_scoped` check at the root (#549)\n\nFix missing View::new_dyn_scoped at the root",
          "timestamp": "2023-01-03T21:10:43-08:00",
          "tree_id": "5197e1ebc01e12e13f66d4c1cfb48c2c0cd95830",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d70a98c333a985ec9e392b99ae45ac530d660e5b"
        },
        "date": 1672809282069,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42492,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 246701,
            "range": "± 10893",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 60349,
            "range": "± 4677",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74266,
            "range": "± 5964",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1259,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 74999,
            "range": "± 3209",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14d5897aec4c2753555818c889f8245905de3b5b",
          "message": "Rename css.md to styling.md and add info on integrations with CSS frameworks (#550)\n\nRename css.md to styling.md and add some more info on integrations with Sycamore",
          "timestamp": "2023-01-03T22:00:20-08:00",
          "tree_id": "e447892abfed333c2fbd9afaf4b5fbd1110bae4c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/14d5897aec4c2753555818c889f8245905de3b5b"
        },
        "date": 1672812206802,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 29251,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 203179,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47627,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56572,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1061,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60014,
            "range": "± 736",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c5c12ecb00650d1539ef730c14ce9e98ade1e61",
          "message": "Adopt a logo! (#551)\n\n* Add logo svg to README.md\r\n\r\n* Add logo svg to website",
          "timestamp": "2023-01-04T14:59:00-08:00",
          "tree_id": "fc40b6e4e66025d72dffb972239e61d767900a13",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9c5c12ecb00650d1539ef730c14ce9e98ade1e61"
        },
        "date": 1672873328816,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 28086,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 204635,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 46629,
            "range": "± 2239",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 56601,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1071,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60239,
            "range": "± 397",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e402f11d733c59f02604f6d6ea97a0977c2d90d5",
          "message": "Typed event data + async event handlers (#553)\n\n* Add typed events\r\n\r\n* Add missing KeyboardEvent feature to web-sys\r\n\r\n* Fix builder API with new event handlers\r\n\r\n* Fix async event handlers\r\n\r\nThere was an erroneous GenericNode bound on the wrong type generic\r\n\r\n* Remove some useless derives\r\n\r\n* Formatting",
          "timestamp": "2023-01-05T06:07:11Z",
          "tree_id": "6d4baa87d4c1f4737da73ec88bf900e20366b2ae",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e402f11d733c59f02604f6d6ea97a0977c2d90d5"
        },
        "date": 1672899045817,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 37656,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 212352,
            "range": "± 7016",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 55826,
            "range": "± 1683",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 67401,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1157,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 67316,
            "range": "± 2331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47317d1e64906c394b26331d670cfe16014b40fb",
          "message": "Replace context `HashMap` with `Vec` and add benchmark (#555)\n\nReplace HashMap with Vec and add benchmark",
          "timestamp": "2023-01-09T18:26:51-08:00",
          "tree_id": "7d69cb90e78dc97ae44734c9ed9a14ae4ef00669",
          "url": "https://github.com/sycamore-rs/sycamore/commit/47317d1e64906c394b26331d670cfe16014b40fb"
        },
        "date": 1673317821137,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 28238,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 197306,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44997,
            "range": "± 1193",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 55652,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 121,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1064,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60467,
            "range": "± 1195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wingertge@gmail.com",
            "name": "Genna Wingert",
            "username": "wingertge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001ee56094639292bbec28f1648fa1d0e63d9bf7",
          "message": "Allow passing through attributes on components (#548)\n\n* Add attributes passthrough type\r\n\r\n* Parse prefixed props on components\r\n\r\n* Generate attributes struct from prefixed props\r\n\r\n* Add `Attributes` spread operator\r\n\r\n* Fix passthrough attributes with dashes\r\n\r\n* Fix mistakes in attribute spread code generation\r\n\r\n* Make clippy happy\r\n\r\n* Allow passing non-signal dynamic string values to passthrough arguments\r\n\r\n* Add support for properties\r\n\r\n* Add tests\r\n\r\n* Attempt to update stderr for compile fail tests\r\n\r\n* Add ergonomic `Attributes` API\r\n\r\n* Remove `Deref` and `DerefMut` implementations from `Attributes`\r\n\r\n* Change `Box<dyn Display>` to `Box<dyn FnMut() -> String>`\r\n\r\n* Remove `boxed_event`\r\n\r\n* Move spread code into utility function\r\n\r\n* Extract `AttributeName` from function to reduce code duplication\r\n\r\n* Add lifetime bound to `DynamicStr`\r\n\r\n* Make clippy happy\r\n\r\n* Export `EventDescriptor` so it can be referenced from macros\r\n\r\n* Update `AttributeArgs` for new event syntax\r\n\r\n* Fix WASM compile error\r\n\r\n* Improve error message for attribute type parsing\r\n\r\n* Remove redundant debug derive\r\n\r\n* Revert last change to make linter happy\r\n\r\n* Add attributes passthrough example\r\n\r\n* Add attribute passthrough page to the documentation\r\n\r\n* Only strip attribute prefix if it's `attr`\r\n\r\n* Move prefix to codegen to fix events\r\n\r\n* Make attributes optional by default\r\n\r\n* Update docs and example\r\n\r\n* Wrap attributes map in RefCell for more ergonomic usage\r\n\r\n* Change leftover instances of `&mut self` to `&self`\r\n\r\n* Make dynamic boolean attributes work properly\r\n\r\n* Use peek instead of error map for parse error handling\r\n\r\n* Fix up docs page\r\n\r\n* Fix code cleanliness issues\r\n\r\n* Revert accidentally included change\r\n\r\n* Fix docs on props derive macro\r\n\r\n* Use `lookahead.error()` instead of manual error message\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Remove unnecessary lookahead\r\n\r\n* Fix typo\r\n\r\n* Remove `Into<bool>` implementations for signal\r\n\r\n* Move `event` implementation to `GenericNode`\r\n\r\n* Remove `event` from hydrate node and SSR node\r\n\r\n* Add safety comment above unsafe block\r\n\r\n* Remove unnecessary transmute\r\n\r\n* Fix typo\r\n\r\n* Remove unnecessary block\r\n\r\n* Remove unused imports\r\n\r\n* Fix non-dynamic boolean attributes\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2023-01-13T20:42:53Z",
          "tree_id": "23d80a1c7cfb36540f12c582d0d3a97ce33cbdab",
          "url": "https://github.com/sycamore-rs/sycamore/commit/001ee56094639292bbec28f1648fa1d0e63d9bf7"
        },
        "date": 1673642777271,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 29002,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 208091,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 44962,
            "range": "± 1129",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 54976,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 117,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1067,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60040,
            "range": "± 163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "etonomick@gmail.com",
            "name": "Valery Stepanov",
            "username": "wa1aric"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6cecd1a0c477179a223544eafa6a24a1593ce86f",
          "message": "Add wasm-bindgen + JS Interop example (#558)\n\n* Example of JS code next to Sycamore\r\n\r\n* Add example to workspace\r\n\r\n* Fix formatting\r\n\r\n* Rename JS file\r\n\r\n* Readme update\r\n\r\n* Fully fixed formatting",
          "timestamp": "2023-01-17T17:19:58Z",
          "tree_id": "01f496550d36bc01dd669297a11f1b40be335ad0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6cecd1a0c477179a223544eafa6a24a1593ce86f"
        },
        "date": 1673976206982,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32729,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 187855,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48970,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59319,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 131,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1002,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59829,
            "range": "± 205",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wingertge@gmail.com",
            "name": "Genna Wingert",
            "username": "wingertge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f1ee457536e1b0b7bb35834732e288e55cb7e0b",
          "message": "Add unique ID generation hook (#565)\n\nIntroduce the `create_unique_id` hook.",
          "timestamp": "2023-01-27T13:56:28Z",
          "tree_id": "704c8d8abab1befe36d6079010c5473fe824fc74",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5f1ee457536e1b0b7bb35834732e288e55cb7e0b"
        },
        "date": 1674828059746,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42784,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 256123,
            "range": "± 50329",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 67276,
            "range": "± 8538",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 83434,
            "range": "± 7143",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 209,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1477,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 81120,
            "range": "± 7136",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "faichenshing@gmail.com",
            "name": "Blaine Hansen",
            "username": "blainehansen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0512e4a6e7e60b6f2611c6984585c90126b69018",
          "message": "Fix view! macro codegen for value binding when using complex expression (#569)",
          "timestamp": "2023-01-30T21:10:42Z",
          "tree_id": "9d7aef7111fcfbe5c9370258b498279c8d159c1f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0512e4a6e7e60b6f2611c6984585c90126b69018"
        },
        "date": 1675113261941,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34707,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 191939,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50405,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59339,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 134,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1016,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 61348,
            "range": "± 83",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "97768473+StarSapien@users.noreply.github.com",
            "name": "StarSapien",
            "username": "StarSapien"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce74cb52f2f46ef285c10101b85a49e6bfbaa3f5",
          "message": "Fix typo in docs for `hydrate_to`\n\nFix intra-doc link linking to wrong item.",
          "timestamp": "2023-02-19T22:46:53Z",
          "tree_id": "4153ca54716b5529a5d81f25dc08ed4450b241cd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ce74cb52f2f46ef285c10101b85a49e6bfbaa3f5"
        },
        "date": 1676847074817,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43414,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 245907,
            "range": "± 14342",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 60653,
            "range": "± 28529",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 70538,
            "range": "± 4159",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 201,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1242,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73468,
            "range": "± 4906",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca166e9be1a8cba7bdf93a8a50807b3625b17247",
          "message": "chore: fix formatting and clippy lints (#582)\n\n* cargo fmt\r\n\r\n* Fix clippy lints",
          "timestamp": "2023-03-08T20:28:08Z",
          "tree_id": "e1d96fdba4f988947cf771a17ab27db13b83cecc",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ca166e9be1a8cba7bdf93a8a50807b3625b17247"
        },
        "date": 1678307520837,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 29086,
            "range": "± 1200",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 190701,
            "range": "± 7108",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49024,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 58110,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 981,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60841,
            "range": "± 83",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05f2368c70061301426c229c990d4a2d4357eb51",
          "message": "Update render util tests and add nested dyn test (#583)\n\n* Update render util tests and add nested dyn test\r\n\r\n* cargo fmt",
          "timestamp": "2023-03-09T00:21:45Z",
          "tree_id": "31c21f3d184f2f50e210ee9fa9317b31fcde2e9a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/05f2368c70061301426c229c990d4a2d4357eb51"
        },
        "date": 1678321620226,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 36581,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 244391,
            "range": "± 17099",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 62306,
            "range": "± 3620",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74866,
            "range": "± 5897",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 210,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1282,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77397,
            "range": "± 2049",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wingertge@gmail.com",
            "name": "Genna Wingert",
            "username": "wingertge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb5852d67cf45665d6bf957aaa534f33c961129",
          "message": "Fix panic with nested dyn views (#573)\n\n* Remove dynamic view loop to fix panic\r\n\r\n* Add regression test case\r\n\r\n* Add extra test case for nested dyn views\r\n\r\n---------\r\n\r\nCo-authored-by: lukechu10 <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2023-03-09T01:33:20Z",
          "tree_id": "3c8fdacabd6d4d5e3062e23dbbc645842ea8015a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4eb5852d67cf45665d6bf957aaa534f33c961129"
        },
        "date": 1678325838176,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 29001,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 187636,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48572,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57696,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 139,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1022,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 60801,
            "range": "± 425",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyllsimon@gmail.com",
            "name": "Simon Hyll",
            "username": "simonhyll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6defe7780c9ded36502a00426f90666f600c8ef",
          "message": "Centered badges on README.md (#589)\n\nCall me crazy but I think this looks better",
          "timestamp": "2023-03-24T06:37:09-07:00",
          "tree_id": "10082edcbdaed67efcba71986670c9e4cdddc607",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a6defe7780c9ded36502a00426f90666f600c8ef"
        },
        "date": 1679665355547,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40644,
            "range": "± 4037",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 242395,
            "range": "± 11917",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 59524,
            "range": "± 2353",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 74457,
            "range": "± 4856",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 182,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1223,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 73675,
            "range": "± 6422",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wingertge@gmail.com",
            "name": "Genna Wingert",
            "username": "wingertge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6156b288c4350a219ca0f17d63e327737a5200a0",
          "message": "Add signal equivalent of `create_ref_unsafe` (#586)",
          "timestamp": "2023-03-24T15:12:48-07:00",
          "tree_id": "057a6eabdf3e8ecb82640ed2ac8eb6ff2ffcee94",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6156b288c4350a219ca0f17d63e327737a5200a0"
        },
        "date": 1679696270483,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41358,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 226538,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 58205,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 68630,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 156,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1139,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 70747,
            "range": "± 1521",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6e579a67bd259ea362c120812c8e597786b5c19",
          "message": "Do not add values to the arena drop list if not necessary (#552)\n\n* Do not add value to the arena drop list if not necessary\r\n\r\n* update and re-enable bumpalo\r\n\r\n* cargo fmt",
          "timestamp": "2023-03-25T07:05:14-07:00",
          "tree_id": "17e500cfa23638a2b619b91b8eef6d4cdcb7ae2b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f6e579a67bd259ea362c120812c8e597786b5c19"
        },
        "date": 1679753381397,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 31054,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 204693,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 48628,
            "range": "± 990",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57416,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 122,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1071,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 57834,
            "range": "± 317",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srkoser+GitHub@gmail.com",
            "name": "Reed Koser",
            "username": "bobtwinkles"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fedc881f2490da4c7abab7d9b1961d4e064a12c0",
          "message": "Avoid exponential blowup in size of Builder type (#591)",
          "timestamp": "2023-03-25T07:23:03-07:00",
          "tree_id": "176c4f85f82ddadcd21ae2004a11d0870b2c0e68",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fedc881f2490da4c7abab7d9b1961d4e064a12c0"
        },
        "date": 1679754487005,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40185,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 222246,
            "range": "± 5358",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 61026,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 69945,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 160,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1191,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 66872,
            "range": "± 1163",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8666c75e76a1d15a6db250903516d62b88d98c7",
          "message": "Update syn to v2 (#593)\n\n* Update syn to v2\r\n\r\n* cargo fmt\r\n\r\n* Update UI tests\r\n\r\n* Update UI tests again, this time with correct rustc version",
          "timestamp": "2023-03-26T11:03:13-07:00",
          "tree_id": "4117a2a5d395cbd08a8c8f6c4524b74ac11b7822",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c8666c75e76a1d15a6db250903516d62b88d98c7"
        },
        "date": 1679854110546,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 39689,
            "range": "± 2186",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 233727,
            "range": "± 13397",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 66876,
            "range": "± 5173",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 73790,
            "range": "± 3618",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 188,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1219,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69675,
            "range": "± 6068",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3885a9e67c8cbb6042f5a758965338df95930580",
          "message": "v0.9.0-beta.1 (#594)",
          "timestamp": "2023-03-26T11:14:12-07:00",
          "tree_id": "19d8ceae286468d810377ab6e6bfe27ed6b400d0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3885a9e67c8cbb6042f5a758965338df95930580"
        },
        "date": 1679854823297,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 55635,
            "range": "± 9881",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 260438,
            "range": "± 23989",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 71005,
            "range": "± 7273",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 80344,
            "range": "± 5271",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 312,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1476,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 78770,
            "range": "± 9038",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fc3eff896f3b9888c1bdb44463c436eff935b2d",
          "message": "Fix builder `bind_value` and `bind_checked` calling wasm functions in SSR (#608)\n\nfix builder bind_value and bind_checked calling wasm functions in ssr",
          "timestamp": "2023-05-04T09:26:36+01:00",
          "tree_id": "866ccb96b8241db68d5ac0af6739a20a6ebe8654",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6fc3eff896f3b9888c1bdb44463c436eff935b2d"
        },
        "date": 1683189030812,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 34918,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 185957,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50748,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59382,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 135,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1003,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 56546,
            "range": "± 338",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "88556823+Miroito@users.noreply.github.com",
            "name": "Miroito",
            "username": "Miroito"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f145190e2af38e864b050ee9a8fbdc4837e83381",
          "message": "Ignore query parameters when matching a path to a route (#575)\n\nFixes #562",
          "timestamp": "2023-05-11T19:35:19+01:00",
          "tree_id": "8c43c8eb68ea2eb3b3da6cca3e9e6ffa28c0e505",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f145190e2af38e864b050ee9a8fbdc4837e83381"
        },
        "date": 1683830420127,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43856,
            "range": "± 2703",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 257339,
            "range": "± 29834",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 67220,
            "range": "± 4391",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 79970,
            "range": "± 4121",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 235,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1371,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 77724,
            "range": "± 4721",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d078f5cedb40e77240f5219f988964cc7ccdc5c8",
          "message": "Fix navigating to an anchor and route matching with hash parameters (#610)\n\n* fix navigating to anchor\r\n\r\n* add smooth scrolling to website and update deps\r\n\r\n* ignore hash when matching path\r\n\r\n* appease clippy",
          "timestamp": "2023-05-11T20:42:38+01:00",
          "tree_id": "df4129185d58279c5a8b7282b0ee9988b5d684db",
          "url": "https://github.com/sycamore-rs/sycamore/commit/d078f5cedb40e77240f5219f988964cc7ccdc5c8"
        },
        "date": 1683834466594,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 43657,
            "range": "± 1243",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 250076,
            "range": "± 11574",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 67394,
            "range": "± 4012",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 78171,
            "range": "± 3722",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 210,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1348,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 76591,
            "range": "± 2571",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e5cbe07d1f9cf03e2492f66f1df6bc6a88e5b60",
          "message": "Update Trunk, NodeJS, and MSRV to 1.65 (#611)",
          "timestamp": "2023-05-11T20:11:11Z",
          "tree_id": "8203bf14015186ff0acc2078cff37d82726efda0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4e5cbe07d1f9cf03e2492f66f1df6bc6a88e5b60"
        },
        "date": 1683836126702,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40148,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 210952,
            "range": "± 5118",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57221,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66528,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 153,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1140,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 63933,
            "range": "± 1382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "complife@gmail.com",
            "name": "Jeffrey Hutchins",
            "username": "jhutchins"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abce04fe341740c3c9245622208fb5a7ea792498",
          "message": "Fix missing `cx` parameter in routing.md docs (#613)",
          "timestamp": "2023-05-18T08:52:04+01:00",
          "tree_id": "c157ff5ea2f222a7ef43971648160132d9af193f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/abce04fe341740c3c9245622208fb5a7ea792498"
        },
        "date": 1684396565799,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 35030,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 186850,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 50738,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 58958,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 134,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1005,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 57557,
            "range": "± 961",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1581674+mekanoe@users.noreply.github.com",
            "name": "noe",
            "username": "mekanoe"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bb700bebeb1fa928c20c3ed9af7d53138ebe95a",
          "message": "Fix view! to handle dashed attributes with Rust keywords (#624)\n\nSwitches view! AttributeName parser to Ident::parse_any to handle keywords in extended attribute names.\r\n\r\nFixes #620",
          "timestamp": "2023-09-06T09:53:21+02:00",
          "tree_id": "f89d11b8f7ea09f39fb88e868e0866a71b6eecbd",
          "url": "https://github.com/sycamore-rs/sycamore/commit/6bb700bebeb1fa928c20c3ed9af7d53138ebe95a"
        },
        "date": 1693986978431,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32415,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 180399,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 49772,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 57309,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 131,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1060,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 57651,
            "range": "± 315",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddf95d8a630e93bb6af026d933ed7796ea23ca6d",
          "message": "Update MSRV to 1.72 (#625)",
          "timestamp": "2023-09-10T21:12:34Z",
          "tree_id": "2c7b9e6f26d5cb31957e5be26e6a09eca0551481",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ddf95d8a630e93bb6af026d933ed7796ea23ca6d"
        },
        "date": 1694380543845,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 40300,
            "range": "± 3405",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 210928,
            "range": "± 3975",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57984,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 66731,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 157,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1265,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 69163,
            "range": "± 391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ce37fb3296ae825deedda66994a001ff56014dc",
          "message": "Reactivity v3! (Part 1) 🎉  (#612)\n\n* scopes\r\n\r\n* signal get and set\r\n\r\n* signals owned by scopes\r\n\r\n* memos and reactive graph update propagation\r\n\r\n* improve performance by reusing allocations in topo_sort\r\n\r\n* add remaining reactive hooks\r\n\r\n* add some docs and reexport everything at top-level\r\n\r\n* add a lot more docs\r\n\r\n* add docs to everything and impl Debug, Display\r\n\r\n* add context api\r\n\r\n* migrate signal and memo tests over\r\n\r\n* separate effects from memos and defer effect callbacks\r\n\r\n* migrate all effect tests\r\n\r\n* check if effect is alive when calling it rather than removing links during drop\r\n\r\n* fix a few memo tests migrated from effects\r\n\r\n* some perf optimizations around slotmap indexing\r\n\r\n* migrate over map_keyed and map_indexed\r\n\r\n* remove unnecessary Rc\r\n\r\n* make Accessor take ref instead of move\r\n\r\n* add effect batching\r\n\r\n* Update some docs to new reactivity\r\n\r\nCo-authored-by: Genna Wingert <wingertge@gmail.com>\r\n\r\n* initial store API implementation\r\n\r\n* wip: add derive macro for State and macro for parsing lens path\r\n\r\n* add StateTrigger trait and make get! take a Store<T>\r\n\r\n* Implement set! macro.\r\n\r\n* fix doc comment\r\n\r\n* Rename store2.rs to store.rs\r\n\r\n* Satisfy clippy\r\n\r\n* Split scope into a new file\r\n\r\n* Move tests into scope.rs as well\r\n\r\n* Remove explicit cx: Scope\r\n\r\n* Set global root when propagating updates\r\n\r\n* Simplify Root internals\r\n\r\n* Fix CI?\r\n\r\n* Update Cargo.toml for new crates\r\n\r\n* Fix RUSTFLAGS\r\n\r\n* Fix RUSTFLAGS attempt 2\r\n\r\n* Fix conditional compilation\r\n\r\n* Remove examples folder from sycamore-reactive3\r\n\r\n* Do not run all tests\r\n\r\n* Ignore doctest in lib.rs\r\n\r\n---------\r\n\r\nCo-authored-by: Genna Wingert <wingertge@gmail.com>",
          "timestamp": "2023-09-14T22:09:59+02:00",
          "tree_id": "9759ef678f58ed977016fb4e4d89c93ca5c8ebd2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3ce37fb3296ae825deedda66994a001ff56014dc"
        },
        "date": 1694722442918,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals_new",
            "value": 43971,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_signals",
            "value": 32307,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects_new",
            "value": 132406,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 175419,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 47457,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 59342,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 131,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 624165,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation_new",
            "value": 352463,
            "range": "± 13985",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1057,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 59073,
            "range": "± 162",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61975820+iiiii7d@users.noreply.github.com",
            "name": "7d",
            "username": "iiiii7d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aba1a9e85f6a2ca9908e083265fc40f95efedd2f",
          "message": "Fix typos & small grammatical errors (#627)",
          "timestamp": "2023-09-17T09:39:06+02:00",
          "tree_id": "046429b33b6dffe9ffb9dcb3e315c4b7aa6b1ebb",
          "url": "https://github.com/sycamore-rs/sycamore/commit/aba1a9e85f6a2ca9908e083265fc40f95efedd2f"
        },
        "date": 1694936579817,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals_new",
            "value": 39730,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_signals",
            "value": 27842,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects_new",
            "value": 116499,
            "range": "± 1746",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 203655,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 45347,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 55647,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 120,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 606914,
            "range": "± 3625",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation_new",
            "value": 342664,
            "range": "± 1556",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1137,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 57528,
            "range": "± 427",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b0cd66399ddcc93d1fa1917b2b3bcaf3676d911",
          "message": "Credit @nate-sys for designing the logo in README.md",
          "timestamp": "2023-10-03T21:58:57+01:00",
          "tree_id": "300d5d7238ec0d796050cd161f39d6c5de0c0eac",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3b0cd66399ddcc93d1fa1917b2b3bcaf3676d911"
        },
        "date": 1696366992223,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals_new",
            "value": 54193,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_signals",
            "value": 40686,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects_new",
            "value": 161710,
            "range": "± 1227",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 210272,
            "range": "± 3481",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 57408,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 70103,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 169,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 746202,
            "range": "± 6164",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation_new",
            "value": 404531,
            "range": "± 10415",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1266,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 68192,
            "range": "± 768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a0a7f339e5575e31e0eb342601cec61983cb569",
          "message": "Reactivity v3 (Part 2) (#626)\n\n* Port sycamore, sycamore-core, sycamore-web, sycamore-futures and hello-world, counters examples\r\n\r\n* components example\r\n\r\n* context example and fix context API\r\n\r\n* Some small fixes\r\n\r\n* semi-working js-framework-benchmark\r\n\r\n* Upgrade setup-chromedriver action from v1 to v2\r\n\r\n* Upload benchmark results as artifact\r\n\r\n* Update bench-diff tool to work with new format\r\n\r\n* Make all examples compile\r\n\r\n* Fix motion example\r\n\r\n* Replace old sycamore_reactive crate\r\n\r\n* Port website\r\n\r\n* Fix svg example\r\n\r\n* Build website in CI using nightly Rust\r\n\r\n* Update workflow action dependencies\r\n\r\n* Make all tests compile in sycamore\r\n\r\n* Make default tests pass\r\n\r\n* Update UI tests\r\n\r\n* Fix clippy\r\n\r\n* Fix compile errors\r\n\r\n* Fix bench wrong context type\r\n\r\n* Fix on_mount and temporarily fix todomvc\r\n\r\n* Update some tests and rename some internal functions\r\n\r\n* Remove scope\r\n\r\n* Remove create_effect_scoped and fix bug in reactivity DFS\r\n\r\n* Fix reactivity tests\r\n\r\n* Fix clippy\r\n\r\n* Fix some more tests\r\n\r\n* Some perf optimizations\r\n\r\n* Add cleanup to js-framework-benchmark\r\n\r\n* Remove DependencyTracker\r\n\r\n* Use SmallVec optimization\r\n\r\n* Revert \"Remove DependencyTracker\"\r\n\r\nThis reverts commit 483edb875364307a6000060935f51178361a434f.\r\n\r\nfixup\r\n\r\n* Remove self from dependents when node is disposed\r\n\r\n* Change current from Option<View<G>> to Option<Vec<G>>\r\n\r\n* Fix some more tests\r\n\r\n* Fix typo with name shadowing\r\n\r\n* All tests pass!!!\r\n\r\n* Remove store API (for now)\r\n\r\n* Fix website deploy workflow\r\n\r\n* Update reactivity dirty checking logic\r\n\r\nInstead of checking if a dependency changed, we now check if the current node is dirty.\r\n\r\n* Add tracing to sycamore-reactive and sycamore crates\r\n\r\n* Remove wrapping event handlers in signals\r\n\r\n* Fix clippy\r\n\r\n* Update docs first pass\r\n\r\n* Upload webdriver-ts-results HTML as artifact\r\n\r\n* Add a migration guide and quickly update architecture.md and development.md",
          "timestamp": "2023-10-06T16:19:16+01:00",
          "tree_id": "2bc841a160ac20a99af709e68f99e32ffc92ffda",
          "url": "https://github.com/sycamore-rs/sycamore/commit/3a0a7f339e5575e31e0eb342601cec61983cb569"
        },
        "date": 1696605791061,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 54686,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 165987,
            "range": "± 8357",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25011,
            "range": "± 2729",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34405,
            "range": "± 69944",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3408,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 377499,
            "range": "± 34492",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1127,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41383,
            "range": "± 475",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c46394f2d405dcc88d10813a80ef01a35d35814",
          "message": "Update README.md example with new reactivity system] (#629)",
          "timestamp": "2023-10-06T15:29:15Z",
          "tree_id": "3089732c7ceabede7a71f463326c9e374c59f20d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/4c46394f2d405dcc88d10813a80ef01a35d35814"
        },
        "date": 1696606377508,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46012,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 139049,
            "range": "± 3583",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22869,
            "range": "± 187612",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 26689,
            "range": "± 71246",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3929,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 311533,
            "range": "± 18736",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 946,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34406,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53d6f1e55b26d548ec3d0fa54a04e8fc029f251",
          "message": "Bump postcss from 8.4.23 to 8.4.31 in /website (#628)\n\nBumps [postcss](https://github.com/postcss/postcss) from 8.4.23 to 8.4.31.\r\n- [Release notes](https://github.com/postcss/postcss/releases)\r\n- [Changelog](https://github.com/postcss/postcss/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/postcss/postcss/compare/8.4.23...8.4.31)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: postcss\r\n  dependency-type: direct:development\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-06T16:30:42+01:00",
          "tree_id": "c9cecc9f838a1ae34541bb440d0bbf62f01005f9",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b53d6f1e55b26d548ec3d0fa54a04e8fc029f251"
        },
        "date": 1696606484158,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46063,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 139116,
            "range": "± 4680",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21540,
            "range": "± 138562",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 25456,
            "range": "± 56367",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3382,
            "range": "± 4079",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 304054,
            "range": "± 21525",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 951,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34886,
            "range": "± 147",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1b288b90a1ab98283db8f6c4d181c8682cf6e08",
          "message": "Dont suggest wee-alloc in docs (#630)\n\n`wee-alloc` should no longer be recommended because of a memory leak: https://github.com/rustwasm/wee_alloc/issues/85\r\n\r\nIt appears that the project is abandoned and that this issue will not be fixed anytime soon.\r\n\r\nCloses #614",
          "timestamp": "2023-10-06T15:47:46Z",
          "tree_id": "788f11a32239a5adea239a29db998fc68069940b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a1b288b90a1ab98283db8f6c4d181c8682cf6e08"
        },
        "date": 1696607496744,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 42862,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 132972,
            "range": "± 3428",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 16049,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 25089,
            "range": "± 35724",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 2879,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 301360,
            "range": "± 16714",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 974,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 35133,
            "range": "± 45",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42c1294083993a5388c9c755adf423afcb402d6f",
          "message": "Make batch affect both memos and effects (#631)\n\nAlso simplifies effects by simply making them into memos that have a value of `()`.",
          "timestamp": "2023-10-06T17:16:45+01:00",
          "tree_id": "5c78acfc9efc941b6b3344a753e355d772995360",
          "url": "https://github.com/sycamore-rs/sycamore/commit/42c1294083993a5388c9c755adf423afcb402d6f"
        },
        "date": 1696609230499,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48665,
            "range": "± 2789",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 138271,
            "range": "± 2060",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22580,
            "range": "± 181040",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30312,
            "range": "± 63569",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3762,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 304569,
            "range": "± 43067",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 942,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34223,
            "range": "± 46",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc8bf2995086a1aea343725e56be562ad84d4efc",
          "message": "Repace the `Memo` struct with `ReadSignal` (#632)\n\nRepace the Memo struct with ReadSignal\r\n\r\n`Memo` used to be a wrapper struct around `ReadSignal` which did not provide anything extra so this makes everything simpler.",
          "timestamp": "2023-10-06T16:41:21Z",
          "tree_id": "fd84e8fb23ad891fb47941dcb50443b7b1b92d37",
          "url": "https://github.com/sycamore-rs/sycamore/commit/fc8bf2995086a1aea343725e56be562ad84d4efc"
        },
        "date": 1696610718796,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58697,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 163351,
            "range": "± 3729",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25582,
            "range": "± 86157",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34579,
            "range": "± 72090",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3253,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 385860,
            "range": "± 17501",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1125,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41148,
            "range": "± 40",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a1169ed864a348b3427fe007fce43874444aad0",
          "message": "Update all dependencies (#633)",
          "timestamp": "2023-10-06T18:28:18+01:00",
          "tree_id": "3dc8fb86582ea1f197479c6f42c6233614045135",
          "url": "https://github.com/sycamore-rs/sycamore/commit/8a1169ed864a348b3427fe007fce43874444aad0"
        },
        "date": 1696613525765,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 49251,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 136927,
            "range": "± 2299",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21591,
            "range": "± 138580",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29384,
            "range": "± 52961",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3146,
            "range": "± 25055",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 305082,
            "range": "± 44718",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 941,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34606,
            "range": "± 52",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c7bd44a586b41640fa0d61a3e7343ae4652e700",
          "message": "v0.9.0-beta.2 (#634)",
          "timestamp": "2023-10-06T18:33:35+01:00",
          "tree_id": "fd7ec1bc69126b6294122f92ce80e24cec422881",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9c7bd44a586b41640fa0d61a3e7343ae4652e700"
        },
        "date": 1696613847164,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 46273,
            "range": "± 1335",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 128268,
            "range": "± 3397",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 20212,
            "range": "± 75972",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29392,
            "range": "± 43039",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 2925,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 302508,
            "range": "± 18288",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 973,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 35679,
            "range": "± 27",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1acd2c3c1770c4403ce7d9dce6622a283f08c015",
          "message": "Run everything through prettier (#635)",
          "timestamp": "2023-10-08T07:43:15Z",
          "tree_id": "1d67dc0de2f01128ea97406d2f0d499a4cc777ca",
          "url": "https://github.com/sycamore-rs/sycamore/commit/1acd2c3c1770c4403ce7d9dce6622a283f08c015"
        },
        "date": 1696751233528,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 58045,
            "range": "± 3757",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 160035,
            "range": "± 3505",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 25713,
            "range": "± 82707",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34331,
            "range": "± 69318",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3457,
            "range": "± 815",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 375339,
            "range": "± 14128",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1130,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41569,
            "range": "± 161",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brynnjmccormick@gmail.com",
            "name": "bmc",
            "username": "brynnjmccormick"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c35ee1be931976f9e55189deeb304d9a99c81a11",
          "message": "Update components docs for v0.9 (#637)",
          "timestamp": "2023-10-11T07:51:09+01:00",
          "tree_id": "9c8be2816d4ffbff8e704f8d170323975e0faa8a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c35ee1be931976f9e55189deeb304d9a99c81a11"
        },
        "date": 1697007292043,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48166,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 136757,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22664,
            "range": "± 175110",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30592,
            "range": "± 65417",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3642,
            "range": "± 1063",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 303522,
            "range": "± 24284",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 950,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34932,
            "range": "± 82",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05433da18365ee3198788035cd2c228168d7995b",
          "message": "Add a CONTRIBUTING.md and remove old contributing docs (#636)\n\n* Add CONTRIBUTING.md\r\n\r\n* Remove old contributing docs",
          "timestamp": "2023-10-11T08:14:46+01:00",
          "tree_id": "1ee5f198f93033efc217da48891c480d89602d62",
          "url": "https://github.com/sycamore-rs/sycamore/commit/05433da18365ee3198788035cd2c228168d7995b"
        },
        "date": 1697008708694,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48191,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 137605,
            "range": "± 2659",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21372,
            "range": "± 2442",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 29121,
            "range": "± 55556",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3028,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 307145,
            "range": "± 38722",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 953,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 35186,
            "range": "± 316",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc25aae469a11e03b6fb3c6bef8f033763fa022b",
          "message": "Fix panic about current not being a child of parent in clean_children (#639)",
          "timestamp": "2023-10-13T18:17:42+01:00",
          "tree_id": "ca57ad5dca3b1c039cc19bbd2796fcaed3680eea",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bc25aae469a11e03b6fb3c6bef8f033763fa022b"
        },
        "date": 1697217684383,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 48996,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 137014,
            "range": "± 4001",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 21275,
            "range": "± 137387",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 28910,
            "range": "± 53690",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3087,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 305620,
            "range": "± 40902",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 934,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 34375,
            "range": "± 244",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e49c74cc75856439e2252b7f12333e0e1a66702d",
          "message": "Re-export `wasm-bindgen`, `js-sys`, and event types from `web-sys` (#642)\n\n* re-export web_sys for user convenience\r\n\r\n* also re-exporting js_sys\r\n\r\n* also adding wasm_bindgen because of JsValue\r\n\r\n* Only re-export HTML events instead of web-sys\r\n\r\nweb-sys relies very haevily of feature flags to determine which parts of the API is compiled. Sycamore itself enables a subset of these flags but in many cases, the downstream user will need to add web-sys anyways should they wish to use an API not enabled by Sycamore.\r\n\r\n* Remove wasm-bindgen from examples\r\n\r\n---------\r\n\r\nCo-authored-by: Blaine Hansen <faichenshing@gmail.com>",
          "timestamp": "2023-10-20T15:49:58Z",
          "tree_id": "c85fb3f78149aa6a7ea87118b9793797e9abf4b5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/e49c74cc75856439e2252b7f12333e0e1a66702d"
        },
        "date": 1697817224696,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 60744,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 163595,
            "range": "± 3021",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 26028,
            "range": "± 87213",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 34793,
            "range": "± 74903",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3420,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 368197,
            "range": "± 15437",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1145,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41720,
            "range": "± 1528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28b91068926640a0e45934971219996ef26f2808",
          "message": "Add missing docs and more doctests (#643)\n\n* Add missing docs lint for all crates\r\n\r\n* Add some more doctests for signals",
          "timestamp": "2023-10-20T16:27:08Z",
          "tree_id": "09ada4b379435a750b72c2b7df931a14c7d50871",
          "url": "https://github.com/sycamore-rs/sycamore/commit/28b91068926640a0e45934971219996ef26f2808"
        },
        "date": 1697819465641,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 57610,
            "range": "± 4156",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 161507,
            "range": "± 10461",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 29265,
            "range": "± 118743",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 37347,
            "range": "± 72704",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1855,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 384604,
            "range": "± 29209",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1169,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 41715,
            "range": "± 3341",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9beed5200b0f36b5cff391cbe66d4199aa6e5edf",
          "message": "Move web-sys features from sycamore to sycamore-web (#644)",
          "timestamp": "2023-10-20T17:31:30+01:00",
          "tree_id": "519b1dd3e603e2f0a57ece3e87a9cf324a18105e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9beed5200b0f36b5cff391cbe66d4199aa6e5edf"
        },
        "date": 1697819704417,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 50809,
            "range": "± 902",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 136363,
            "range": "± 3115",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 22234,
            "range": "± 172275",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 30529,
            "range": "± 64500",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 3341,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 334525,
            "range": "± 5137",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 968,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 35363,
            "range": "± 41",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean.fried@gmail.com",
            "name": "noxxxxxious",
            "username": "noxxxxxious"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16acf8eb9a24f695146482be3be22eee14085657",
          "message": "Fix typos left from previous reactive system in router docs (#647)\n\n* Update Router example to use non-referenced ReadSignal\r\n\r\nRerendered docs\r\n\r\n* Update both router examples to no longer use references",
          "timestamp": "2023-11-26T20:32:24Z",
          "tree_id": "37ab7ac7610c0ec7a2b6b5cd02b1f743d2285b6d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/16acf8eb9a24f695146482be3be22eee14085657"
        },
        "date": 1701030912804,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41142,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 122496,
            "range": "± 2062",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14804,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 20743,
            "range": "± 49852",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1364,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 226463,
            "range": "± 33977",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 737,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 24169,
            "range": "± 107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7bec19acfca9e15d5c64a0b264b1b896d5ef745",
          "message": "Refactor view! by extracting parsing logic from codegen into a new crate (#649)\n\n* Add sycamore-view-parser crate\r\n\r\n* Add sycamore_macro::view2 which uses sycamore-view-parser\r\n\r\n* Fix parser bug\r\n\r\n* Remove old macro implementation\r\n\r\n* Fix a few more parser bugs\r\n\r\n* Fix final codegen bugs\r\n\r\n* Satisfy clippy\r\n\r\n* Update UI tests and fix some diagnostics\r\n\r\n* Remove node! macro\r\n\r\n* Improve span for children and dangerously_set_inner_html cannot both be set error message\r\n\r\n* Add extra UI test case for parse error\r\n\r\n* Remove unnecessary derive\r\n\r\n* Add UI test for `bind` directive",
          "timestamp": "2023-12-03T00:01:10Z",
          "tree_id": "9081e1810469cfbf00a3a8743122c8bdaed06618",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a7bec19acfca9e15d5c64a0b264b1b896d5ef745"
        },
        "date": 1701561830290,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 41417,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 124187,
            "range": "± 1550",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 15267,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19519,
            "range": "± 31629",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1323,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 218090,
            "range": "± 43017",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 742,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 24921,
            "range": "± 71",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11613939a534312a293c216f856af567b7d67152",
          "message": "Improve generation of HTML for the hydrate example. (#657)\n\nFix hydrate example rendered HTML\r\n\r\nThis changes the hydrate app to render the HTML when using `cargo run` so that we no longer need to manually update the HTML.",
          "timestamp": "2024-02-01T16:52:59Z",
          "tree_id": "758a93f89060afbc54bf48ec4866e24702c52c2b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/11613939a534312a293c216f856af567b7d67152"
        },
        "date": 1706806544125,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33694,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 112339,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13630,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19817,
            "range": "± 28939",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1489,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 217629,
            "range": "± 105300",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 736,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23828,
            "range": "± 225",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "34ttrweoewiwe28@gmail.com",
            "name": "mikihiro",
            "username": "Hmikihiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34d582ba5aa7d54f839d051dc417b16f9c14da9c",
          "message": "Add current page highlight in website navigation (#660)\n\n* Add underline and bold to navigation\r\n\r\n* cargo fix & cargo clippy\r\n\r\n* remove <Option>\r\n\r\n* rename to SidebarCurrent\r\n\r\n* remove unused_dependencies gloo\r\n\r\n* cargo fix\r\n\r\n* Update website/src/header.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/main.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n* Update website/src/sidebar.rs\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Luke <37006668+lukechu10@users.noreply.github.com>",
          "timestamp": "2024-03-08T08:52:17Z",
          "tree_id": "35a97d397e179ad880726c06ec99c0dc4052d522",
          "url": "https://github.com/sycamore-rs/sycamore/commit/34d582ba5aa7d54f839d051dc417b16f9c14da9c"
        },
        "date": 1709888091286,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33309,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 108824,
            "range": "± 8459",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12667,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19046,
            "range": "± 28835",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 922,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 212064,
            "range": "± 71965",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 705,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 24054,
            "range": "± 103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "34ttrweoewiwe28@gmail.com",
            "name": "mikihiro",
            "username": "Hmikihiro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c5638c089176fa245cc91068b5ff277e495780a",
          "message": "Temporary fix for website book broken navigation (#661)\n\n* Reproduce without \"content::Content()\"\r\n\r\n* move cached_sidebar_data area.\r\n\r\n* cargo clippy\r\n\r\n* cargo clippy\r\n\r\n* cargo clippy",
          "timestamp": "2024-03-17T16:51:46-07:00",
          "tree_id": "fa05c695e2b9559867129e68ce8c66f854f5349b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0c5638c089176fa245cc91068b5ff277e495780a"
        },
        "date": 1710719664350,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33348,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 110254,
            "range": "± 3337",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12929,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19300,
            "range": "± 31510",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1140,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 214363,
            "range": "± 62118",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 705,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23964,
            "range": "± 56",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "583c3d46a686003f96333a1df092a37b44aad922",
          "message": "Update MSVC to 1.73.0 (#663)\n\n* Update MSVC to 1.73.0\r\n\r\n* Fix clippy",
          "timestamp": "2024-03-17T17:03:10-07:00",
          "tree_id": "4d168dc47612247e81a4d28f0fb42c602a2ff500",
          "url": "https://github.com/sycamore-rs/sycamore/commit/583c3d46a686003f96333a1df092a37b44aad922"
        },
        "date": 1710720344148,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33315,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 111091,
            "range": "± 2435",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12744,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 20782,
            "range": "± 28515",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 953,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 210360,
            "range": "± 74734",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 714,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23904,
            "range": "± 46",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11c9fb05bd85f41e85079f76124c0e433c1ab30f",
          "message": "Remove deploy draft workflow (#664)",
          "timestamp": "2024-03-17T17:15:08-07:00",
          "tree_id": "529c64d8478b049f4ddbf78a338d3bb7bb0c1df0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/11c9fb05bd85f41e85079f76124c0e433c1ab30f"
        },
        "date": 1710721095915,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33319,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 110474,
            "range": "± 1561",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14135,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19096,
            "range": "± 33977",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1121,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 217151,
            "range": "± 84654",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 714,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23764,
            "range": "± 58",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cddfe95e08e27b2c0bc134b837d799d0c5e087a8",
          "message": "Update trunk to v0.19.1 and disable minification for hydrate example (#665)",
          "timestamp": "2024-03-17T17:31:09-07:00",
          "tree_id": "dea9e417a01d28419c7f69f559eb0aed93e2cfca",
          "url": "https://github.com/sycamore-rs/sycamore/commit/cddfe95e08e27b2c0bc134b837d799d0c5e087a8"
        },
        "date": 1710722067284,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33307,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 110111,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12876,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19216,
            "range": "± 29957",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1034,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 213053,
            "range": "± 68169",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 744,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23834,
            "range": "± 99",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7140c12293ab1db441375627c0a1be092a44136c",
          "message": "Maintenance: fix all the new clippy warnings (#666)\n\n* Relax trait bounds for map_{keyed, index}\r\n\r\n* Remove useless import\r\n\r\n* Fix clippy warnings",
          "timestamp": "2024-03-22T10:32:36-07:00",
          "tree_id": "b87ee11cc2502abd8c331ab68ba005dcd583a0c4",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7140c12293ab1db441375627c0a1be092a44136c"
        },
        "date": 1711128917939,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33000,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 108884,
            "range": "± 2491",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12416,
            "range": "± 40342",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 20082,
            "range": "± 31562",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 926,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 213453,
            "range": "± 111904",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 713,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23475,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d46d5ed207aa9148498dff24c9a3744180d9767",
          "message": "Add `track_caller` attribute to `provide_context*` and `use_context` functions (#667)",
          "timestamp": "2024-03-22T18:54:19-07:00",
          "tree_id": "b079e8111115a5710985e6fa5eb87bd0e1514de5",
          "url": "https://github.com/sycamore-rs/sycamore/commit/5d46d5ed207aa9148498dff24c9a3744180d9767"
        },
        "date": 1711159019951,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32818,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 112996,
            "range": "± 3354",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12521,
            "range": "± 40227",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19112,
            "range": "± 28689",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1062,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 213838,
            "range": "± 84964",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 708,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23118,
            "range": "± 214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109115028+dyanechi@users.noreply.github.com",
            "name": "Dawid Janeczko",
            "username": "dyanechi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86f0b057fae722c4100629ba0931f8ce7d208c6b",
          "message": "Fix: re-export `SubmitEvent` from `sycamore-web` (#668)\n\nAllows to use SubmitEvent in closures to avoid errors when submitting form with `on:submit`.",
          "timestamp": "2024-04-02T21:39:58-07:00",
          "tree_id": "90550cd0d0ff15726a65778c19d8da84fa789eba",
          "url": "https://github.com/sycamore-rs/sycamore/commit/86f0b057fae722c4100629ba0931f8ce7d208c6b"
        },
        "date": 1712119365389,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32881,
            "range": "± 1366",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 109165,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12575,
            "range": "± 42067",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19176,
            "range": "± 29816",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1074,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 213372,
            "range": "± 70578",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 711,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 22864,
            "range": "± 266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jasoncameron.all@gmail.com",
            "name": "Jason Cameron",
            "username": "JasonLovesDoggo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc658d15842869f190095d4abb748aeb75e605f1",
          "message": "Change API in http-request example as old API got taken down (#674)\n\n* Replace CountAPI as it got taken down\r\n\r\n* Replace CountAPI as it got taken down",
          "timestamp": "2024-06-04T16:37:13+01:00",
          "tree_id": "87f7d828758f0da3d08ba4694c2becef77011a5a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/bc658d15842869f190095d4abb748aeb75e605f1"
        },
        "date": 1717515592582,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 33094,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 108380,
            "range": "± 2993",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12890,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19223,
            "range": "± 32041",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 951,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 214462,
            "range": "± 158427",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 716,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23088,
            "range": "± 203",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90356a7851d5222eecbd04a2a5b606ee4663d1a7",
          "message": "Bump braces from 3.0.2 to 3.0.3 in /website (#675)\n\nBumps [braces](https://github.com/micromatch/braces) from 3.0.2 to 3.0.3.\r\n- [Changelog](https://github.com/micromatch/braces/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/micromatch/braces/compare/3.0.2...3.0.3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: braces\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-23T14:04:51+01:00",
          "tree_id": "e91fffbd396528ad9b9ac2d33a4817c2950dc3d2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/90356a7851d5222eecbd04a2a5b606ee4663d1a7"
        },
        "date": 1719148046533,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32559,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 108427,
            "range": "± 2465",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12594,
            "range": "± 39416",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19640,
            "range": "± 29458",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 919,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 211037,
            "range": "± 78932",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 682,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23189,
            "range": "± 114",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mtshr319@gmail.com",
            "name": "mtshr",
            "username": "mtshr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5ce9d57a23ede25a8fa1615b3cb07e3aa29fd3b",
          "message": "Rename the tag type alias in proc macro to solve warning (#677)",
          "timestamp": "2024-07-11T20:22:10-07:00",
          "tree_id": "9315cc6f12d51960578beb1d7848a81ae60052fe",
          "url": "https://github.com/sycamore-rs/sycamore/commit/b5ce9d57a23ede25a8fa1615b3cb07e3aa29fd3b"
        },
        "date": 1720754690072,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32208,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 108323,
            "range": "± 2486",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13529,
            "range": "± 41209",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18998,
            "range": "± 28534",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 968,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 211909,
            "range": "± 72898",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 673,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 23384,
            "range": "± 179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac114a6860e701e44df506829c6c78fc75edb064",
          "message": "View Backend v2! (Attempt 2) (#679)\n\n* Add sycamore-web2 crate\r\n\r\nCopy pasted from https://github.com/lukechu10/sycamore-web2\r\n\r\n* Move things from sycamore-core to sycamore-web2\r\n\r\n* wip\r\n\r\n* Support attributes in macro\r\n\r\n* wip\r\n\r\n* Add support for props\r\n\r\n* Add support for bind\r\n\r\n* Replace sycamore-web with sycamore-web2\r\n\r\n* Nuke the old builder API\r\n\r\n* Remove attribute spread support from components\r\n\r\nWill add it back later\r\n\r\n* Remove a lot of things from sycamore crate\r\n\r\n* Start porting some examples and router\r\n\r\n* Update remaining examples\r\n\r\n* Add on_mount to sycamore-web\r\n\r\n* wip\r\n\r\n* Make the website compile\r\n\r\n* Fix warnings\r\n\r\n* Add window and document utility functions\r\n\r\n* Add some logging utility functions\r\n\r\n* Fix sycamore-web doc tests\r\n\r\n* Use window and document functions exported from sycamore\r\n\r\n* Remove `hydrate` feature flag (included by default)\r\n\r\n* Move ssr tests\r\n\r\n* Add suspense feature to sycamore-web\r\n\r\n* wip migrate tests\r\n\r\n* Fix some warnings\r\n\r\n* wip dummy-crate\r\n\r\n* Mostly finish SSR mode\r\n\r\n* Add create_effect_initial\r\n\r\nThis was removed all the way back in Sycamore v0.6! However, it turns\r\nout that it is very useful after all so it's back now.\r\n\r\n* Relax FnMut to FnOnce for create_effect_initial\r\n\r\n* DomNode initial implementation\r\n\r\n* Finish DomNode methods\r\n\r\n* Compiles!\r\n\r\n* Hello world works!\r\n\r\n* Counter works!\r\n\r\n* Move `.map()` to `ReadSignal` instead of `Signal`\r\n\r\n* Run initial effect in outer scope\r\n\r\n* Implement iteration again\r\n\r\n* Fix router\r\n\r\n* Cleanup some tests\r\n\r\n* wip\r\n\r\n* Hydration part 1\r\n\r\n* Fix hydration\r\n\r\n* NoSsr and NoHydrate\r\n\r\n* Fix docs and intra-doc links\r\n\r\n* Small changes\r\n\r\n* Update action for js-framework-bench\r\n\r\n* Reorganisation\r\n\r\n* Suspense works\r\n\r\n* Fix sycamore-web tests\r\n\r\n* Fix more sycamore-web tests, remove render_to_string_await_suspense\r\n\r\n* Fix some more tests\r\n\r\n* Fix web tests and a few bugs while at it\r\n\r\n* Implement use_stable_counter\r\n\r\n* Store root node in `Root`\r\n\r\n* Add test for use_stable_counter\r\n\r\n* Fix create_root not running function in root scope.\r\n\r\n* Implement async event handlers\r\n\r\n* Remove UI test for attribute props\r\n\r\n* Update MSRV to 1.81.0 and update UI tests\r\n\r\n* Remove remaining attribute spread tests\r\n\r\n* Quick pass of updating the docs\r\n\r\nThere will be a full docs rewrite before the final 0.9 release so this\r\nwill do for now.\r\n\r\n* Add missing cfg guard\r\n\r\n* Update benchmarks\r\n\r\n* Portal fix dynamic view\r\n\r\n* Remove debug message (Oops!)\r\n\r\n* Update migration guide\r\n\r\n* Fix portal again",
          "timestamp": "2024-09-09T11:52:02+02:00",
          "tree_id": "80e690e21c313cc38f3f11f835962ae494cb75aa",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ac114a6860e701e44df506829c6c78fc75edb064"
        },
        "date": 1725875686643,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32311,
            "range": "± 7824",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 115487,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13473,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19496,
            "range": "± 30236",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1052,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204559,
            "range": "± 69571",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1124,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20324,
            "range": "± 487",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2f7bd887c91cb9582a0c0f115319d59ccfb4ff0",
          "message": "Remove `target_wasm32` folder (#680)\n\nCommitted by accident",
          "timestamp": "2024-09-09T11:56:26+02:00",
          "tree_id": "a996721462f523f96cda80bf47730218af8c3c9c",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a2f7bd887c91cb9582a0c0f115319d59ccfb4ff0"
        },
        "date": 1725875947540,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32308,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 118670,
            "range": "± 3112",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12817,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18778,
            "range": "± 27721",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 989,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 205285,
            "range": "± 61649",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1118,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20720,
            "range": "± 121",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3820e9e0d95344d08db001321480378e1574a00",
          "message": "Update some old docs (#681)",
          "timestamp": "2024-09-09T12:10:36+02:00",
          "tree_id": "33424b3eecc92f30d6a51e26ede1bd9002d344e2",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a3820e9e0d95344d08db001321480378e1574a00"
        },
        "date": 1725876795724,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32473,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 112252,
            "range": "± 2081",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12626,
            "range": "± 1124",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18573,
            "range": "± 27154",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1008,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 205580,
            "range": "± 80420",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1140,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20911,
            "range": "± 144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "846bc3bc955c2930b88cf8e0d3134a4236ae4484",
          "message": "Fix `set_fn` to not be silent (#682)",
          "timestamp": "2024-09-09T10:19:19Z",
          "tree_id": "c04d434a63b10b4215e6ea889fe00a074932d1e0",
          "url": "https://github.com/sycamore-rs/sycamore/commit/846bc3bc955c2930b88cf8e0d3134a4236ae4484"
        },
        "date": 1725877320700,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32259,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 111072,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12732,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19651,
            "range": "± 26823",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1045,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 206033,
            "range": "± 71926",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1121,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20459,
            "range": "± 343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cded1c02f6029f4b49ea477a6cf37087e0ba261c",
          "message": "v0.9.0-beta.3 (#683)",
          "timestamp": "2024-09-09T15:39:44+02:00",
          "tree_id": "7a05bc493bb12cb34aa7a2ff437a44d774bb435d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/cded1c02f6029f4b49ea477a6cf37087e0ba261c"
        },
        "date": 1725889346056,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32354,
            "range": "± 1259",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 112773,
            "range": "± 3517",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12857,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18825,
            "range": "± 28856",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1071,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 205146,
            "range": "± 62465",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1125,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20032,
            "range": "± 49",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "922d2358da513218a8452ac830f1063561c4322d",
          "message": "Fix missing version in dependency (#684)",
          "timestamp": "2024-09-09T15:42:35+02:00",
          "tree_id": "e817b0390339f07adc06bfb60aab7e39a8417454",
          "url": "https://github.com/sycamore-rs/sycamore/commit/922d2358da513218a8452ac830f1063561c4322d"
        },
        "date": 1725889518353,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32331,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 105944,
            "range": "± 2472",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12764,
            "range": "± 1159",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18698,
            "range": "± 30173",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1110,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 206246,
            "range": "± 117030",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1121,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20035,
            "range": "± 919",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a47b8ccadb56d77a8ada9c7198a6d98937575ba4",
          "message": "fixup: missing keys in Cargo.toml (#685)",
          "timestamp": "2024-09-09T15:47:53+02:00",
          "tree_id": "e66fb1b0c21f3161ff3f80406a00833c5d02e26b",
          "url": "https://github.com/sycamore-rs/sycamore/commit/a47b8ccadb56d77a8ada9c7198a6d98937575ba4"
        },
        "date": 1725889837095,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32435,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 114234,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13091,
            "range": "± 1164",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19793,
            "range": "± 30783",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1263,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 203832,
            "range": "± 69858",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1095,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20050,
            "range": "± 126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "081ec4015917db45386c1f1fe9c5d3523af1fb2e",
          "message": "Update codecov action (#686)",
          "timestamp": "2024-09-09T16:12:10+02:00",
          "tree_id": "71531d890affd66f15e886794a433dccaf0ff71d",
          "url": "https://github.com/sycamore-rs/sycamore/commit/081ec4015917db45386c1f1fe9c5d3523af1fb2e"
        },
        "date": 1725891288261,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32283,
            "range": "± 844",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106002,
            "range": "± 2850",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12876,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19422,
            "range": "± 31974",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1121,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204909,
            "range": "± 62342",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1105,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 19718,
            "range": "± 65",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "727360e16c00a5575da276ad21502212bcb21d28",
          "message": "fixup: wrong version in docs (#687)",
          "timestamp": "2024-09-09T17:00:38+02:00",
          "tree_id": "eef125b4d485b9582387b52d2aca7a70f5dd962e",
          "url": "https://github.com/sycamore-rs/sycamore/commit/727360e16c00a5575da276ad21502212bcb21d28"
        },
        "date": 1725894198329,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32286,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 105924,
            "range": "± 2534",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13010,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18861,
            "range": "± 27399",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 954,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 207282,
            "range": "± 168474",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1122,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20173,
            "range": "± 186",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c849c572fcb95d6ba47d94d8d34229a21a72b443",
          "message": "Make `ViewHtmlNode` methods use `Cow<'static, str>` instead of `&'static str` (#688)\n\nMake some ViewHtmlNode methods use Cow<str> instead of &str\r\n\r\nfixup: cargo fmt",
          "timestamp": "2024-09-09T21:17:56+02:00",
          "tree_id": "c2499b2eed26550b553e63b34610309d3b855d4a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/c849c572fcb95d6ba47d94d8d34229a21a72b443"
        },
        "date": 1725909638734,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32294,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106013,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13295,
            "range": "± 1243",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19860,
            "range": "± 33351",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1295,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204652,
            "range": "± 70647",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1121,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20271,
            "range": "± 1029",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a03d5bc333a703ec142ab87e78c2ee240ecb783",
          "message": "Make `HtmlNode` into `pub` (#689)\n\nMake `HtmlNode` pub visibility",
          "timestamp": "2024-09-09T21:30:05+02:00",
          "tree_id": "4e5362d1286fe4cec5a830889e0cea5177178dac",
          "url": "https://github.com/sycamore-rs/sycamore/commit/0a03d5bc333a703ec142ab87e78c2ee240ecb783"
        },
        "date": 1725910367369,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32291,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 108143,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12977,
            "range": "± 1190",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19571,
            "range": "± 29853",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1067,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204280,
            "range": "± 64972",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1108,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20288,
            "range": "± 139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f6bb3589ba9c4fcdc9c788e107f7f7aa5337566",
          "message": "Update README.md to match new API",
          "timestamp": "2024-09-09T21:46:54+02:00",
          "tree_id": "cb06c117bfe973b76fbb46b2691264d09d4b2aca",
          "url": "https://github.com/sycamore-rs/sycamore/commit/9f6bb3589ba9c4fcdc9c788e107f7f7aa5337566"
        },
        "date": 1725911376853,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32316,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106008,
            "range": "± 4432",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13088,
            "range": "± 1321",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19745,
            "range": "± 30767",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1191,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 209326,
            "range": "± 69146",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1160,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20240,
            "range": "± 139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "002237f5f80c8f7d912281e6c88079e1357ec695",
          "message": "Update alternatives section in README.md",
          "timestamp": "2024-09-09T21:52:50+02:00",
          "tree_id": "27cff0e03a56b6eebb349fd20400df26eca8b9ee",
          "url": "https://github.com/sycamore-rs/sycamore/commit/002237f5f80c8f7d912281e6c88079e1357ec695"
        },
        "date": 1725911734697,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32615,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106915,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 13169,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19817,
            "range": "± 30831",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1047,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204804,
            "range": "± 66249",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1116,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20011,
            "range": "± 100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba34877bf5a0606fcd28ac33ff152dca5443d7ec",
          "message": "Fix `NoHydrate` should render if not hydrating (#690)\n\nFix NoHydrate should render after hydration on client side",
          "timestamp": "2024-09-11T10:00:44+02:00",
          "tree_id": "e6148dcd21b2d7c854a6128a67d354aa5c8afae3",
          "url": "https://github.com/sycamore-rs/sycamore/commit/ba34877bf5a0606fcd28ac33ff152dca5443d7ec"
        },
        "date": 1726041808052,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32365,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106621,
            "range": "± 1533",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12885,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18906,
            "range": "± 29977",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1682,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 207246,
            "range": "± 91886",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1124,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20326,
            "range": "± 246",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e1b09f95ea907575e65ac199460287080045fc4",
          "message": "Remove `nom` dependency and replace with hand written parser (#691)\n\n* Remove `nom` dependency and replace with hand written parser\r\n\r\n* Update UI tests\r\n\r\n* cargo fmt",
          "timestamp": "2024-09-11T20:07:02+02:00",
          "tree_id": "64bf2a73ec88cffff94c32504824a0f8ba3cd08f",
          "url": "https://github.com/sycamore-rs/sycamore/commit/7e1b09f95ea907575e65ac199460287080045fc4"
        },
        "date": 1726078185262,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32378,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106232,
            "range": "± 4697",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12966,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 18929,
            "range": "± 28095",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1264,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 206079,
            "range": "± 62318",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1100,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20029,
            "range": "± 146",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f43eb9d1e18a8b042978e50b7e19f90d133d53e1",
          "message": "Update iteration.md with new API usage",
          "timestamp": "2024-09-12T09:27:09+02:00",
          "tree_id": "8553eee954f6375fb031f4c1670339e40430eb2a",
          "url": "https://github.com/sycamore-rs/sycamore/commit/f43eb9d1e18a8b042978e50b7e19f90d133d53e1"
        },
        "date": 1726126187265,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32349,
            "range": "± 5081",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 106035,
            "range": "± 1956",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12882,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19259,
            "range": "± 29742",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 946,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 203892,
            "range": "± 67989",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1111,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20145,
            "range": "± 170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fa36a68fc1ddd0d6ddc89085791b1bbcea302bb",
          "message": "Reorganize `sycamore-web` (#692)\n\n* Rename dom.rs to dom_node.rs etc...\r\n\r\n* Split rendering methods into new files",
          "timestamp": "2024-09-12T10:04:50+02:00",
          "tree_id": "32adfa0fbb5e046122e7414855c4260cc5818900",
          "url": "https://github.com/sycamore-rs/sycamore/commit/2fa36a68fc1ddd0d6ddc89085791b1bbcea302bb"
        },
        "date": 1726128450349,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32338,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 105927,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 12979,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19582,
            "range": "± 29403",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1014,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204863,
            "range": "± 68047",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1104,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20249,
            "range": "± 142",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "37006668+lukechu10@users.noreply.github.com",
            "name": "Luke",
            "username": "lukechu10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96a756baea7b15aa87f4a5c7885afc090211acb5",
          "message": "Move `MaybeDyn` to new file and add some impls (#693)",
          "timestamp": "2024-09-12T11:07:11+02:00",
          "tree_id": "6e1851459430873a5941648744533edf2f9e6a45",
          "url": "https://github.com/sycamore-rs/sycamore/commit/96a756baea7b15aa87f4a5c7885afc090211acb5"
        },
        "date": 1726132187139,
        "tool": "cargo",
        "benches": [
          {
            "name": "reactivity_signals",
            "value": 32375,
            "range": "± 679",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_effects",
            "value": 114626,
            "range": "± 25860",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_indexed",
            "value": 14641,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_map_keyed",
            "value": 19147,
            "range": "± 29283",
            "unit": "ns/iter"
          },
          {
            "name": "reactivity_context_deeply_nested",
            "value": 1294,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "deep_creation",
            "value": 204141,
            "range": "± 59970",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_small",
            "value": 1131,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "ssr_medium",
            "value": 20096,
            "range": "± 61",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}