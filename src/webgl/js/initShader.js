export default function (gl) {
  // 创建着色器 并 绑定着色器代码
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(
    vertexShader,
    document.getElementById("vertex-shader").innerText
  );
  gl.shaderSource(
    fragmentShader,
    document.getElementById("fragment-shader").innerText
  );
  // 着色器创建绑定代码完成后，分别对着色器进行编译
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);
  // 程序对象(program)的创建、添加着色器、链接并使用
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);
  return program;  // 返回出使用的程序对象
}
