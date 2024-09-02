# WebGL 学习使用

### 使用 canvas 作为载体，绘制 webgl，并初始化得到 gl 实例

`
  const canvas = document.getElementById("webglCanvas");
  const gl = canvas.getContext("webgl");
`

### API方法说明
** 通过attribute设置变量 **
`
  attribute vec2 aPos = vec2(0.5, 0.5)
`

** 将绑定到 gl.ARRAY_BUFFER 的缓冲区对象分配给由 attribute变量 **
`
  /** 参数说明： 
    * 参数一： posLocation 为attribute变量，
    * 参数二： 2 表示每个顶点元素数量
    * 参数三： gl.FLOAT 表示使用浮点型
   */
  gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);
`

** 创建缓冲区和绑定缓冲区数据 **
bindBuffer参数：gl.ARRAY_BUFFER  顶点等缓冲区数据；gl.ELEMENT_ARRAY_BUFFER  顶点索引缓冲区数据
`
  const vetices = new Floa32Array([... ]);  // 缓冲区数据：可以包含顶点坐标、颜色等
  const bufferData = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferData);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);  
`

** 获取着色器源码中定义的变量 **
`
  // 从程序对象中获取着色器源码定义的变量
  const aPos = gl.getAttribLocation(program, "aPos");  // 这里的aPos在顶点着色器源码中使用" attribute vec2 aPos "代码定义
`

** 使用vertexAttrib[??]系列方法改变变量的坐标值 **
`
  gl.vertexAttrib2f(posLocation, -0.5, 0);  // 例如使用vertexAttrib2f()方法改变二维坐标，传入参数分别为x和y坐标轴
`

** 将缓冲区数据 附加到变量上，然后再调用激活方法，即可使用 **
`
  // aColor 获取的变量名称；Float32Array.BYTES_PER_ELEMENT 类型化数组的字节长度
  gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT); 
  gl.enableVertexAttribArray(aColor);   // 激活变量
`

** 绘制图元方法 **
  使用gl.drawArrays(mode, first, count) 方法绘制图元，第一个参数设置图元类型
  参数mode：指定要绘制的图元类型，可以是以下值：
  * gl.POINTS 绘制一系列点
  * gl.LINES  绘制一系列不连接的线段
  * gl.LINE_STRIP  绘制一系列连接的线段
  * gl.LINE_LOOP  绘制闭合的线段
  * gl.TRIANGLES  绘制三角形
  * gl.TRIANGLES_STRIP  绘制一个三角形条带（即 连续三角形）
  * gl.TRIANGLES_FAN  绘制一个三角形扇形（以一个点为顶点，其他点均与之连接形成三角形）

  使用gl.drawElements(mode, count, type, offset)绘制图形，参数说明如下：
  * mode 绘制的图形类型，如三角形gl.TRIANGLES等
  * count 要绘制的索引数量
  * type  索引数组中数据类型，gl.UNSIGNED_BYTE 8位无符号整数；gl.UNSIGNED_SHORT 16位无符号整数；
          gl.UNSIGNED_INT 32位无符号整数
  * offset  偏移量


代码示例：  
`
  gl.drawArrays(gl.TRIANGLES, 0, 3);
`

** uniform变量使用 **
定义在整个渲染过程中保持不变的变量，常用于传递变换矩阵、光照参数等
`
  // 顶点着色器代码 定义
  uniform vec2 aTranslate;

  // 获取Uniform变量并设置值
  const aTranslate = gl.getUniformLocation(program, "aTranslate");
  const translateVal = [ 0.2, 0.2 ];
  gl.uniform2fv(aTranslate, translateVal);
`

** 坐标变换 **
根据矩阵乘法倒推出坐标变换矩阵，如下：
1. 平移dx或xy
`
  mat4 translateX = mat4(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 1,
    dx, dy, 0, 1
  );
`
2. 放大或缩小，x轴放大或缩小sx倍，y轴放大或缩小sy倍
`
  mat4 scale = mat4(
    sx, 0, 0, 0,
    0, sy, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  )
`
3. 旋转矩阵公式
`
  // 如旋转45° - z轴
  float radian = radians(45.0);  // 使用内置数学函数将角度转为弧度
  float sin = sin(radian);  // 这里的sin和cos均是内置的数学函数
  float cos = cos(radian);
  mat4 rotate = mat4(
    cos, -sin, 0, 0,
    sin, cos, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
  // 旋转特定角度 - x轴
   mat4 rx = mat4(
    1, 0, 0, 0,
    0, cos, -sin, 0,
    0, sin, cos, 0,
    0, 0, 0, 1
  );
  // 旋转特定角度 - y轴
   mat4 rx = mat4(
    cos, 0, -sin, 0,
    0, 1, 0, 0,
    sin, 0, cos, 0,
    0, 0, 0, 1
  );
`


