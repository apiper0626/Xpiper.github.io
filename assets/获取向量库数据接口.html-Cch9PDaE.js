import{_ as t,c as n,o as s,a as e}from"./app-keFXRlWq.js";const a={},i=e(`<h1 id="获取向量库数据接口-md" tabindex="-1"><a class="header-anchor" href="#获取向量库数据接口-md"><span>获取向量库数据接口.md</span></a></h1><p>**接口URL **：<a href="http://116.204.85.243:8080/local_doc_qa/list_doc_vector_id" target="_blank" rel="noopener noreferrer">http://116.204.85.243:8080/local_doc_qa/list_doc_vector_id</a></p><p><strong>请求方式</strong>：GET</p><p><strong>请求参数</strong>：</p><table><thead><tr><th>参数名</th><th>参数值</th><th>类型</th></tr></thead><tbody><tr><td>knowledge_base_id</td><td>env_samples_3</td><td>string</td></tr></tbody></table><p><strong>成功响应示例</strong>：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;code&quot;: 200,</span>
<span class="line">    &quot;msg&quot;: &quot;success&quot;,</span>
<span class="line">    &quot;data&quot;: [</span>
<span class="line">        {</span>
<span class="line">            &quot;name&quot;: &quot;87509736484900192002159955&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;粒度分布的概念&quot;,</span>
<span class="line">            &quot;id&quot;: &quot;d2e7187ff4c0b9108004379b1578a398&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;粒度分布是指用仪器和方法来检测反映出样品中不同粒径颗粒占颗粒总量的百分数。有区间分布和累积分布两种形式。区间分布表示粒径区间中颗粒的百分含量。\\n累积粒度分布指单位体积空气中大于或小于某规定粒径的颗粒粒子数目或体积、质量等于颗粒的总粒子数或总体积、总质量的百分比对其不同粒径的关系，可用此作出其粒度分布曲线图。\\n由于颗粒物中粒径小的粒子数目多于粒径大的粒子数目，所以多用小于规定粒径的表示法。&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;name&quot;: &quot;87487784798641272002656855&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;PM2.5/PM10比值反映什么？&quot;,</span>
<span class="line">            &quot;id&quot;: &quot;14cb628e1ea2d0cac90148db27730363&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;PM2.5/PM10比值反映城市一次颗粒物治理情况，比值越低，一次颗粒物排放源治理需加强。以5月份为例，颗粒物治理水平较好的城市，如珠海、重庆等城市能达到0.6以上；一般城市西安、郑州等在0.45-0.5左右；若低于0.4，则说明颗粒物治理水平较差，亟需加强扬尘管控力度&quot;</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            &quot;name&quot;: &quot;104586798253759012252154675&quot;,</span>
<span class="line">            &quot;title&quot;: &quot;王振强&quot;,</span>
<span class="line">            &quot;id&quot;: &quot;f343a43003adf44012df76d70a777c13&quot;,</span>
<span class="line">            &quot;content&quot;: &quot;王振强就职于河北先河环保科技股份有限公司，入职时间2025年；&quot;</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p><table><thead><tr><th>参数值</th><th>内容说明</th></tr></thead><tbody><tr><td>code</td><td>200：表示成功响应<br>404：响应失败<br>403：响应失败</td></tr><tr><td>msg</td><td>成功响应信息</td></tr><tr><td>data</td><td>成功响应返回向量库中存储的内容，<br>以列表形式存储多组信息</td></tr><tr><td>name</td><td>文本对应的id</td></tr><tr><td>title</td><td>文本对应的问题或题目</td></tr><tr><td>id</td><td>表示向量id</td></tr><tr><td>content</td><td>表示向量内容</td></tr></tbody></table>`,9),d=[i];function l(o,r){return s(),n("div",null,d)}const u=t(a,[["render",l],["__file","获取向量库数据接口.html.vue"]]),p=JSON.parse('{"path":"/api/dhs/%E6%95%B0%E9%93%BEAI%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8/%E8%8E%B7%E5%8F%96%E5%90%91%E9%87%8F%E5%BA%93%E6%95%B0%E6%8D%AE%E6%8E%A5%E5%8F%A3.html","title":"获取向量库数据接口.md","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1740969829000,"contributors":[{"name":"apiper","email":"47816635+Xpiper@users.noreply.github.com","commits":1}]},"filePathRelative":"api/dhs/数链AI接口调用/获取向量库数据接口.md"}');export{u as comp,p as data};
