import{_ as s,c as t,o as n,a as e}from"./app-keFXRlWq.js";const a={},i=e(`<h1 id="新建笔记-20231228" tabindex="-1"><a class="header-anchor" href="#新建笔记-20231228"><span>新建笔记(20231228)</span></a></h1><p>1、流式对话接口</p><p><strong>正式接口URL</strong>：http://116.204.85.243:8000/stream</p><p>==先用测试接口，后续调试成功改为正式接口==</p><p><strong>请求方式</strong>：POST <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;query&quot;:&quot;你是谁&quot;,</span>
<span class="line">  &quot;history&quot;:[[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>query</td><td>&quot;你是谁&quot;</td><td>字符串</td><td>是</td><td>对话内容、问题</td></tr><tr><td>history</td><td>[[&quot;你好&quot;, &quot;你好！......&quot;]]</td><td>列表</td><td>是</td><td>对话历史记录</td></tr></tbody></table><p>****注：history可为空，为对话历史记录。每次对话会返回用户传入的历史记录和最新的聊天记录，如果需要传入历史记录，可直接提取对话返回的列表，设置传入聊天历史的条数作为历史记录参数。</p><hr><p><strong>成功响应示例</strong>：</p><div class="language-event line-numbers-mode" data-highlighter="prismjs" data-ext="event" data-title="event"><pre><code><span class="line">data: {&quot;delta&quot;: &quot;你&quot;, &quot;response&quot;: &quot;你&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;好&quot;, &quot;response&quot;: &quot;你好&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;！&quot;, &quot;response&quot;: &quot;你好！&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            </span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;query&quot;: &quot;你好&quot;, &quot;delta&quot;: &quot;[EOS]&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;history&quot;: [[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]], &quot;finished&quot;: true}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>内容说明</th></tr></thead><tbody><tr><td>event</td><td>sse协议中每触发一次事件会生成一个evnet，不可更改</td></tr><tr><td>data</td><td>每次事件返回的结果</td></tr><tr><td>delta</td><td>每次事件返回一个短字符串，流式接口读取该字符串用于前端展示；如果返回[EOS]表示内容结束标志。</td></tr><tr><td>response</td><td>每次事件产生后返回的总内容</td></tr><tr><td>query</td><td>表示用户对话内容或问题</td></tr><tr><td>history</td><td>表示本次对话的历史记录，如果用户传入参数中有history，会一并返回给用户</td></tr><tr><td>finished</td><td>流式接口结束标志，false表示没有结束，true表示本次对话结束。</td></tr></tbody></table><h2 id="_2、本地知识库流式对话接口" tabindex="-1"><a class="header-anchor" href="#_2、本地知识库流式对话接口"><span>2、本地知识库流式对话接口</span></a></h2><p><strong>正式接口UR</strong>L：http://116.204.85.243:8000/local_doc_stream</p><p>==先用测试接口，后续调试成功改为正式接口==</p><p><strong>请求方式</strong>：POST <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">  &quot;query&quot;:&quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;,</span>
<span class="line">  &quot;history&quot;:[[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>query</td><td>&quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;</td><td>字符串</td><td>是</td><td>对话内容、问题</td></tr><tr><td>history</td><td>[[&quot;你好&quot;, &quot;你好！......&quot;]]</td><td>列表</td><td>是</td><td>对话历史记录</td></tr></tbody></table><p>****注：history可为空，为对话历史记录。每次对话会返回用户传入的历史记录和最新的聊天记录，如果需要传入历史记录，可直接提取对话返回的列表，设置传入聊天历史的条数作为历史记录参数。</p><hr><p><strong>成功响应示例</strong>：</p><p>==①如果匹配到本地知识库内容==</p><div class="language-resp_idevent line-numbers-mode" data-highlighter="prismjs" data-ext="resp_idevent" data-title="resp_idevent"><pre><code><span class="line">data: {&quot;delta&quot;: &quot;根据&quot;, &quot;response&quot;: &quot;根据&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;已知&quot;, &quot;response&quot;: &quot;根据已知&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;信息&quot;, &quot;response&quot;: &quot;根据已知信息&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            </span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;&quot;, &quot;response&quot;: &quot;根据已知信息,雾炮可以将空气中的微小颗粒浓度降低15%左右。&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;query&quot;: &quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;, &quot;delta&quot;: &quot;[EOS]&quot;, &quot;response&quot;: &quot;根据已知信息,雾炮可以将空气中的微小颗粒浓度降低15%左右。&quot;, &quot;history&quot;: [[&quot;雾炮机可以将空气中的微小颗粒浓度降低吗&quot;, &quot;根据已知信息,雾炮可以将空气中的微小颗粒浓度降低15%左右。&quot;]], &quot;finished&quot;: true, &quot;resp_content&quot;: [{&quot;id&quot;: &quot;lk_2&quot;, &quot;content&quot;: &quot;“雾炮”可以将空气中的微小颗粒浓度降低15%左右&quot;,&quot;que_title&quot;:&quot;“雾炮”能将空气中的微小颗粒浓度降低到多少&quot;}], &quot;source_documents&quot;: true}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>==②如果没有匹配到本地知识库内容==</p><div class="language-event line-numbers-mode" data-highlighter="prismjs" data-ext="event" data-title="event"><pre><code><span class="line">data: {&quot;delta&quot;: &quot;你&quot;, &quot;response&quot;: &quot;你&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;好&quot;, &quot;response&quot;: &quot;你好&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;！&quot;, &quot;response&quot;: &quot;你好！&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            .</span>
<span class="line">            </span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;delta&quot;: &quot;&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;finished&quot;: false}</span>
<span class="line"></span>
<span class="line">event: delta</span>
<span class="line">data: {&quot;query&quot;: &quot;你好&quot;, &quot;delta&quot;: &quot;[EOS]&quot;, &quot;response&quot;: &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;, &quot;history&quot;: [[&quot;你好&quot;, &quot;你好！我是数链生态 AI 小助手，由河北先进环保产业创新中心有限公司研发而成，专注于生态环境领域知识分享，为用户提供一站式的知识问答、数据解析、专家问诊、经验分享！请问有什么我可以帮助您的吗？&quot;]], &quot;finished&quot;: true, &quot;source_documents&quot;: false}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>内容说明</th></tr></thead><tbody><tr><td>event</td><td>sse协议中每触发一次事件会生成一个evnet，不可更改</td></tr><tr><td>data</td><td>每次事件返回的结果</td></tr><tr><td>delta</td><td>每次事件返回一个短字符串，流式接口读取该字符串用于前端展示；如果返回[EOS]表示内容结束标志。</td></tr><tr><td>response</td><td>每次事件产生后返回的总内容</td></tr><tr><td>query</td><td>表示用户对话内容或问题</td></tr><tr><td>history</td><td>表示本次对话的历史记录，如果用户传入参数中有history，会一并返回给用户</td></tr><tr><td>finished</td><td>流式接口结束标志，false表示没有结束，true表示本次对话结束。</td></tr><tr><td>source_documents</td><td>是否匹配到本地知识库标识，如果匹配到为true，如果没有匹配到为false</td></tr><tr><td>resp_content</td><td>如果匹配到本地知识库内容，则会返回所匹配内容的id和内容，如果没有匹配到，则没有该参数注意：id表示所匹配的id，content表示所匹配的内容；que_title表示所匹配内容的标题返回格式为列表形式，列表中存放id、que_title和content字典，目前列表中只存储一条匹配度最高的字典</td></tr></tbody></table><h2 id="_3、添加单条知识到知识库接口" tabindex="-1"><a class="header-anchor" href="#_3、添加单条知识到知识库接口"><span>3、添加单条知识到知识库接口</span></a></h2><p><strong>正式接口URL</strong>：http://116.204.85.243:8000/local_doc_qa/upload_one_knowledge</p><p>==先用测试接口，后续调试成功改为正式接口==</p><p><strong>请求方式</strong>：POST <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">&quot;local_knowledge_title&quot;:&quot;PM2.5/PM10比值反映什么？&quot;,</span>
<span class="line">&quot;local_knowledge&quot;:&quot;PM2.5，即大气颗粒物（Particulate Matter）的粒径小于或等于2.5微米的微小颗粒物。它是大气污染中的一个重要指标，对人体健康和环境质量有着重要影响。PM2.5的主要来源包括：1、工业排放：工业生产过程中会排放许多颗粒物，尤其是一些重工业和制造业。2、交通运输：汽车、卡车、船舶等交通工具的尾气排放中含有颗粒物，特别是柴油发动机产生的颗粒物较多。3、建筑施工：施工现场扬尘是一个重要的颗粒物来源，特别是在干燥、风速较高的条件下。4、农业活动：农业作业中，耕地的翻耕、种植、收割等过程会扬起土壤颗粒。5、生物质燃烧：包括木材、秸秆、生活垃圾等的燃烧会释放出颗粒物。6、燃煤：燃煤是重要的固体颗粒物来源，尤其是在一些地区的取暖季节。7、天然来源：如火山爆发、沙尘暴等天然现象也会产生颗粒物。8、工业生产过程中的化学反应：一些工业过程中的化学反应会产生细小颗粒。需要注意的是，PM2.5的来源是多样化的，其组成也会随着地区、季节和气象条件的不同而有所变化。因此，有效控制PM2.5污染需要综合考虑各种因素，采取相应的控制措施。&quot;,</span>
<span class="line">&quot;local_knowledge_id&quot;:&quot;lk_0&quot;,</span>
<span class="line">&quot;knowledge_base_id&quot;:&quot;dureader_robust_query_encoder&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>local_knowledge_title</td><td>&quot;PM2.5/PM10比值反映什么？&quot;</td><td>string</td><td>是</td><td>上传文本标题或问题</td></tr><tr><td>local_knowledge</td><td>&quot;PM2.5，即大气颗粒物（Particulate Matter）的粒径小于或等于2.5微米的微小颗粒物。...&quot;</td><td>string</td><td>是</td><td>上传文本内容</td></tr><tr><td>local_knowledge_id</td><td>&quot;lk_0&quot;</td><td>string</td><td>是</td><td>上传文本内容的id</td></tr><tr><td>knowledge_base_id</td><td>&quot;env_samples_3&quot;</td><td>string</td><td>是</td><td>知识库id</td></tr></tbody></table><p><strong>成功响应示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 200,</span>
<span class="line">    &quot;msg&quot;: &quot; lk_0 已上传至新的知识库，并已加载知识库，请开始提问。&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、删除知识库某条知识接口" tabindex="-1"><a class="header-anchor" href="#_4、删除知识库某条知识接口"><span>4、删除知识库某条知识接口</span></a></h2><p><strong>正式接口URL</strong>：http://116.204.85.243:8000/local_doc_qa/delete_knowledge</p><p>==先用测试接口，后续调试成功改为正式接口==</p><p><strong>请求方式</strong>：DELETE <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">&quot;local_knowledge_id&quot;:&quot;lk_0&quot;,</span>
<span class="line">&quot;knowledge_base_id&quot;:&quot;dureader_robust_query_encoder&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>示例值</th><th>参数类型</th><th>是否必填</th><th>参数描述</th></tr></thead><tbody><tr><td>local_knowledge_id</td><td>&quot;lk_0&quot;</td><td>string</td><td>是</td><td>要删除的文本内容的id</td></tr><tr><td>knowledge_base_id</td><td>&quot;dureader_robust_query_encoder&quot;</td><td>string</td><td>是</td><td>知识库id</td></tr></tbody></table><p><strong>成功响应示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 200,</span>
<span class="line">    &quot;msg&quot;: &quot; lk_0 删除成功&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、获取知识库中知识列表id接口" tabindex="-1"><a class="header-anchor" href="#_5、获取知识库中知识列表id接口"><span>5、获取知识库中知识列表id接口</span></a></h2><p><strong>正式接口URL</strong>：http://116.204.85.243:8000/local_doc_qa/list_knowledge</p><p>==先用测试接口，后续调试成功改为正式接口==</p><p><strong>请求方式</strong>：GET <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{&quot;knowledge_base_id&quot;:&quot;dureader_robust_query_encoder&quot;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>参数说明：</strong> knowledge_base_id 表示访问的知识库的id，直接写成env_samples_3即可。</p><br><p><strong>成功响应示例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 200,</span>
<span class="line">    &quot;msg&quot;: &quot;success&quot;,</span>
<span class="line">    &quot;data&quot;: [</span>
<span class="line">        &quot;98644306232524842002253837&quot;,</span>
<span class="line">        &quot;98648899219462052252717306&quot;,</span>
<span class="line">        &quot;87509736484900192002159955&quot;,</span>
<span class="line">        &quot;98658536012265662252194179&quot;,</span>
<span class="line">        &quot;87487784798641272002656855&quot;</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，code表示状态码，返回200即为成功响应，data是返回的知识库中知识id的列表。</p><br><h2 id="_6、获取知识库中某条知识对应向量列表id及内容接口" tabindex="-1"><a class="header-anchor" href="#_6、获取知识库中某条知识对应向量列表id及内容接口"><span>6、获取知识库中某条知识对应向量列表id及内容接口</span></a></h2><p><strong>正式接口URL</strong>：http://116.204.85.243:8000/local_doc_qa/list_source_ids</p><br><p>==先用测试接口，后续调试成功改为正式接口== <strong>请求方式</strong>：GET <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;knowledge_base_id&quot;:&quot;dureader_robust_query_encoder&quot;,</span>
<span class="line">    &quot;local_knowledge_id&quot;:&quot;87487784798641272002656855&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明：</strong> knowledge_base_id 表示访问的知识库的id，直接写成env_samples_3即可;local_knowledge_id 表示知识库中某条知识的文本id。</p><p><strong>成功响应示例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 200,</span>
<span class="line">    &quot;msg&quot;: &quot;success&quot;,</span>
<span class="line">    &quot;data&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;45f02f1d-f580-4483-b063-f4e2bdf21a58&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;PM2.5/PM10比值反映城市一次颗粒物治理情况，比值越低，一次颗粒物排放源治理需加强。&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;6f907354-33a7-42cd-ab7d-2ef28a377d76&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;以5月份为例，颗粒物治理水平较好的城市，如珠海、重庆等城市能达到0.6以上；一般城市西安、郑州等在0.45-0.5左右；若低于0.4，则说明颗粒物治理水平较差，亟需加强扬尘管控力度&quot;</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，code表示状态码，返回200即为成功响应，data是返回的该条知识对应的向量的id和内容的字典列表，id表示该条知识对应的向量id，content表示该id的向量内容。</p><br><h2 id="_7、根据关键字搜索知识库中知识" tabindex="-1"><a class="header-anchor" href="#_7、根据关键字搜索知识库中知识"><span>7、根据关键字搜索知识库中知识</span></a></h2><p><strong>正式接口URL</strong>：http://116.204.85.243:8000/local_doc_qa/list_document_by_query</p><p>==先用测试接口，后续调试成功改为正式接口== <strong>请求方式</strong>：GET <strong>请求示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;knowledge_base_id&quot;:&quot;dureader_robust_query_encoder&quot;,</span>
<span class="line">    &quot;query&quot;:&quot;PM2.5&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明：</strong> knowledge_base_id 表示访问的知识库的id，必须指定知识库名称;query表示要搜索的字。</p><br><p><strong>成功响应示例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 200,</span>
<span class="line">    &quot;msg&quot;: &quot;success&quot;,</span>
<span class="line">    &quot;data&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;45f02f1d-f580-4483-b063-f4e2bdf21a58&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;PM2.5/PM10比值反映城市一次颗粒物治理情况，比值越低，一次颗粒物排放源治理需加强。&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;id&quot;: &quot;6f907354-33a7-42cd-ab7d-2ef28a377d76&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;以5月份为例，颗粒物治理水平较好的城市，如珠海、重庆等城市能达到0.6以上；一般城市西安、郑州等在0.45-0.5左右；若低于0.4，则说明颗粒物治理水平较差，亟需加强扬尘管控力度&quot;</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，code表示状态码，返回200即为成功响应，data是返回的该条知识对应的向量的id和内容的字典列表，id表示该条知识对应的向量id，content表示该id的向量内容。</p><br><h2 id="_8、通过向量id删除指定向量" tabindex="-1"><a class="header-anchor" href="#_8、通过向量id删除指定向量"><span>8、通过向量id删除指定向量</span></a></h2><p>接口：http://116.204.85.243:8000/local_doc_qa/delete_vector</p><br><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;knowledge_base_id&quot;:&quot;dureader_robust_query_encoder&quot;,</span>
<span class="line">    &quot;vector_id&quot;:&quot;123456&quot;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9、要求" tabindex="-1"><a class="header-anchor" href="#_9、要求"><span>9、要求</span></a></h2><p>① 根据账号信息部分用户调用流式对话接口，部分用户调用本地知识库流式对话接口； ② 将历史聊天记录加入到对话中，可自行定制传输几条历史聊天记录； ③ 使用本地知识库流式对话接口时，如果返回匹配到本地知识库，则将在聊天末尾添加信息来源，效果如下：</p><p><img src="https://api.apifox.cn/api/v1/projects/2134873/resources/402653/image-preview" alt="1696904977063.png"></p><p>***注意：目前如果匹配到知识库内容只返回一条匹配度最高的信息来源，所返回结果为列表，方便后续添加多条匹配内容；请根据返回id自行查询问题，点击来源链接可跳转到所匹配的内容</p>`,87),l=[i];function d(o,u){return n(),t("div",null,l)}const p=s(a,[["render",d],["__file","新建笔记(20231228).html.vue"]]),c=JSON.parse('{"path":"/api/dhs/%E6%95%B0%E9%93%BEAI%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8/%E6%96%B0%E5%BB%BA%E7%AC%94%E8%AE%B0(20231228).html","title":"新建笔记(20231228)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2、本地知识库流式对话接口","slug":"_2、本地知识库流式对话接口","link":"#_2、本地知识库流式对话接口","children":[]},{"level":2,"title":"3、添加单条知识到知识库接口","slug":"_3、添加单条知识到知识库接口","link":"#_3、添加单条知识到知识库接口","children":[]},{"level":2,"title":"4、删除知识库某条知识接口","slug":"_4、删除知识库某条知识接口","link":"#_4、删除知识库某条知识接口","children":[]},{"level":2,"title":"5、获取知识库中知识列表id接口","slug":"_5、获取知识库中知识列表id接口","link":"#_5、获取知识库中知识列表id接口","children":[]},{"level":2,"title":"6、获取知识库中某条知识对应向量列表id及内容接口","slug":"_6、获取知识库中某条知识对应向量列表id及内容接口","link":"#_6、获取知识库中某条知识对应向量列表id及内容接口","children":[]},{"level":2,"title":"7、根据关键字搜索知识库中知识","slug":"_7、根据关键字搜索知识库中知识","link":"#_7、根据关键字搜索知识库中知识","children":[]},{"level":2,"title":"8、通过向量id删除指定向量","slug":"_8、通过向量id删除指定向量","link":"#_8、通过向量id删除指定向量","children":[]},{"level":2,"title":"9、要求","slug":"_9、要求","link":"#_9、要求","children":[]}],"git":{"updatedTime":1740969829000,"contributors":[{"name":"apiper","email":"47816635+Xpiper@users.noreply.github.com","commits":1}]},"filePathRelative":"api/dhs/数链AI接口调用/新建笔记(20231228).md"}');export{p as comp,c as data};
